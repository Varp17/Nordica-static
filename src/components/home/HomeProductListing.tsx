import React from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function HomeProductListing() {
    // Show first 6 products as a listing
    const displayProducts = products.slice(0, 6);

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
                            Our Product Selection
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Professional-grade tools for every detailing task
                        </p>
                    </div>
                    <Link
                        to="/products"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                    >
                        View All Products
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="mt-12 text-center lg:hidden">
                    <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                        <Link to="/products">
                            See More Products
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
