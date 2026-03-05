import { Truck, Package, RefreshCw, Clock, MapPin, Phone, Mail, Shield, AlertCircle, ShoppingBag, CreditCard, Globe, Trash2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { cn } from "@/lib/utils";

const usShipping = {
    region: "United States",
    carrier: "Fulfilled via Amazon Multi-Channel Fulfilment",
    processing: [
        "Orders processed within 1–2 business days after payment confirmation.",
        "Orders fulfilled through Amazon's national warehouse network.",
        "Processing may be delayed during holidays, peak seasons, or promotional periods."
    ],
    timeframe: [
        { label: "Standard Delivery", value: "3–7 business days" },
        { label: "Expedited options", value: "1–3 business days (if available at checkout)" }
    ],
    notes: "Delivery timelines are estimates and not guaranteed."
};

const caShipping = {
    region: "Canada",
    carrier: "Fulfilled via Partnered Carriers",
    processing: [
        "Orders processed within 1–3 business days.",
        "Shipments dispatched using major Canadian carriers (e.g., Canada Post, UPS, Purolator, etc.) or other logistics platforms."
    ],
    timeframe: [
        { label: "Standard Delivery", value: "3–10 business days" },
        { label: "Expedited options", value: "Available at checkout depending on postal code." }
    ],
    notes: "Rural and remote locations may require additional transit time."
};

const returnPolicyGeneral = [
    "Return request must be submitted within 30 days of delivery",
    "Item must be unused, in original packaging, and in resalable condition",
    "Proof of purchase is required",
    "Detailing liquids, chemicals, or opened consumables may not be eligible for return due to safety and resale regulations unless defective."
];

const nonReturnableItems = [
    { icon: Trash2, label: "Opened detailing chemicals" },
    { icon: Trash2, label: "Used microfiber products" },
    { icon: Trash2, label: "Clearance or final sale items" },
    { icon: Package, label: "Gift cards" }
];

export function ShippingReturnsPage() {
    const [activeRegion, setActiveRegion] = useState<"US" | "Canada">("US");

    return (
        <Layout>
            <div className="min-h-screen bg-background pb-20">
                {/* Hero Section */}
                <section className="bg-secondary/30 border-b border-border py-16 lg:py-20">
                    <div className="container-wide">
                        <div className="text-center max-w-3xl mx-auto">
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                                Policy Update 2024
                            </span>
                            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                                Shipping & Returns
                            </h1>
                            <p className="text-muted-foreground text-lg">
                                Detail Guardz operates in both the United States and Canada.
                                Please review the applicable section based on your shipping destination.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Shipping Policy Section */}
                <section className="py-20">
                    <div className="container-wide">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Truck className="h-6 w-6 text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight">Shipping Policy</h2>
                        </div>

                        {/* Region Tabs */}
                        <div className="flex p-1 bg-secondary rounded-xl w-fit mb-12">
                            <button
                                onClick={() => setActiveRegion("US")}
                                className={cn(
                                    "px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                                    activeRegion === "US"
                                        ? "bg-background text-foreground shadow-sm"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                United States
                            </button>
                            <button
                                onClick={() => setActiveRegion("Canada")}
                                className={cn(
                                    "px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                                    activeRegion === "Canada"
                                        ? "bg-background text-foreground shadow-sm"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                Canada
                            </button>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-12">
                            {/* Region Details */}
                            <div className="lg:col-span-12">
                                <div className="grid md:grid-cols-2 gap-8 bg-card rounded-2xl p-8 lg:p-10 border border-border shadow-soft">
                                    <div>
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                            {activeRegion === "US" ? "🇺🇸 1. United States Orders" : "🇨🇦 2. Canada Orders"}
                                        </h3>
                                        <p className="inline-block px-3 py-1 rounded-full bg-secondary text-foreground text-sm font-medium mb-6">
                                            {activeRegion === "US" ? usShipping.carrier : caShipping.carrier}
                                        </p>

                                        <div className="space-y-6">
                                            <div>
                                                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                                                    <Clock className="h-4 w-4 text-primary" /> Order Processing
                                                </h4>
                                                <ul className="space-y-2">
                                                    {(activeRegion === "US" ? usShipping.processing : caShipping.processing).map((item, id) => (
                                                        <li key={id} className="text-muted-foreground text-sm flex gap-2">
                                                            <span className="text-primary mt-1">•</span> {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div>
                                                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                                                    <Package className="h-4 w-4 text-primary" /> Shipping Timeframes
                                                </h4>
                                                <div className="space-y-3">
                                                    {(activeRegion === "US" ? usShipping.timeframe : caShipping.timeframe).map((item, id) => (
                                                        <div key={id} className="flex justify-between items-center p-3 rounded-lg bg-secondary/50 border border-border/50">
                                                            <span className="text-sm font-medium">{item.label}</span>
                                                            <span className="text-sm text-primary font-bold">{item.value}</span>
                                                        </div>
                                                    ))}
                                                    <p className="text-xs text-muted-foreground italic mt-2">
                                                        {activeRegion === "US" ? usShipping.notes : caShipping.notes}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        {/* General Policies */}
                                        <div className="grid gap-6">
                                            <div className="p-5 rounded-xl border border-border bg-background">
                                                <h4 className="font-bold flex items-center gap-2 mb-3">
                                                    <MapPin className="h-4 w-4 text-primary" /> Tracking
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    {activeRegion === "US"
                                                        ? "Tracking information will be emailed once the order ships. Tracking updates are managed through the assigned carrier (UPS, USPS, FedEx, etc.)."
                                                        : "Tracking details will be provided via email once shipped. Delivery updates are managed directly by the assigned carrier."
                                                    }
                                                </p>
                                            </div>

                                            {activeRegion === "US" ? (
                                                <div className="p-5 rounded-xl border border-border bg-background">
                                                    <h4 className="font-bold flex items-center gap-2 mb-3 text-destructive">
                                                        <AlertCircle className="h-4 w-4" /> Address Accuracy
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground">
                                                        Orders are shipped to the address entered at checkout. We cannot modify shipping addresses once the order has entered fulfilment.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div className="p-5 rounded-xl border border-border bg-background">
                                                    <h4 className="font-bold flex items-center gap-2 mb-3">
                                                        <Globe className="h-4 w-4 text-primary" /> Customs & Duties
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground">
                                                        Orders shipped within Canada do not incur customs duties. Customers are responsible for any international charges if applicable.
                                                    </p>
                                                </div>
                                            )}

                                            <div className="p-5 rounded-xl border border-border bg-background">
                                                <h4 className="font-bold flex items-center gap-2 mb-3">
                                                    <Shield className="h-4 w-4 text-primary" /> Lost or Delayed Shipments
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    If tracking shows delivered but not received, contact carrier directly. If unresolved, contact support within 7 days of delivery date.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Returns & Refunds Section */}
                <section className="py-20 bg-secondary/30 border-y border-border">
                    <div className="container-wide">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                <RefreshCw className="h-6 w-6 text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight">Returns & Refunds</h2>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Eligibility */}
                            <div className="bg-card rounded-2xl p-8 lg:p-10 border border-border shadow-soft">
                                <h3 className="text-2xl font-bold mb-6">General Eligibility</h3>
                                <div className="space-y-4">
                                    {returnPolicyGeneral.map((item, id) => (
                                        <div key={id} className="flex gap-4 items-start">
                                            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <Shield className="h-3.5 w-3.5 text-primary" />
                                            </div>
                                            <p className="text-muted-foreground">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Region Specific Returns */}
                            <div className="grid gap-6">
                                <div className="bg-background rounded-2xl p-6 border border-border">
                                    <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                                        🇺🇸 United States Returns
                                    </h4>
                                    <ul className="space-y-3 text-sm text-muted-foreground">
                                        <li>• Initiate through customer support. Approved instructions provided.</li>
                                        <li>• Customers cover return shipping unless damaged, incorrect, or defective.</li>
                                        <li>• Refunds processed within 5–7 business days after inspection.</li>
                                    </ul>
                                </div>
                                <div className="bg-background rounded-2xl p-6 border border-border">
                                    <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                                        🇨🇦 Canada Returns
                                    </h4>
                                    <ul className="space-y-3 text-sm text-muted-foreground">
                                        <li>• Return authorization required before shipping back.</li>
                                        <li>• Customers cover return shipping unless defective or incorrect.</li>
                                        <li>• Refunds processed within 5–10 business days after inspection.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Non-Returnable & Damaged */}
                        <div className="grid md:grid-cols-3 gap-8 mt-12">
                            <div className="bg-destructive/5 rounded-2xl p-6 border border-destructive/20 md:col-span-2">
                                <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-destructive">
                                    <Trash2 className="h-5 w-5" /> Non-Returnable Items
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {nonReturnableItems.map((item, id) => (
                                        <div key={id} className="flex items-center gap-3 p-3 rounded-lg bg-background border border-destructive/10">
                                            <item.icon className="h-4 w-4 text-destructive" />
                                            <span className="text-sm font-medium">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-blue-500/5 rounded-2xl p-6 border border-blue-500/20">
                                <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-blue-600">
                                    <ShoppingBag className="h-5 w-5" /> Cancellations
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Orders may ONLY be cancelled before they enter fulfilment. Once fulfilled, cancellation is not possible.
                                </p>
                                <div className="p-3 rounded-lg bg-background border border-blue-500/10 text-xs text-muted-foreground italic">
                                    You may initiate a return after delivery, if eligible.
                                </div>
                            </div>
                        </div>

                        {/* Damaged Items */}
                        <div className="mt-8 bg-card rounded-2xl p-8 border border-border shadow-soft">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div>
                                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                        <AlertCircle className="h-5 w-5 text-primary" /> Damaged or Incorrect Items
                                    </h3>
                                    <p className="text-muted-foreground text-sm max-w-xl">
                                        Contact us within 5 days of delivery. Provide order number and clear photos of the product and packaging.
                                        We will arrange for replacement or refund at no additional cost.
                                    </p>
                                </div>
                                <a
                                    href="mailto:support@detailguardz.com"
                                    className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold text-center hover:bg-primary/90 transition-colors"
                                >
                                    Report Issue
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refund Processing Section */}
                <section className="py-20 bg-background">
                    <div className="container-wide">
                        <div className="max-w-4xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                                        <CreditCard className="h-6 w-6 text-primary" />
                                    </div>
                                    <h2 className="text-3xl font-bold mb-4">Refund Processing</h2>
                                    <p className="text-muted-foreground mb-6">
                                        Refunds are issued to the original payment method. Processing time may vary depending on your bank or credit card provider.
                                    </p>
                                    <div className="flex items-center gap-2 p-4 rounded-xl bg-secondary/50 border border-border">
                                        <Clock className="h-5 w-5 text-primary" />
                                        <span className="font-bold">Up to 10 business days for funds to reflect.</span>
                                    </div>
                                </div>

                                <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <Globe className="h-5 w-5" /> International Customers
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        At this time, fulfilment is limited to the United States and Canada.
                                        If international shipping becomes available, additional shipping fees, customs duties,
                                        and import taxes will be the responsibility of the customer.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="container-wide mt-20">
                    <div className="bg-primary rounded-[2.5rem] py-16 px-8 text-center text-primary-foreground relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl" />

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Need further assistance?</h2>
                            <p className="text-primary-foreground/80 mb-10 text-lg">
                                Our support team is ready to help you with any questions regarding your order.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href="mailto:support@detailguardz.com"
                                    className="px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-white/90 transition-all flex items-center gap-2"
                                >
                                    <Mail className="h-5 w-5" /> Email Support
                                </a>
                                <a
                                    href="tel:1-800-410-6311"
                                    className="px-8 py-4 bg-primary-foreground/10 text-white border border-white/20 rounded-xl font-bold hover:bg-primary-foreground/20 transition-all flex items-center gap-2"
                                >
                                    <Phone className="h-5 w-5" /> Call Us
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
