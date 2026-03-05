import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, ShoppingCart } from "lucide-react";
import { useCurrency } from '@/contexts/CurrencyContext';
import { Link } from "react-router-dom";
import { products as allProducts } from '@/data/products';

export default function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const { formatPrice } = useCurrency();

  // Pick first 6 for featured
  const products = allProducts.slice(0, 6);

  const getItemsPerPage = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 2;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
      setCurrentIndex(0); // Reset to first slide on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = products.length;
  const maxIndex = totalSlides - itemsPerPage;

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      const next = prev + 1;
      return next > maxIndex ? 0 : next;
    });
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, maxIndex]);

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      const next = prev - 1;
      return next < 0 ? maxIndex : next;
    });
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, maxIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [goToNext]);

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const totalDots = maxIndex + 1;

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base lg:text-lg">
            Discover our most popular detailing products trusted by professionals worldwide
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 px-2 md:px-3"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <Link to={`/products/${product.slug}`} className="block h-full group">
                    <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 group h-full">
                      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-slate-100">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-3 md:top-4 left-3 md:left-4">
                          <span className="px-2 py-1 md:px-3 md:py-1.5 bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg">
                            {product.badge}
                          </span>
                        </div>
                      </div>

                      <div className="p-4 md:p-6">
                        <h3 className="text-[10px] sm:text-sm font-bold text-gray-900 mb-2 md:mb-3 line-clamp-2 min-h-[2.5rem] md:min-h-[3.5rem]">
                          {product.name}
                        </h3>

                        <div className="flex items-center gap-1 mb-2 md:mb-3">
                          {[...Array(5)].map((_, i) => {
                            const rating = Math.round(product.rating * 2) / 2;

                            if (i + 1 <= Math.floor(rating)) {
                              return (
                                <Star
                                  key={i}
                                  className="w-4 h-4 fill-blue-600 text-blue-600"
                                />
                              );
                            }

                            if (i < rating && i + 1 > rating) {
                              return (
                                <div key={i} className="relative w-4 h-4">
                                  <Star className="w-4 h-4 text-gray-300" />
                                  <div
                                    className="absolute inset-0 overflow-hidden"
                                    style={{ width: "50%" }}
                                  >
                                    <Star className="w-4 h-4 fill-blue-600 text-blue-600" />
                                  </div>
                                </div>
                              );
                            }

                            return (
                              <Star
                                key={i}
                                className="w-4 h-4 text-gray-300"
                              />
                            );
                          })}
                        </div>

                        <p className="text-xl md:text-2xl font-bold text-blue-600 mb-3 md:mb-4">
                          {formatPrice(product.price)}
                        </p>
                        <button className="w-full px-4 py-2 md:px-6 md:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Hidden on mobile */}
          <div className="hidden md:block">
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4">
              <button
                onClick={goToPrevious}
                disabled={isTransitioning}
                className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white transition-all shadow-xl hover:scale-110 pointer-events-auto -translate-x-4 md:-translate-x-6 border-2 border-slate-200 disabled:opacity-50"
                aria-label="Previous products"
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-gray-900" />
              </button>
              <button
                onClick={goToNext}
                disabled={isTransitioning}
                className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white transition-all shadow-xl hover:scale-110 pointer-events-auto translate-x-4 md:translate-x-6 border-2 border-slate-200 disabled:opacity-50"
                aria-label="Next products"
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-gray-900" />
              </button>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-1.5 md:gap-2 mt-6 md:mt-10">
          {[...Array(totalDots)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`h-2 md:h-2.5 rounded-full transition-all duration-300 ${currentIndex === index
                ? "w-8 md:w-10 bg-blue-600 shadow-lg"
                : "w-2 md:w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="flex md:hidden justify-center gap-3 mt-6">
          <button
            onClick={goToPrevious}
            disabled={isTransitioning}
            className="h-10 w-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all shadow-md disabled:opacity-50"
            aria-label="Previous products"
          >
            <ChevronLeft className="h-5 w-5 text-gray-900" />
          </button>
          <button
            onClick={goToNext}
            disabled={isTransitioning}
            className="h-10 w-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all shadow-md disabled:opacity-50"
            aria-label="Next products"
          >
            <ChevronRight className="h-5 w-5 text-gray-900" />
          </button>
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Link to={'/products'}>
            <button className="px-6 py-2.5 md:px-8 md:py-3 bg-white text-gray-900 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2 mx-auto text-sm md:text-base">
              View All Products
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}