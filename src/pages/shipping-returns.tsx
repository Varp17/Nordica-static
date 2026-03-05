import React from "react";
import {
    Truck, Package, RefreshCw, Clock, MapPin, Phone, Mail,
    Shield, AlertCircle, Globe, CheckCircle2, XCircle,
    CreditCard, ChevronRight, Info
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ShippingReturnsPageProps {
    region?: 'us' | 'ca';
}

export function ShippingReturnsPage({ region = 'us' }: ShippingReturnsPageProps) {
    const [activeTab, setActiveTab] = useState<'shipping' | 'returns'>('shipping');
    const isCA = region === 'ca';
    const accent = isCA ? 'red' : 'primary';

    return (
        <Layout>
            <div className="min-h-screen bg-background">

                {/* ── HERO ──────────────────────────────────────────────────────────── */}
                <section className={`py-16 lg:py-20 ${isCA ? 'bg-red-600' : 'bg-primary'}`}>
                    <div className="container-wide text-center max-w-3xl mx-auto px-4">

                        {/* Region Toggle */}
                        <div className="flex justify-center mb-8">
                            <div className="inline-flex bg-white/15 backdrop-blur-sm rounded-full p-1 gap-1">
                                <Link
                                    to="/shipping"
                                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${!isCA ? 'bg-white text-primary shadow' : 'text-white hover:bg-white/20'
                                        }`}
                                >
                                    🇺🇸 United States
                                </Link>
                                <Link
                                    to="/shipping/ca"
                                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${isCA ? 'bg-white text-red-600 shadow' : 'text-white hover:bg-white/20'
                                        }`}
                                >
                                    🇨🇦 Canada
                                </Link>
                            </div>
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-3">
                            Shipping & Returns
                        </h1>
                        <p className="text-white/80 text-lg max-w-xl mx-auto">
                            {isCA
                                ? 'Everything you need to know about shipping to Canada and our return process.'
                                : 'Everything you need to know about shipping to the US and our return process.'}
                        </p>

                        {/* Tab Switcher */}
                        <div className="flex justify-center mt-8">
                            <div className="inline-flex bg-white/15 backdrop-blur-sm rounded-xl p-1 gap-1">
                                <button
                                    onClick={() => setActiveTab('shipping')}
                                    className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${activeTab === 'shipping' ? 'bg-white text-primary shadow' : 'text-white hover:bg-white/20'
                                        }`}
                                >
                                    <Truck className="h-4 w-4" /> Shipping
                                </button>
                                <button
                                    onClick={() => setActiveTab('returns')}
                                    className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${activeTab === 'returns' ? 'bg-white text-primary shadow' : 'text-white hover:bg-white/20'
                                        }`}
                                >
                                    <RefreshCw className="h-4 w-4" /> Returns & Refunds
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── QUICK STATS ───────────────────────────────────────────────────── */}
                <div className="bg-background border-b border-border">
                    <div className="container-wide">
                        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
                            {[
                                { icon: Clock, label: 'Order Processing', value: isCA ? '1–3 business days' : '1–2 business days' },
                                { icon: Truck, label: 'Standard Shipping', value: isCA ? '3–10 business days' : '3–7 business days' },
                                { icon: RefreshCw, label: 'Return Window', value: '30 days' },
                                { icon: CreditCard, label: 'Refund Time', value: isCA ? '5–10 business days' : '5–7 business days' },
                            ].map(({ icon: Icon, label, value }) => (
                                <div key={label} className="flex flex-col items-center py-5 px-4 text-center">
                                    <Icon className={`h-5 w-5 mb-2 ${isCA ? 'text-red-600' : 'text-primary'}`} />
                                    <p className="text-xs text-muted-foreground">{label}</p>
                                    <p className="font-bold text-sm text-foreground mt-0.5">{value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="container-wide max-w-4xl py-14 px-4 space-y-10">

                    {/* ══════════════════════════════════════════════════════════════════
              SHIPPING TAB
          ══════════════════════════════════════════════════════════════════ */}
                    {activeTab === 'shipping' && (
                        <div className="space-y-8">

                            {/* Fulfilled By */}
                            <InfoBanner isCA={isCA}>
                                {isCA
                                    ? '🇨🇦 Canadian orders are fulfilled via partnered carriers (Canada Post, UPS, Purolator, and others).'
                                    : '🇺🇸 US orders are fulfilled via Amazon Multi-Channel Fulfilment through Amazon\'s national warehouse network.'}
                            </InfoBanner>

                            {/* Order Processing */}
                            <SectionCard icon={Clock} title="Order Processing" isCA={isCA}>
                                <ul className="space-y-2">
                                    {(isCA ? [
                                        'Orders are processed within 1–3 business days.',
                                        'Shipments dispatched using major Canadian carriers (Canada Post, UPS, Purolator, etc.).',
                                    ] : [
                                        'Orders are processed within 1–2 business days after payment confirmation.',
                                        'Fulfilled through Amazon\'s national warehouse network.',
                                        'Processing may be delayed during holidays, peak seasons, or promotional periods.',
                                    ]).map((item, i) => <Bullet key={i}>{item}</Bullet>)}
                                </ul>
                            </SectionCard>

                            {/* Shipping Timeframes */}
                            <SectionCard icon={Truck} title="Delivery Timeframes" isCA={isCA}>
                                <div className="grid sm:grid-cols-2 gap-3 mb-3">
                                    <TimeCard
                                        isCA={isCA}
                                        label="Standard Delivery"
                                        value={isCA ? '3–10 business days' : '3–7 business days'}
                                    />
                                    <TimeCard
                                        isCA={isCA}
                                        label="Expedited (if available)"
                                        value={isCA ? 'Available by postal code' : '1–3 business days'}
                                    />
                                </div>
                                <Note>
                                    {isCA
                                        ? 'Rural and remote locations may require additional transit time.'
                                        : 'Delivery timelines are estimates and not guaranteed.'}
                                </Note>
                            </SectionCard>

                            {/* Tracking */}
                            <SectionCard icon={MapPin} title="Tracking Your Order" isCA={isCA}>
                                <ul className="space-y-2">
                                    {(isCA ? [
                                        'Tracking details will be provided via email once your order ships.',
                                        'Delivery updates are managed directly by the assigned carrier.',
                                    ] : [
                                        'Tracking information will be emailed once the order ships.',
                                        'Tracking updates are managed through the assigned carrier (UPS, USPS, FedEx, etc.).',
                                    ]).map((item, i) => <Bullet key={i}>{item}</Bullet>)}
                                </ul>
                            </SectionCard>

                            {/* Address / Customs */}
                            <div className="grid sm:grid-cols-2 gap-6">
                                <SectionCard icon={AlertCircle} title="Shipping Address" isCA={isCA} warning>
                                    <ul className="space-y-2">
                                        <Bullet>Orders are shipped to the address entered at checkout.</Bullet>
                                        <Bullet>We cannot modify the address once the order has entered fulfilment.</Bullet>
                                    </ul>
                                </SectionCard>
                                <SectionCard icon={Globe} title={isCA ? 'Customs & Duties' : 'Lost or Delayed Packages'} isCA={isCA}>
                                    <ul className="space-y-2">
                                        {(isCA ? [
                                            'Orders shipped within Canada do not incur customs duties.',
                                            'Customers are responsible for any future international charges if applicable.',
                                        ] : [
                                            'If tracking shows delivered but not received, contact the carrier first.',
                                            'If unresolved, email our support team within 7 days of the marked delivery date.',
                                        ]).map((item, i) => <Bullet key={i}>{item}</Bullet>)}
                                    </ul>
                                </SectionCard>
                            </div>

                        </div>
                    )}

                    {/* ══════════════════════════════════════════════════════════════════
              RETURNS TAB
          ══════════════════════════════════════════════════════════════════ */}
                    {activeTab === 'returns' && (
                        <div className="space-y-8">

                            {/* Eligibility Overview */}
                            <SectionCard icon={Shield} title="General Return Eligibility  (US & Canada)" isCA={isCA}>
                                <p className="text-sm text-muted-foreground mb-4">We accept returns under all of the following conditions:</p>
                                <div className="grid sm:grid-cols-2 gap-3 mb-4">
                                    {[
                                        'Submitted within 30 days of delivery',
                                        'Item is unused and in original packaging',
                                        'Item is in resalable condition',
                                        'Proof of purchase provided',
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2.5 p-3 rounded-lg bg-secondary/40 border border-border">
                                            <CheckCircle2 className={`h-4 w-4 shrink-0 ${isCA ? 'text-red-600' : 'text-primary'}`} />
                                            <span className="text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <Note type="warning">
                                    Opened detailing chemicals, liquids, or consumables may not be eligible for return unless defective.
                                </Note>
                            </SectionCard>

                            {/* Region-specific returns */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <SectionCard icon={Package} title="🇺🇸 US Returns" isCA={isCA} highlight={!isCA}>
                                    <ul className="space-y-2">
                                        <Bullet>Initiate via customer support — return instructions provided once approved.</Bullet>
                                        <Bullet>Customer covers return shipping unless item is damaged, wrong, or defective.</Bullet>
                                        <Bullet><strong>Refund in 5–7 business days</strong> after inspection.</Bullet>
                                        <Bullet>Original shipping fees are non-refundable unless our error.</Bullet>
                                    </ul>
                                </SectionCard>
                                <SectionCard icon={Package} title="🇨🇦 Canada Returns" isCA={isCA} highlight={isCA}>
                                    <ul className="space-y-2">
                                        <Bullet>Return authorization required before shipping items back.</Bullet>
                                        <Bullet>Customer covers return shipping unless item is defective or incorrect.</Bullet>
                                        <Bullet><strong>Refund in 5–10 business days</strong> after inspection.</Bullet>
                                        <Bullet>Shipping charges are non-refundable unless due to a fulfilment error.</Bullet>
                                    </ul>
                                </SectionCard>
                            </div>

                            {/* Non-Returnable */}
                            <SectionCard icon={XCircle} title="Non-Returnable Items" isCA={isCA} danger>
                                <p className="text-sm text-muted-foreground mb-4">The following are <strong>not eligible for return</strong> unless defective:</p>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {[
                                        'Opened detailing chemicals',
                                        'Used microfiber products',
                                        'Clearance or final sale items',
                                        'Gift cards',
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2.5 p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                                            <XCircle className="h-4 w-4 text-destructive shrink-0" />
                                            <span className="text-sm font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </SectionCard>

                            {/* Damaged Items — Step-by-step */}
                            <SectionCard icon={AlertCircle} title="Received a Damaged or Incorrect Item?" isCA={isCA}>
                                <p className="text-sm text-muted-foreground mb-5">Follow these 3 steps and we will make it right at no cost to you:</p>
                                <div className="space-y-4">
                                    {[
                                        { n: '1', title: 'Contact us within 5 days', body: 'Email support@detailguardz.com with your order number.' },
                                        { n: '2', title: 'Send photos', body: 'Attach clear photos of the product and its packaging.' },
                                        { n: '3', title: 'We arrange a resolution', body: 'Replacement or full refund — free of charge.' },
                                    ].map(({ n, title, body }) => (
                                        <div key={n} className="flex gap-4 items-start">
                                            <div className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 text-white ${isCA ? 'bg-red-600' : 'bg-primary'}`}>{n}</div>
                                            <div>
                                                <p className="font-semibold text-foreground text-sm">{title}</p>
                                                <p className="text-sm text-muted-foreground">{body}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <a
                                    href="mailto:support@detailguardz.com"
                                    className={`mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-colors ${isCA ? 'bg-red-600 hover:bg-red-700' : 'bg-primary hover:bg-primary/90'}`}
                                >
                                    <Mail className="h-4 w-4" /> Report an Issue
                                </a>
                            </SectionCard>

                            {/* Cancellations */}
                            <SectionCard icon={XCircle} title="Order Cancellations" isCA={isCA} warning>
                                <ul className="space-y-2">
                                    <Bullet>Orders may <strong>only be cancelled before</strong> they enter fulfilment.</Bullet>
                                    <Bullet>Once fulfilled, cancellation is not possible.</Bullet>
                                    <Bullet>You may initiate a return after delivery if eligible.</Bullet>
                                </ul>
                            </SectionCard>

                            {/* Refund Processing */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <SectionCard icon={CreditCard} title="Refund Processing" isCA={isCA}>
                                    <ul className="space-y-2">
                                        <Bullet>Refunds are issued to the original payment method.</Bullet>
                                        <Bullet>Allow up to 10 business days for funds to reflect in your account.</Bullet>
                                        <Bullet>Processing time may vary by bank or card provider.</Bullet>
                                    </ul>
                                </SectionCard>
                                <SectionCard icon={Globe} title="International Customers" isCA={isCA}>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Fulfilment is currently limited to the <strong className="text-foreground">United States and Canada</strong>. If international shipping becomes available, additional fees, customs duties, and import taxes will be the responsibility of the customer.
                                    </p>
                                </SectionCard>
                            </div>

                        </div>
                    )}
                </div>

                {/* ── Contact CTA ──────────────────────────────────────────────────── */}
                <div className="container-wide px-4 pb-16">
                    <div className={`rounded-3xl py-14 px-8 text-center text-white relative overflow-hidden ${isCA ? 'bg-red-600' : 'bg-primary'}`}>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl pointer-events-none" />
                        <div className="relative z-10 max-w-xl mx-auto">
                            <h2 className="text-2xl lg:text-3xl font-bold mb-3">Still have questions?</h2>
                            <p className="text-white/80 mb-7">Our support team is happy to help — usually within 24 hours.</p>
                            <div className="flex flex-wrap justify-center gap-3">
                                <a
                                    href={isCA ? "mailto:support@detailguardz.ca" : "mailto:support@detailguardz.com"}
                                    className="px-6 py-3 bg-white text-primary rounded-xl font-bold hover:bg-white/90 transition-all flex items-center gap-2 text-sm"
                                >
                                    <Mail className="h-4 w-4" />
                                    {isCA ? 'support@detailguardz.ca' : 'support@detailguardz.com'}
                                </a>
                                <a
                                    href="tel:1-800-410-6311"
                                    className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-all flex items-center gap-2 text-sm"
                                >
                                    <Phone className="h-4 w-4" /> Call Us
                                </a>
                            </div>
                            <p className="mt-5 text-white/60 text-xs">Mon–Fri 9 AM–6 PM EST &nbsp;|&nbsp; Sat 10 AM–4 PM EST</p>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    );
}

// ── Reusable helpers ──────────────────────────────────────────────────────────

function SectionCard({
    icon: Icon, title, children, isCA = false,
    warning = false, danger = false, highlight = false,
}: {
    icon: React.ElementType;
    title: string;
    children: React.ReactNode;
    isCA?: boolean;
    warning?: boolean;
    danger?: boolean;
    highlight?: boolean;
}) {
    const borderClass = danger
        ? 'border-destructive/30 bg-destructive/5'
        : warning
            ? 'border-amber-300 bg-amber-50'
            : highlight
                ? isCA ? 'border-red-300 ring-1 ring-red-200 bg-card' : 'border-primary/30 ring-1 ring-primary/10 bg-card'
                : 'border-border bg-card';

    const iconColor = danger ? 'text-destructive' : warning ? 'text-amber-600' : isCA ? 'text-red-600' : 'text-primary';
    const iconBg = danger ? 'bg-destructive/10' : warning ? 'bg-amber-100' : isCA ? 'bg-red-100' : 'bg-primary/10';

    return (
        <div className={`rounded-2xl border p-6 lg:p-8 shadow-sm ${borderClass}`}>
            <div className="flex items-center gap-3 mb-5">
                <div className={`h-9 w-9 rounded-lg flex items-center justify-center shrink-0 ${iconBg}`}>
                    <Icon className={`h-5 w-5 ${iconColor}`} />
                </div>
                <h3 className="font-bold text-lg text-foreground">{title}</h3>
            </div>
            {children}
        </div>
    );
}

function InfoBanner({ children, isCA }: { children: React.ReactNode; isCA: boolean }) {
    return (
        <div className={`flex items-start gap-3 p-4 rounded-xl border text-sm ${isCA ? 'bg-red-50 border-red-200 text-red-800' : 'bg-blue-50 border-blue-200 text-blue-800'}`}>
            <Info className="h-4 w-4 mt-0.5 shrink-0" />
            <span>{children}</span>
        </div>
    );
}

function Bullet({ children }: { children: React.ReactNode }) {
    return (
        <li className="flex gap-2 items-start text-sm text-muted-foreground list-none">
            <ChevronRight className="h-4 w-4 text-primary mt-0.5 shrink-0" />
            <span>{children}</span>
        </li>
    );
}

function TimeCard({ label, value, isCA }: { label: string; value: string; isCA: boolean }) {
    return (
        <div className="flex flex-col items-center text-center p-4 rounded-xl bg-secondary/50 border border-border">
            <p className="text-xs text-muted-foreground mb-1">{label}</p>
            <p className={`font-bold text-base ${isCA ? 'text-red-600' : 'text-primary'}`}>{value}</p>
        </div>
    );
}

function Note({ children, type = 'info' }: { children: React.ReactNode; type?: 'info' | 'warning' }) {
    const cls = type === 'warning'
        ? 'bg-amber-50 border-amber-200 text-amber-800'
        : 'bg-secondary/50 border-border text-muted-foreground';
    return (
        <div className={`flex items-start gap-2 p-3 rounded-lg border text-xs mt-2 ${cls}`}>
            <Info className="h-3.5 w-3.5 mt-0.5 shrink-0" />
            <span>{children}</span>
        </div>
    );
}
