import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProductVideoSection from '@/components/productdetailpage/ProductVdieoSection';
import { Helmet } from 'react-helmet';
import {
    ArrowRight,
    Play,
    Pause,
    Volume2,
    VolumeX,
    Instagram,
    Youtube,
    Sparkles,
    ShoppingBag,
    CheckCircle2,
    Zap,
    ExternalLink,
    Star,
    ShieldCheck,
    Trophy,
    Info,
    SearchIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import BG from "@/assets/new_bg.webp";
import BG_MOBILE from "@/assets/new_bg_mobile.webp";
import PRODUCT_VIDEO from "@/assets/product-video.mp4";
import INSTA_1 from "@/assets/insta 1.webp";
import INSTA_2 from "@/assets/insta 2.webp";
import INSTA_4 from "@/assets/insta 4.webp";
import INSTA_12 from "@/assets/insta 12.webp";
import INSTA_23 from "@/assets/insta 23.webp";
import INSTA_1_2 from "@/assets/insta 1 2.webp";
import INSTA_1_32 from "@/assets/insta 1 32.webp";

const Media = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) videoRef.current.pause();
            else videoRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const expertHighlights = [
        {
            id: "rmmq1jVdY40",
            title: "How To PROPERLY Clean Pads",
            description: "Expert maintenance tips for polishing pads using Detail Guardz system.",
            label: "Maintenance"
        },
        {
            id: "dgeAFI_K6sI",
            title: "Scrub Wall 180/360 Teaser",
            description: "A sneak peek at the most versatile bucket attachment system.",
            label: "Product"
        },
        {
            id: "wgR1NE6h6Zk",
            title: "Scrub Wall Insert Guide",
            description: "Deep dive into the Scrub Wall attachment for ultimate bucket filtration.",
            label: "Usage"
        }
    ];

    const instagramPosts = [
        { url: "https://www.instagram.com/detailguardz/", image: INSTA_1 },
        { url: "https://www.instagram.com/detailguardz/", image: INSTA_2 },
        { url: "https://www.instagram.com/detailguardz/", image: INSTA_4 },
        { url: "https://www.instagram.com/detailguardz/", image: INSTA_12 },
        { url: "https://www.instagram.com/detailguardz/", image: INSTA_23 },
        { url: "https://www.instagram.com/detailguardz/", image: INSTA_1_2 },
        { url: "https://www.instagram.com/detailguardz/", image: INSTA_1_32 }
    ];

    const youtubeShorts = [
        { id: "jmm-ahVrq4g", title: "Dirt Lock: The Ultimate Filter" },
        { id: "M3idQDVaTUY", title: "Mastering the 2-Bucket Wash" },
        { id: "2S1_ebwMuZs", title: "Snag-Free Detailing Hack" }
    ];

    return (
        <Layout>
            <Helmet>
                <title>Media Gallery | Detail Guardz - Experience the Difference</title>
                <meta name="description" content="Watch professional car care tutorials. See the Scrub Wall and Dirt Lock systems in action." />
            </Helmet>

            <div className="flex flex-col bg-background overflow-x-hidden">
                {/* Hero Section - Optimized for Mobile View */}
                <section className="relative overflow-hidden min-h-[50vh] flex items-center pt-20 pb-16">
                    <div className="absolute inset-0">
                        <picture>
                            <source media="(max-width: 768px)" srcSet={BG_MOBILE} />
                            <img
                                src={BG}
                                alt="Detail Guardz Hub"
                                className="w-full h-full object-cover"
                            />
                        </picture>
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/85 to-slate-900/80" />
                    </div>

                    <div className="container-wide relative z-10">
                        <div className="max-w-4xl mx-auto text-center px-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 text-white mb-6 opacity-0 animate-fade-up">
                                <Sparkles className="w-3.5 h-3.5" />
                                <span className="text-xs font-semibold tracking-wider">Visual Excellence</span>
                            </div>

                            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white leading-tight mb-6 opacity-0 animate-fade-up animation-delay-100 drop-shadow-2xl">
                                The Detail Guardz <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-400 to-primary">Experience</span>
                            </h1>

                            <p className="text-base sm:text-lg md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto opacity-0 animate-fade-up animation-delay-200">
                                Visualizing Perfection. Watch the Dirt Lock™ system in action and master the art of the swirl-free wash.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-up animation-delay-300">
                                <Button variant="hero" size="lg" className="rounded-full shadow-2xl w-full sm:w-auto" asChild>
                                    <Link to="/products">
                                        Shop All Products <ArrowRight className="w-5 h-5 ml-2" />
                                    </Link>
                                </Button>
                                <Button variant="hero-outline" size="lg" className="rounded-full border-white/30 text-white hover:bg-white/10 w-full sm:w-auto" asChild>
                                    <a href="#demo-video">Watch the Demo</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FEATURED: Science Section - Mobile Responsive Layout */}
                <section id="demo-video" className="py-16 lg:py-24 bg-background relative overflow-hidden text-center lg:text-left">
                    <div className="container-wide">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div className="relative group flex justify-center order-2 lg:order-1">
                                <div className="absolute -inset-10 bg-primary/5 rounded-[4rem] blur-[60px] opacity-30" />
                                <div className="relative aspect-[9/16] w-full max-w-[280px] sm:max-w-[340px] rounded-[2.5rem] overflow-hidden shadow-elevated border-4 border-muted bg-slate-900 ring-4 ring-muted/20">
                                    <video
                                        ref={videoRef}
                                        src={PRODUCT_VIDEO}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between">
                                        <button onClick={togglePlay} className="text-white">
                                            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                                        </button>
                                        <button onClick={toggleMute} className="text-white">
                                            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 lg:space-y-8 order-1 lg:order-2 px-4">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 text-sky-500 mb-2">
                                    <Zap className="w-3.5 h-3.5" />
                                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">Featured Demo</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl lg:text-6xl font-playfair font-bold text-foreground leading-tight">
                                    The Science Of <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-primary italic font-medium">Safe Cleaning.</span>
                                </h2>
                                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                                    Stop creating swirls with every wash. Our technology traps grit at the bottom, ensuring only clean water touches your paint.
                                </p>

                                <div className="grid grid-cols-2 gap-4 text-left">
                                    <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-xl">
                                        <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                                        <p className="font-bold text-foreground text-xs sm:text-sm leading-tight">Paint Safety</p>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-xl">
                                        <Trophy className="w-5 h-5 text-primary shrink-0" />
                                        <p className="font-bold text-foreground text-xs sm:text-sm leading-tight">Award Winning</p>
                                    </div>
                                </div>

                                <Button variant="hero" size="lg" className="rounded-full w-full sm:w-auto px-10 shadow-xl" asChild>
                                    <Link to="/products">
                                        Shop Setup <ShoppingBag className="w-5 h-5 ml-2" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 1: Masterclasses - Improved Grid for Mobile */}
                <section className="py-16 lg:py-24 bg-foreground text-background">
                    <div className="container-wide px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-4 tracking-tight">Viral Masterclasses</h2>
                            <p className="text-background/60 text-base md:text-lg max-w-xl mx-auto">Quick tutorials for professional results in 60 seconds.</p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-12 max-w-6xl mx-auto">
                            {youtubeShorts.map((short) => (
                                <div key={short.id} className="relative aspect-[9/16] rounded-2xl sm:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group active:scale-95 transition-transform">
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${short.id}?rel=0&modestbranding=1&controls=1`}
                                        title={short.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                    <div className="absolute inset-x-0 bottom-0 p-3 sm:p-6 bg-gradient-to-t from-black to-transparent pointer-events-none opacity-0 sm:group-hover:opacity-100 transition-opacity">
                                        <p className="text-white font-bold text-[10px] sm:text-lg leading-tight">{short.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 2: Expert Highlights - Compact 2x2 Grid for Mobile */}
                <section className="py-16 lg:py-24 bg-muted/30">
                    <div className="container-wide px-4">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
                                <SearchIcon className="w-3.5 h-3.5" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">Usage Guide</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-foreground mb-4">Expert Highlights</h2>
                            <p className="text-muted-foreground text-base max-w-xl mx-auto italic font-medium">
                                Proper gear maintenance from the experts.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                            {expertHighlights.map((video) => (
                                <div key={video.id} className="bg-background rounded-2xl overflow-hidden shadow-soft border border-border flex flex-col group">
                                    <div className="relative aspect-video bg-muted overflow-hidden">
                                        <iframe
                                            className="w-full h-full"
                                            src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                                            title={video.title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                    <div className="p-5 sm:p-8 flex-1 flex flex-col">
                                        <div className="flex items-center justify-between mb-3">
                                            <Badge variant="secondary" className="text-[8px] sm:text-[10px] uppercase font-bold tracking-widest px-2 py-0.5">{video.label}</Badge>
                                            <div className="flex gap-0.5 text-amber-500">
                                                {[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 fill-current" />)}
                                            </div>
                                        </div>
                                        <h3 className="text-base sm:text-xl font-bold text-foreground mb-2 leading-tight">{video.title}</h3>
                                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{video.description}</p>
                                        <div className="mt-auto pt-4 border-t border-border flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                                            <span className="flex items-center gap-1.5"><Info className="w-3 h-3" /> Usage</span>
                                            <ExternalLink className="w-3 h-3" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* JOIN THE COMMUNITY - Clean 2x2 or 3xGrid for Mobile */}
                <section className="py-16 bg-background border-t border-border">
                    <div className="container-wide px-4">
                        <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-6 text-center sm:text-left">
                            <div>
                                <h2 className="text-2xl sm:text-4xl font-playfair font-bold text-foreground mb-1">Join The Community</h2>
                                <p className="text-muted-foreground text-sm italic">Tag us at #DetailGuardz</p>
                            </div>
                            <Button variant="hero-outline" size="sm" className="rounded-full gap-2 px-6 shadow-sm w-full sm:w-auto" asChild>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <Instagram className="w-4 h-4 text-primary" /> Follow Us
                                </a>
                            </Button>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
                            {instagramPosts.map((post, idx) => (
                                <a key={idx} href={post.url} target="_blank" rel="noopener noreferrer" className="relative aspect-square rounded-xl overflow-hidden group shadow-soft active:scale-95 transition-transform">
                                    <img src={post.image} alt="Result" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-primary/40 opacity-0 sm:group-hover:opacity-100 flex items-center justify-center transition-opacity backdrop-blur-[2px]">
                                        <ExternalLink className="text-white w-5 h-5" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PERSUASIVE FINALE - Clean Mobile CTA */}
                <section className="py-16 lg:py-24 bg-foreground relative overflow-hidden text-center">
                    <div className="container-wide px-4 relative z-10">
                        <div className="max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary mb-6">
                                <ShoppingBag className="w-3.5 h-3.5" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">Join 50,000+ Detailers</span>
                            </div>

                            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-playfair font-bold text-background mb-6 leading-tight">
                                Protect Your <br className="sm:hidden" /> Investment.
                            </h2>
                            <p className="text-base sm:text-xl text-background/70 mb-10 leading-relaxed font-medium px-4">
                                Don't leave your paint to chance. Upgrade to the world's most innovative wash system.
                            </p>

                            <div className="flex justify-center">
                                <Button variant="hero" size="lg" className="rounded-full px-10 h-16 text-base font-bold shadow-glow w-full sm:w-auto" asChild>
                                    <Link to="/products">BUILD YOUR SYSTEM <ArrowRight className="w-5 h-5 ml-2" /></Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Media;
