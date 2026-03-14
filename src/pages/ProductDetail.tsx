import { useParams, Link } from 'react-router-dom';
import { useState, useRef, useEffect, Suspense, lazy } from 'react';
import {
    ArrowLeft, Star, ShoppingCart, Check, Shield, Truck,
    RotateCcw, Minus, Plus, ChevronDown, Heart, Info,
    Package, Share2, MapPin, Lock, ChevronRight, X, ZoomIn
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/ui/ProductCard';
import { getProductBySlug, products } from '@/data/products';
import { useCurrency } from '@/contexts/CurrencyContext';

// Components
import ProductDescription from '@/components/productdetailpage/ProductDescription';
import ProductVideoSection from '@/components/productdetailpage/ProductVdieoSection';
import CheckoutModal from '@/components/CheckoutModal';

// Fallback images from assets

// --- Pure CSS Magnifier Lens ---
const Magnifier = ({ src, alt }: { src: string; alt: string }) => {
    const [showMagnifier, setShowMagnifier] = useState(false);
    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const zoomLevel = 2.5;

    return (
        <div
            className="relative h-full w-full flex items-center justify-center cursor-crosshair"
            onMouseEnter={(e) => {
                const elem = e.currentTarget;
                const { width, height } = elem.getBoundingClientRect();
                setSize([width, height]);
                setShowMagnifier(true);
            }}
            onMouseMove={(e) => {
                const elem = e.currentTarget;
                const { top, left } = elem.getBoundingClientRect();
                const x = e.pageX - left - window.scrollX;
                const y = e.pageY - top - window.scrollY;
                setXY([x, y]);
            }}
            onMouseLeave={() => setShowMagnifier(false)}
        >
            <img src={src} alt={alt} className="max-h-full w-auto object-contain" />
            {showMagnifier && (
                <div
                    className="absolute pointer-events-none rounded-full border border-gray-100 shadow-2xl bg-white overflow-hidden z-20 hidden lg:block"
                    style={{
                        height: '240px',
                        width: '240px',
                        top: `${y - 120}px`,
                        left: `${x - 120}px`,
                        backgroundImage: `url('${src}')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
                        backgroundPosition: `${-x * zoomLevel + 120}px ${-y * zoomLevel + 120}px`,
                    }}
                />
            )}
        </div>
    );
};

const ProductDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const product = getProductBySlug(slug || '');
    const { formatPrice } = useCurrency();

    const [quantity, setQuantity] = useState(1);
    const [selectedImageIdx, setSelectedImageIdx] = useState(0);
    const [selectedColor, setSelectedColor] = useState(product?.colorOptions?.[0]?.value ?? 'default');
    const [showMoreDetails, setShowMoreDetails] = useState(false);
    const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [galleryFade, setGalleryFade] = useState(true);

    // Color option selection
    const selectedColorOption = product?.colorOptions?.find(c => c.value === selectedColor) || product?.colorOptions?.[0];

    // Image logic: Get reactive images based on selected color
    // If variantImages are not defined, we inject the selected color's image as the first thumbnail
    const activeImages = (() => {
        if (product?.variantImages?.[selectedColor]) {
            return product.variantImages[selectedColor];
        }

        const baseImages = product?.images || [product?.image];
        if (selectedColorOption?.image && baseImages.length > 0) {
            // Ensure the first image in the gallery is the one for the selected variant
            return [selectedColorOption.image, ...baseImages.slice(1)];
        }

        return baseImages;
    })();

    const mainImage = activeImages[selectedImageIdx] || activeImages[0];
    const currentPrice = selectedColorOption?.price ?? product?.price ?? 0;

    // Trigger fade transition on image change
    useEffect(() => {
        setGalleryFade(false);
        const timer = setTimeout(() => setGalleryFade(true), 150);
        return () => clearTimeout(timer);
    }, [mainImage]);

    // Reset state when product changes
    useEffect(() => {
        if (product) {
            setSelectedColor(product.colorOptions?.[0]?.value ?? 'default');
            setSelectedImageIdx(0);
        }
    }, [slug, product]);

    if (!product) {
        return (
            <Layout>
                <div className="pt-20 pb-32 text-center">
                    <h1 className="text-3xl font-bold mb-6 italic">Product Not Found</h1>
                    <Link to="/products"><Button className="rounded-full px-10">Return to Shop</Button></Link>
                </div>
            </Layout>
        );
    }

    const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

    return (
        <Layout>
            <div className="bg-white min-h-screen">
                {/* Breadcrumb */}
                <div className="w-full px-2 sm:px-4 py-4 border-b border-gray-100">
                    <nav className="flex items-center gap-1.5 text-sm text-gray-500 max-w-screen-2xl mx-auto">
                        <Link to="/" className="hover:text-primary">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link to="/products" className="hover:text-primary">Shop</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-gray-800 truncate max-w-xs">{selectedColorOption?.title || product.name}</span>
                    </nav>
                </div>

                {/* Main Product Section — full width, minimal side padding */}
                <div className="w-full max-w-screen-2xl mx-auto px-2 sm:px-4 py-6">
                    <div className="grid lg:grid-cols-12 gap-6 xl:gap-10">

                        {/* LEFT COLUMN: Gallery */}
                        <div className="lg:col-span-7 flex flex-col md:flex-row gap-4 lg:sticky lg:top-20 self-start">
                            {/* Thumbnails */}
                            <div className="hidden md:flex flex-col gap-2 min-w-[64px]">
                                {activeImages.slice(0, 7).map((img, i) => (
                                    <button
                                        key={i}
                                        onMouseEnter={() => setSelectedImageIdx(i)}
                                        onClick={() => setSelectedImageIdx(i)}
                                        className={`w-16 h-16 rounded-lg border-2 transition-all p-1 bg-white overflow-hidden ${selectedImageIdx === i ? 'border-primary shadow-sm' : 'border-gray-200 hover:border-gray-400'}`}
                                    >
                                        <img src={img} className="w-full h-full object-contain" />
                                    </button>
                                ))}
                            </div>

                            {/* Main Image */}
                            <div className="relative flex-1 aspect-square bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center group cursor-zoom-in overflow-hidden">
                                <div className={`w-full h-full p-3 transition-all duration-300 ${galleryFade ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsLightboxOpen(true)}>
                                    <Magnifier src={mainImage} alt={product.name} />
                                </div>
                                {product.badge && (
                                    <Badge className="absolute top-4 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full">{product.badge}</Badge>
                                )}
                                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-gray-400 hover:text-primary border border-gray-200"><Share2 className="w-4 h-4" /></button>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Product Info */}
                        <div className="lg:col-span-5 space-y-5">

                            {/* Title + Brand + Rating */}
                            <div className="space-y-2">
                                <p className="text-xs text-gray-400 uppercase tracking-wide">{product.category.replace(/-/g, ' ')}</p>
                                <h1 className="text-xl lg:text-2xl font-bold text-gray-900 leading-snug">
                                    {selectedColorOption?.title || product.name}
                                </h1>
                                <Link to="/" className="text-sm text-primary hover:underline font-medium inline-block">
                                    Visit the {product.brand} Store
                                </Link>

                                <div className="flex items-center gap-4 pt-1">
                                    <div className="flex items-center gap-1 text-orange-400">
                                        {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-200'}`} />)}
                                        <span className="text-gray-700 font-semibold ml-1 text-sm">{product.rating}</span>
                                    </div>
                                    <span className="text-sm text-gray-500">{product.reviewCount.toLocaleString()} verified reviews</span>
                                </div>
                            </div>

                            {/* Short Description */}
                            <p className="text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                {product.description}
                            </p>

                            {/* Price */}
                            <div className="flex items-baseline gap-3 pt-1">
                                <span className="text-3xl font-bold text-gray-900">{formatPrice(currentPrice)}</span>
                                {product.originalPrice && (
                                    <span className="text-lg text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
                                )}
                                <span className="text-sm text-green-600 font-semibold ml-2">In Stock</span>
                            </div>
                            <p className="text-xs text-gray-400 -mt-3">Ready to ship. Free shipping on eligible orders.</p>

                            {/* Color Options */}
                            {product.colorOptions && product.colorOptions.length > 0 && (
                                <div className="space-y-2 pt-1">
                                    <p className="text-sm font-semibold text-gray-700">
                                        Color: <span className="font-normal text-gray-900">{selectedColorOption?.name}</span>
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {product.colorOptions.map((color) => (
                                            <button
                                                key={color.value}
                                                onMouseEnter={() => { setSelectedColor(color.value); setSelectedImageIdx(0); }}
                                                onClick={() => { setSelectedColor(color.value); setSelectedImageIdx(0); }}
                                                title={color.name}
                                                className={`relative rounded-xl border-2 p-1 transition-all ${selectedColor === color.value ? 'border-primary ring-2 ring-primary/20' : 'border-gray-200 hover:border-gray-400'}`}
                                            >
                                                <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-50">
                                                    <img src={color.image} className="w-full h-full object-contain" />
                                                </div>
                                                <p className="text-center text-[11px] text-gray-700 mt-0.5">{color.name}</p>
                                                <p className="text-center text-[11px] font-semibold text-primary">{formatPrice(color.price)}</p>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Quantity + Buy */}
                            <div className="space-y-3 pt-2 border-t border-gray-100">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                                        <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="h-10 w-10 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors font-bold text-lg">−</button>
                                        <span className="w-10 text-center font-semibold text-gray-900">{quantity}</span>
                                        <button onClick={() => setQuantity(q => q + 1)} className="h-10 w-10 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors font-bold text-lg">+</button>
                                    </div>
                                    <span className="text-sm text-gray-500">Subtotal: <span className="font-semibold text-gray-900">{formatPrice(currentPrice * quantity)}</span></span>
                                </div>

                                <div className="flex gap-3">
                                    <Button onClick={() => setIsCheckoutModalOpen(true)} className="flex-1 h-12 rounded-xl font-semibold text-base">Buy Now</Button>
                                    <Button variant="outline" className="h-12 w-12 rounded-xl border-gray-200">
                                        <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors" />
                                    </Button>
                                </div>
                            </div>

                            {/* Trust Badges */}
                            <div className="grid grid-cols-3 gap-3 border border-gray-100 rounded-xl p-4 bg-gray-50/60">
                                {[
                                    { icon: Shield, label: 'Secure Checkout', sub: 'SSL Encrypted' },
                                    { icon: Truck, label: 'Free Shipping', sub: 'On eligible orders' },
                                    { icon: RotateCcw, label: '30-Day Returns', sub: 'Hassle free' },
                                ].map(({ icon: Icon, label, sub }, i) => (
                                    <div key={i} className="flex flex-col items-center text-center gap-1">
                                        <Icon className="w-5 h-5 text-primary" />
                                        <span className="text-xs font-semibold text-gray-700">{label}</span>
                                        <span className="text-[11px] text-gray-400">{sub}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Amazon Link */}
                            {product.url && (
                                <a
                                    href={product.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-primary hover:underline font-medium"
                                >
                                    <Package className="w-4 h-4" />
                                    Also available on Amazon
                                </a>
                            )}

                            {/* Specifications */}
                            <div className="border border-gray-200 rounded-xl overflow-hidden">
                                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                                    <h3 className="text-sm font-semibold text-gray-700">Product Details</h3>
                                </div>
                                <table className="w-full text-sm">
                                    <tbody>
                                        {[
                                            ['Brand', product.specifications.brand],
                                            ['Material', product.specifications.material],
                                            ['Weight', product.specifications.weight],
                                            ['Dimensions', product.specifications.dimensions],
                                            ['Manufacturer', product.specifications.manufacturer],
                                        ].map(([label, value], i) => (
                                            <tr key={i} className="border-b border-gray-100 last:border-0">
                                                <td className="py-2.5 px-4 text-gray-500 w-2/5 text-xs font-medium">{label}</td>
                                                <td className="py-2.5 px-4 text-gray-800 text-xs">{value}</td>
                                            </tr>
                                        ))}
                                        {product.compatibility?.length > 0 && (
                                            <tr className="border-t border-gray-100">
                                                <td className="py-2.5 px-4 text-gray-500 text-xs font-medium align-top">Compatible With</td>
                                                <td className="py-2.5 px-4 text-gray-800 text-xs">{product.compatibility.join(', ')}</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {/* About this item */}
                            <div className="space-y-3">
                                <h3 className="text-sm font-semibold text-gray-800">About this item</h3>
                                <ul className="space-y-2">
                                    {product.features.map((feature, idx) => (
                                        <li key={idx} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                                            <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                            <span>
                                                {feature.includes(':') ? (
                                                    <>
                                                        <strong className="font-semibold text-gray-800">{feature.split(':')[0]}: </strong>
                                                        {feature.split(':').slice(1).join(':')}
                                                    </>
                                                ) : feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Sections */}
                <Suspense fallback={<div className="h-64 flex items-center justify-center"><div className="w-10 h-10 border-4 border-primary/20 border-t-primary animate-spin rounded-full" /></div>}>
                    <div className="mt-16 border-t border-gray-100 bg-gray-50/20">
                        <ProductDescription
                            heroImage={product.image}
                            heroImageAlt={product.name}
                            description={product.longDescription}
                            features={activeImages.slice(1, 4).map((img, i) => ({
                                image: img,
                                label: ['PREMIUM', 'DURABLE', 'QUALITY'][i % 3],
                                alt: product.name
                            }))}
                        />
                    </div>
                    {product.videos && (
                        <div className="py-20 border-t border-gray-100">
                            <ProductVideoSection
                                productName={product.name}
                                mainVideo={product.videos.main}
                                additionalVideos={product.videos.additional}
                            />
                        </div>
                    )}
                </Suspense>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="w-full max-w-screen-2xl mx-auto px-2 sm:px-4 py-20 border-t border-gray-100">
                        <h2 className="text-xl font-bold text-gray-900 mb-8">You might also need</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
                        </div>
                    </div>
                )}

                {/* Lightbox */}
                {isLightboxOpen && (
                    <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-6" onClick={() => setIsLightboxOpen(false)}>
                        <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-all"><X className="w-8 h-8" /></button>
                        <img src={mainImage} className="max-h-full max-w-full object-contain shadow-2xl" />
                    </div>
                )}
            </div>

            <CheckoutModal product={product} isOpen={isCheckoutModalOpen} onClose={() => setIsCheckoutModalOpen(false)} />
        </Layout>
    );
};

export default ProductDetail;
