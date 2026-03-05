import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { CartProvider } from "./contexts/CartContext";
import { CurrencyProvider } from "./contexts/CurrencyContext";
import ScrolltoTop from "./components/ScrolltoTop";

// ── Lazy-loaded pages ────────────────────────────────────────────────────────
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const WhereToBuy = lazy(() => import("./pages/WhereToBuy"));
const Cart = lazy(() => import("./pages/Cart"));
const Products = lazy(() => import("./pages/Product"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Media = lazy(() => import("./pages/Media"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ShippingUS = lazy(() => import("./pages/shipping-returns").then(m => ({ default: () => <m.ShippingReturnsPage region="us" /> })));
const ShippingCA = lazy(() => import("./pages/shipping-returns").then(m => ({ default: () => <m.ShippingReturnsPage region="ca" /> })));
const FaqUS = lazy(() => import("./pages/Faqpage").then(m => ({ default: () => <m.FAQPage region="us" /> })));
const FaqCA = lazy(() => import("./pages/Faqpage").then(m => ({ default: () => <m.FAQPage region="ca" /> })));

// ── Page loading fallback ────────────────────────────────────────────────────
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-4">
      <div className="h-10 w-10 rounded-full border-4 border-primary border-t-transparent animate-spin" />
      <p className="text-sm text-muted-foreground font-medium">Loading…</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CurrencyProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrolltoTop />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/where-to-buy" element={<WhereToBuy />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:slug" element={<ProductDetail />} />
                <Route path="/media" element={<Media />} />
                <Route path="/shipping" element={<ShippingUS />} />
                <Route path="/shipping/ca" element={<ShippingCA />} />
                <Route path="/faq" element={<FaqUS />} />
                <Route path="/faq/ca" element={<FaqCA />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </CurrencyProvider>
  </QueryClientProvider>
);

export default App;

