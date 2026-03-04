import React from 'react';
import Layout from '@/components/layout/Layout';
import ProductVideoSection from '@/components/productdetailpage/ProductVdieoSection';
import { Helmet } from 'react-helmet';

const Media = () => {
    const mainVideo = {
        url: "https://www.youtube.com/embed/v9iR4f4NlyM",
        title: "See Detail Guardz in Action",
        description: "Experience the ultimate in vehicle protection with our professional-grade detailing products. Engineered for enthusiasts who demand perfection."
    };

    const galleryVideos = [
        {
            url: "https://www.youtube.com/embed/n4u_u6mI-RE",
            title: "Dirt Lock In Action",
            subtitle: "The world's most advanced bucket filter"
        },
        {
            url: "https://www.youtube.com/embed/C2_rG_A6A_c",
            title: "How to Use: Hose Guide",
            subtitle: "Prevent hose snagging forever"
        },
        {
            url: "https://www.youtube.com/embed/OiaXqjL9g7s",
            title: "Detailing Tips & Tricks",
            subtitle: "Get professional results at home"
        }
    ];

    return (
        <Layout>
            <Helmet>
                <title>Media Gallery | Detail Guardz</title>
                <meta name="description" content="See our products in action through professional demonstrations and user reviews." />
            </Helmet>

            <div className="min-h-screen bg-slate-50 relative overflow-hidden">
                {/* Background Decorative Shimmer */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px] animate-pulse" />
                </div>

                <div className="container mx-auto px-4 pt-16 pb-24 relative z-10">
                    <div className="text-center mb-16 opacity-0 animate-fade-up">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                            Media Gallery
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            See our products in action through professional demonstrations and user reviews.
                        </p>
                    </div>

                    <div className="space-y-24">
                        <div className="opacity-0 animate-fade-up" style={{ animationDelay: '200ms' }}>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px flex-1 bg-slate-200" />
                                <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-widest text-sm">Product Video</h2>
                                <div className="h-px flex-1 bg-slate-200" />
                            </div>

                            <ProductVideoSection
                                productName="Detail Guardz"
                                mainVideo={mainVideo}
                                additionalVideos={galleryVideos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default Media;
