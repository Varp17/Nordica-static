import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ExternalLink, ShieldCheck } from 'lucide-react';
import { Product } from '@/data/products';
import { useCurrency } from '@/contexts/CurrencyContext';

interface CheckoutModalProps {
    product: Product;
    isOpen: boolean;
    onClose: () => void;
}

const CheckoutModal = ({ product, isOpen, onClose }: CheckoutModalProps) => {
    const { formatPrice } = useCurrency();

    const handleProceedToAmazon = () => {
        if (product.url) {
            window.open(product.url, '_blank');
        }
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden rounded-2xl border-none shadow-2xl">
                <DialogHeader className="p-6 bg-primary text-primary-foreground">
                    <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                        <ShoppingCart className="h-6 w-6" />
                        Selection Confirmed
                    </DialogTitle>
                </DialogHeader>

                <div className="p-8 space-y-8">
                    <div className="flex gap-6 items-start">
                        <div className="w-24 h-24 bg-secondary/50 rounded-xl overflow-hidden border border-border shrink-0">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-contain p-2"
                            />
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-bold text-lg leading-tight line-clamp-2">
                                {product.name}
                            </h3>
                            <p className="text-2xl font-black text-primary">
                                {formatPrice(product.price)}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground bg-secondary/30 px-2 py-1 rounded w-fit">
                                <ShieldCheck className="h-3 w-3 text-success" />
                                Original Product - Verified Quality
                            </div>
                        </div>
                    </div>

                    <div className="bg-secondary/20 p-6 rounded-2xl space-y-4 border border-border/50">
                        <div className="flex justify-between items-center text-sm font-medium">
                            <span className="text-muted-foreground">Regional Store</span>
                            <span className="text-foreground">Amazon Official Store</span>
                        </div>
                        <div className="flex justify-between items-center text-sm font-medium">
                            <span className="text-muted-foreground">Availability</span>
                            <span className="text-success font-bold">In Stock</span>
                        </div>
                        <div className="border-t border-border pt-4 mt-4 flex justify-between items-center">
                            <span className="font-bold text-lg">Total Estimate</span>
                            <span className="font-black text-2xl text-primary">{formatPrice(product.price)}</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <Button
                            className="w-full h-14 text-lg font-bold gradient-primary shadow-xl hover:shadow-primary/20 transition-all rounded-xl gap-3"
                            onClick={handleProceedToAmazon}
                        >
                            Confirm & Buy on Amazon
                            <ExternalLink className="h-5 w-5" />
                        </Button>
                        <p className="text-[11px] text-center text-muted-foreground px-4 leading-relaxed italic">
                            *You are being redirected to our official Amazon store to complete your secure checkout. Shipping and returns are handled directly by Amazon.
                        </p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default CheckoutModal;
