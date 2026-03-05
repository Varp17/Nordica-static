import { useState } from "react";
import { ChevronDown, Package, CreditCard, Truck, RefreshCw, Shield, HelpCircle, MessageCircle, Mail, MapPin } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

// ─── USA FAQ Data ──────────────────────────────────────────────────────────────
const usFaqCategories = [
  {
    icon: Package,
    title: "Orders & Products",
    questions: [
      {
        question: "How do I place an order?",
        answer: "Browse our products on amazon.com, add items to your cart, and proceed to checkout. All US orders are fulfilled via Amazon Multi-Channel Fulfilment. You'll receive an email confirmation immediately after your purchase."
      },
      {
        question: "Can I modify or cancel my order after placing it?",
        answer: "Orders can only be cancelled before they enter Amazon's fulfilment network. Once fulfilled, cancellation is not possible. Contact support@detailguardz.com as soon as possible if you need to cancel."
      },
      {
        question: "Do you offer bulk or wholesale pricing?",
        answer: "Yes! We offer special pricing for bulk orders and professional detailers. Contact our sales team at wholesale@detailguardz.com with your requirements and we'll provide a custom quote."
      },
      {
        question: "Are your products safe for all vehicle types?",
        answer: "Our products are designed to be safe for all vehicle types when used as directed. Each product page includes specific usage instructions and compatibility information. Contact us for personalized recommendations."
      },
      {
        question: "Where are DETAIL GUARDZ products manufactured?",
        answer: "All DETAIL GUARDZ products are proudly designed and manufactured in Canada using industrial-grade materials. They meet rigorous quality standards and are trusted by professional detailers worldwide."
      }
    ]
  },
  {
    icon: Truck,
    title: "Shipping & Delivery",
    questions: [
      {
        question: "What are the shipping options for US orders?",
        answer: "US orders are fulfilled via Amazon Multi-Channel Fulfilment. Standard delivery typically takes 3–7 business days. Expedited options (1–3 business days) may be available at checkout depending on your location."
      },
      {
        question: "Do you offer free shipping?",
        answer: "Free shipping is available on qualifying Amazon orders over $35. Prime members enjoy free delivery on eligible orders. See product pages on Amazon for current shipping offers."
      },
      {
        question: "How can I track my order?",
        answer: "Once your order ships, you'll receive an email with a tracking number and a link. Tracking updates are managed through the assigned carrier (UPS, USPS, FedEx, etc.). If you don't receive tracking info within 48 hours, please contact us."
      },
      {
        question: "What if my package is lost or damaged during shipping?",
        answer: "If your package is lost or arrives damaged, contact us within 7 days at support@detailguardz.com with your order number and photos. We'll work with Amazon and the carrier to arrange a replacement or full refund."
      },
      {
        question: "Can I change my shipping address after ordering?",
        answer: "Orders are shipped to the address entered at checkout. We cannot modify the shipping address once the order has entered Amazon's fulfilment process. Please double-check your address before confirming your order."
      }
    ]
  },
  {
    icon: CreditCard,
    title: "Payment & Pricing",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer: "All US orders are processed through Amazon. Amazon accepts major credit/debit cards (Visa, Mastercard, Amex, Discover), Amazon Pay, PayPal, Apple Pay, Google Pay, and Buy Now Pay Later options. All prices are in USD ($)."
      },
      {
        question: "Is my payment information secure?",
        answer: "Yes. All transactions are processed through Amazon's secure, PCI-compliant payment system with SSL encryption. DETAIL GUARDZ never directly stores your payment details."
      },
      {
        question: "Do you offer any discounts or promotions?",
        answer: "Yes! We regularly run promotions on Amazon, including Lightning Deals and coupons. Follow us on social media and check our Amazon store page for the latest deals and seasonal sales."
      },
      {
        question: "Are prices in USD?",
        answer: "Yes, all prices on the US website (detailguardz.com and our Amazon US storefront) are displayed in US Dollars (USD). For Canadian pricing in CAD, visit our Canada store at detailguardz.ca."
      }
    ]
  },
  {
    icon: RefreshCw,
    title: "Returns & Refunds",
    questions: [
      {
        question: "What is your return policy for US orders?",
        answer: "US orders are eligible for a FREE 30-day return/replacement through Amazon. The item must be unused and in its original packaging. Initiate a return through your Amazon account or contact us at support@detailguardz.com."
      },
      {
        question: "How long does it take to receive my refund?",
        answer: "Once we receive and inspect your return, refunds are processed within 5–7 business days. Allow an additional 5–10 business days for the refund to appear in your account depending on your bank or card issuer."
      },
      {
        question: "What if I receive a defective or incorrect item?",
        answer: "Contact us within 5 days of delivery at support@detailguardz.com with your order number and clear photos of the product and packaging. We'll arrange a replacement or full refund at no additional cost — including return shipping."
      },
      {
        question: "Can I return opened or used products?",
        answer: "We cannot accept returns on opened or used products unless they are defective or damaged. Opened detailing chemicals, used microfiber products, and final sale items are non-returnable."
      }
    ]
  },
  {
    icon: Shield,
    title: "Warranty & Support",
    questions: [
      {
        question: "Do your products come with a warranty?",
        answer: "DETAIL GUARDZ products are backed by Amazon's Voluntary 30-Day Return Guarantee. For manufacturing defects discovered after 30 days, contact support@detailguardz.com and we'll evaluate on a case-by-case basis."
      },
      {
        question: "How do I contact US customer support?",
        answer: "Email us at support@detailguardz.com or call 1-800-410-6311 (Mon–Fri: 9 AM–6 PM EST, Sat: 10 AM–4 PM EST). For Amazon-related issues you can also use Amazon's messaging system on the order page."
      },
      {
        question: "Where can I find tutorials and usage guides?",
        answer: "Visit our YouTube channel and the product video sections on each product page. We have detailed how-to guides, professional tips, and installation videos for every product in our lineup."
      }
    ]
  },
  {
    icon: HelpCircle,
    title: "Product Information",
    questions: [
      {
        question: "Are your products eco-friendly?",
        answer: "DETAIL GUARDZ are committed to responsible manufacturing. Our products are made from industrial-grade, durable materials designed to last for years — reducing waste from disposable alternatives. Our pad cleaners are biodegradable."
      },
      {
        question: "Are DETAIL GUARDZ products compatible with all bucket sizes?",
        answer: "The Dirt Lock Car Wash Insert fits standard 3–8 gallon round pails with a base diameter between 10.2–10.72 inches. All attachments (Scrub Wall, Scrub & Pump) are designed to snap directly into the Dirt Lock base."
      },
      {
        question: "How should I store my DETAIL GUARDZ products?",
        answer: "Store products in a cool, dry place away from direct sunlight and extreme temperatures. All plastic components are UV-resistant and built for long-term durability. No special storage required for hardware components."
      }
    ]
  }
];

// ─── Canada FAQ Data ───────────────────────────────────────────────────────────
const caFaqCategories = [
  {
    icon: Package,
    title: "Orders & Products",
    questions: [
      {
        question: "How do I place an order in Canada?",
        answer: "Browse and purchase directly on our Canadian website at detailguardz.ca, or through our Amazon.ca storefront. Add items to cart and proceed to checkout. You'll receive an order confirmation email immediately."
      },
      {
        question: "Can I modify or cancel my Canadian order after placing it?",
        answer: "Orders may only be cancelled before they enter our fulfilment process. Contact us immediately at support@detailguardz.ca if you need to cancel. Once dispatched, cancellation is not possible — you may initiate a return after delivery."
      },
      {
        question: "Do you offer bulk or wholesale pricing for Canadian customers?",
        answer: "Yes! Special pricing is available for Canadian detailing businesses and bulk orders. Contact wholesale@detailguardz.ca with your requirements and volume, and our team will provide a custom quote in CAD."
      },
      {
        question: "Are DETAIL GUARDZ products made in Canada?",
        answer: "Yes! All DETAIL GUARDZ products are proudly designed and manufactured in Canada. We use industrial-grade materials and every unit is hand-checked for quality before shipping."
      },
      {
        question: "Are prices in Canadian dollars?",
        answer: "Yes, all prices on detailguardz.ca are displayed in Canadian Dollars (CAD). For US pricing in USD, visit detailguardz.com or our Amazon US storefront."
      }
    ]
  },
  {
    icon: Truck,
    title: "Shipping & Delivery",
    questions: [
      {
        question: "What are the shipping options for Canadian orders?",
        answer: "Canadian orders are shipped via major carriers including Canada Post, UPS, Purolator, and other logistics partners. Standard delivery is 3–10 business days. Expedited options are available at checkout depending on your postal code."
      },
      {
        question: "Do you offer free shipping within Canada?",
        answer: "Free shipping thresholds and options vary by promotion. Check detailguardz.ca and our Amazon.ca listing for current free-shipping offers. Remote and rural postal codes may require additional transit time."
      },
      {
        question: "Do you ship to rural or remote areas of Canada?",
        answer: "Yes, we ship Canada-wide. Rural and remote locations (including Northern Canada) may require 1–5 additional business days beyond standard estimates. Contact us at support@detailguardz.ca for specific postal code estimates."
      },
      {
        question: "How can I track my Canadian order?",
        answer: "Once your order ships, you'll receive an email with a tracking number and link managed by the assigned carrier. If you haven't received tracking info within 48 hours of your ship confirmation, contact support@detailguardz.ca."
      },
      {
        question: "Are there customs duties or taxes on Canadian orders?",
        answer: "Orders shipped within Canada do not incur customs duties. Applicable provincial and federal taxes (HST/GST/PST) will be calculated and displayed at checkout based on your shipping province."
      }
    ]
  },
  {
    icon: CreditCard,
    title: "Payment & Pricing",
    questions: [
      {
        question: "What payment methods do you accept in Canada?",
        answer: "Canadian orders via detailguardz.ca or Amazon.ca accept major credit/debit cards (Visa, Mastercard, Amex), PayPal, Amazon Pay, and other available digital wallets. All prices are in Canadian Dollars (CAD)."
      },
      {
        question: "Is my payment information secure?",
        answer: "Yes. All transactions are processed through SSL-encrypted, PCI-compliant payment gateways. DETAIL GUARDZ never stores your complete payment details on our servers."
      },
      {
        question: "Do you offer any Canadian promotions or discounts?",
        answer: "Yes! We run seasonal promotions, bundle deals, and exclusive discounts for Canadian customers. Follow us on social media and sign up for our newsletter at detailguardz.ca to stay informed."
      },
      {
        question: "Will I be charged in CAD?",
        answer: "Yes, all Canadian store transactions are in CAD. If you accidentally order from our US storefront, you may be charged in USD and subject to cross-border fees — make sure to shop at detailguardz.ca for CAD pricing."
      }
    ]
  },
  {
    icon: RefreshCw,
    title: "Returns & Refunds",
    questions: [
      {
        question: "What is the return policy for Canadian orders?",
        answer: "Canadian orders are eligible for a 30-day return policy. Items must be unused and in original packaging. Contact support@detailguardz.ca to receive a Return Authorization number before shipping anything back."
      },
      {
        question: "Who pays for return shipping in Canada?",
        answer: "Customers are responsible for return shipping costs unless the item is defective, damaged, or incorrect. In those cases, we cover all return shipping costs. Contact us within 5 days of delivery with photos."
      },
      {
        question: "How long does a Canadian refund take?",
        answer: "Once we receive and inspect your return, refunds are processed within 5–10 business days. Allow an additional 5–10 business days for the refund to appear, depending on your bank or card issuer."
      },
      {
        question: "What if I receive a defective or incorrect item?",
        answer: "Contact support@detailguardz.ca within 5 days of delivery with your order number and clear photos. We'll arrange a replacement or full refund at no additional cost, and cover all return shipping."
      }
    ]
  },
  {
    icon: Shield,
    title: "Warranty & Support",
    questions: [
      {
        question: "Do Canadian products come with a warranty?",
        answer: "Yes. Canadian orders include a FREE 30-day refund/replacement guarantee. For manufacturing defects discovered after 30 days, email support@detailguardz.ca and we'll evaluate on a case-by-case basis."
      },
      {
        question: "How do I contact Canadian customer support?",
        answer: "Email us at support@detailguardz.ca. Our team is available Monday–Friday: 9 AM–6 PM EST, Saturday: 10 AM–4 PM EST. You can also reach us through the contact form at detailguardz.ca/contact."
      },
      {
        question: "Is there a physical store in Canada?",
        answer: "We are an online-first brand headquartered in Canada. While we don't have retail storefronts, our products are available on detailguardz.ca and Amazon.ca for fast Canadian shipping."
      }
    ]
  },
  {
    icon: HelpCircle,
    title: "Product Information",
    questions: [
      {
        question: "Are DETAIL GUARDZ products compatible with Canadian tap water?",
        answer: "Yes. All Dirt Lock products work with standard tap water regardless of water hardness or mineral content. The Venturi filtration system traps physical debris — not mineral ions — so water quality doesn't affect performance."
      },
      {
        question: "Can I use the Dirt Lock in winter or cold temperatures?",
        answer: "The Dirt Lock is made from high-strength resin that is resistant to temperature fluctuations. However, avoid using in freezing conditions where water inside the bucket could ice up and crack the plastic components."
      },
      {
        question: "Where can I find Canadian tutorials and usage guides?",
        answer: "Visit our YouTube channel and the product video section on each product detail page. DETAIL GUARDZ also posts Canadian-specific detailing tips on social media @detailguardz."
      }
    ]
  }
];

// ─── Shared Component ──────────────────────────────────────────────────────────
function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border border-border rounded-lg overflow-hidden bg-background transition-all duration-200 hover:shadow-md">
      <button
        onClick={onClick}
        className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-secondary/50 transition-colors"
      >
        <span className="font-semibold text-foreground pr-4">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}>
        <div className="px-6 pb-4 pt-2 text-muted-foreground leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

// ─── Main Export ───────────────────────────────────────────────────────────────
interface FAQPageProps {
  region?: 'us' | 'ca';
}

export function FAQPage({ region = 'us' }: FAQPageProps) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const isCA = region === 'ca';
  const faqCategories = isCA ? caFaqCategories : usFaqCategories;

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">

        {/* Hero */}
        <section className={`py-14 lg:py-20 ${isCA ? 'bg-red-600' : 'bg-primary'}`}>
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto px-4">
              {/* Region Toggle */}
              <div className="flex justify-center mb-8">
                <div className="flex bg-white/15 backdrop-blur-sm rounded-full p-1 gap-1">
                  <Link
                    to="/faq"
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${!isCA
                        ? 'bg-white text-primary shadow'
                        : 'text-white hover:bg-white/20'
                      }`}
                  >
                    🇺🇸 United States
                  </Link>
                  <Link
                    to="/faq/ca"
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${isCA
                        ? 'bg-white text-red-600 shadow'
                        : 'text-white hover:bg-white/20'
                      }`}
                  >
                    🇨🇦 Canada
                  </Link>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
                <MapPin className="h-3.5 w-3.5" />
                {isCA ? 'Canadian Store — detailguardz.ca' : 'US Store — detailguardz.com'}
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-white/80 text-base sm:text-lg">
                {isCA
                  ? 'Find answers to common questions about ordering, shipping across Canada, returns, and pricing in CAD.'
                  : 'Find answers to common questions about our products, US shipping, returns, and Amazon orders.'}
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16 lg:py-24">
          <div className="container-wide max-w-5xl">
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={category.title} className="scroll-mt-24">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${isCA ? 'bg-red-100' : 'bg-primary/10'}`}>
                      <category.icon className={`h-6 w-6 ${isCA ? 'text-red-600' : 'text-primary'}`} />
                    </div>
                    <h2 className="text-xl lg:text-3xl font-bold text-foreground">
                      {category.title}
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {category.questions.map((item, questionIndex) => (
                      <FAQItem
                        key={questionIndex}
                        question={item.question}
                        answer={item.answer}
                        isOpen={!!openItems[`${categoryIndex}-${questionIndex}`]}
                        onClick={() => toggleItem(categoryIndex, questionIndex)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-muted-foreground text-lg">
                  Can't find what you're looking for? Our {isCA ? 'Canadian' : 'US'} support team is here to help.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-background rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className={`h-14 w-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300 ${isCA ? 'bg-red-100 group-hover:bg-red-600' : 'bg-primary/10 group-hover:bg-primary'}`}>
                    <Mail className={`h-7 w-7 transition-colors ${isCA ? 'text-red-600 group-hover:text-white' : 'text-primary group-hover:text-primary-foreground'}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Email Support</h3>
                  <p className="text-muted-foreground mb-4">
                    Get detailed answers within 24 hours from our {isCA ? 'Canadian' : 'US'} support team.
                  </p>
                  <a
                    href={isCA ? "mailto:support@detailguardz.ca" : "mailto:support@detailguardz.com"}
                    className={`font-medium hover:underline inline-flex items-center gap-2 ${isCA ? 'text-red-600' : 'text-primary'}`}
                  >
                    {isCA ? 'support@detailguardz.ca' : 'support@detailguardz.com'}
                    <span>→</span>
                  </a>
                </div>

                <div className="bg-background rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className={`h-14 w-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300 ${isCA ? 'bg-red-100 group-hover:bg-red-600' : 'bg-primary/10 group-hover:bg-primary'}`}>
                    <MessageCircle className={`h-7 w-7 transition-colors ${isCA ? 'text-red-600 group-hover:text-white' : 'text-primary group-hover:text-primary-foreground'}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Visit Our Store</h3>
                  <p className="text-muted-foreground mb-4">
                    Shop directly on our {isCA ? 'Canadian' : 'US'} website or Amazon {isCA ? '.ca' : 'storefront'}.
                  </p>
                  <a
                    href={isCA ? "https://www.detailguardz.ca/" : "https://www.amazon.com/stores/DETAILGUARDZ/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-medium hover:underline inline-flex items-center gap-2 ${isCA ? 'text-red-600' : 'text-primary'}`}
                  >
                    {isCA ? 'detailguardz.ca' : 'Shop on Amazon US'}
                    <span>→</span>
                  </a>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  <strong>Business Hours:</strong> Monday–Friday: 9 AM–6 PM EST | Saturday: 10 AM–4 PM EST
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 lg:py-16">
          <div className="container-wide">
            <div className={`rounded-xl p-8 border ${isCA ? 'bg-red-50 border-red-200' : 'bg-primary/5 border-primary/20'}`}>
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                Helpful Resources
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to={isCA ? "/shipping/ca" : "/shipping"}
                  className="px-6 py-2 bg-background text-foreground rounded-lg font-medium hover:bg-secondary transition-colors border border-border"
                >
                  Shipping & Returns
                </Link>
                <Link
                  to="/contact"
                  className={`px-6 py-2 rounded-lg font-medium transition-colors text-white ${isCA ? 'bg-red-600 hover:bg-red-700' : 'bg-primary hover:bg-primary/90'}`}
                >
                  Contact Us
                </Link>
                <a
                  href={isCA ? "https://www.detailguardz.ca/" : "https://www.amazon.com/stores/DETAILGUARDZ/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-background text-foreground rounded-lg font-medium hover:bg-secondary transition-colors border border-border"
                >
                  {isCA ? 'Shop detailguardz.ca' : 'Shop on Amazon'}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}