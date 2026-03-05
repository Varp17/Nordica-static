import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCurrency } from '@/contexts/CurrencyContext';
import { useCart } from '@/contexts/CartContext';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { formatPrice } = useCurrency();
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
  };

  return (
    <Link to={`/products/${product.slug}`} className="relative bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-elevated hover:border-primary/30 hover:-translate-y-1 hover:z-10 h-full flex flex-col group">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badge */}
        {product.badge && (
          <Badge
            className={`absolute top-3 left-3 ${product.badge === 'Sale'
              ? 'bg-destructive text-destructive-foreground'
              : product.badge === 'New'
                ? 'bg-success text-success-foreground'
                : 'bg-primary text-primary-foreground'
              }`}
          >
            {product.badge}
          </Badge>
        )}

        {/* Quick Add */}
        <div
          className="
    absolute inset-x-0 bottom-0 p-4
    bg-gradient-to-t from-background/90 to-transparent

    /* Mobile: always visible */
    opacity-100 translate-y-0

    /* Desktop: show on hover only */
    lg:opacity-0 lg:translate-y-4
    lg:group-hover:opacity-100 lg:group-hover:translate-y-0

    transition-all duration-300
  "
        >
          <Button
            className="w-full gradient-primary"
            size="sm"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Buy Now
          </Button>
          <p className="text-[10px] text-primary text-center mt-1.5 sm:mt-2 opacity-90 leading-tight">
            <span className="sm:hidden">View Details</span>
            <span className="hidden sm:inline">Click to view product</span>
          </p>
        </div>

      </div>

      {/* Content */}
      <div className="p-3 sm:p-6 space-y-1 overflow-visible flex-grow flex flex-col">
        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
          {product.category.replace('-', ' ')}
        </p>

        <div className="relative overflow-visible min-h-[3rem] sm:min-h-[4.5rem]">
          <h3
            className="font-semibold text-foreground group-hover:text-primary transition-all duration-300 text-sm sm:text-lg leading-tight sm:leading-relaxed"
          >
            <span className="line-clamp-2 sm:line-clamp-3">
              {product.name}
            </span>
          </h3>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => {
              const rating = Math.round(product.rating * 2) / 2;

              if (i + 1 <= Math.floor(rating)) {
                return (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-blue-600 text-blue-600"
                  />
                );
              }

              if (i < rating && i + 1 > rating) {
                return (
                  <div key={i} className="relative h-4 w-4">
                    <Star className="h-4 w-4 text-muted-foreground/30" />
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{ width: "50%" }}
                    >
                      <Star className="h-4 w-4 fill-blue-600 text-blue-600" />
                    </div>
                  </div>
                );
              }

              return (
                <Star
                  key={i}
                  className="h-4 w-4 text-muted-foreground/30"
                />
              );
            })}
          </div>

          <span className="text-xs text-muted-foreground">
            ({product.reviewCount})
          </span>

          <span className="text-red-500 text-xs">
            Rating as per amazon.com
          </span>
        </div>

        {/* Spacer to push price to bottom */}
        <div className="flex-grow"></div>

        {/* Price */}
        {product.price != null && (
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-foreground">
              {formatPrice(product.price)}
            </span>

            {product.originalPrice != null && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;