import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import BG from "@/assets/new_bg.png"
import BannerCarousel from "@/components/home/addcoroseul";


const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Detail Guardz - Canadian Car Care Company</title>
        <meta
          name="description"
          content="Learn about Detail Guardz, a Canadian-owned car care company dedicated to bringing premium detailing products to enthusiasts across North America."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero Section with Background Image */}
          <section className="relative py-20 lg:py-32 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={BG}
                alt="Car detailing"
                className="w-full h-full object-cover"
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/85 to-slate-900/80" />
            </div>

            {/* Decorative gradient orbs */}
            <div className="absolute inset-0">
              <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="container-wide relative z-10">
              {/* Breadcrumb navigation */}
              <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
                <Link
                  to="/"
                  className="hover:text-primary transition-colors flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </Link>
                <span className="text-slate-500">/</span>
                <span className="text-white font-medium">About Us</span>
              </nav>

              {/* Main content - Centered */}
              <div className="max-w-4xl mx-auto text-center">
                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                  Passionate About Cars.
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 mt-2">
                    Obsessed With Quality.
                  </span>
                </h1>

                {/* Description */}
                <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-12 max-w-2xl mx-auto">
                  Detail Guardz was born from a simple idea: every car enthusiast deserves access to professional-grade detailing products without the professional price tag.
                </p>


              </div>
            </div>
          </section>
          {/* Story */}
          <section className="py-16 lg:py-24">
            <div className="container-wide">
              <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-8 lg:gap-12">
                {/* Left Column - Story Content (spans 2 rows) */}
                <div className="lg:row-span-2 flex flex-col h-full">
                  <div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">Our Story</h2>
                    <div className="space-y-6 text-base lg:text-lg text-muted-foreground leading-relaxed">
                      <p className="text-justify">
                        The story of Detail Guardz began over 30 years ago when Carmine Santarelli, founder of Nordica Plastics Ltd, invented a small automotive detailing tool designed to aid the public in cleaning their cars. That product, "Hose-eez", would later go on to become known as the "Detail Guardz Hose Guide" which was relaunched in 2017.
                      </p>
                      <p className="text-justify">
                        Back in 1982, as a young mold making apprentice, Carmine had noticed a shop painter using old style brake shoes wedged under the outside corners of car tires to help guide a spray gun hose around the tires so they didn't get pinched. Carmine could see what was trying to be achieved but could see the limitations of this 'hack'. However, it wasn't until 1992 that Carmine put his mould making and design skills to work to create a product to achieve the objective but more effectively. This new product, the "Hose-eez", was designed similar in shape to a brake shoe but with a free rolling wheel built in to help with a smooth guidance of any hose or line being used, traveling around the wheels of a car.
                      </p>
                      <p className="text-justify pb-2">
                        Fast forward to 2017 where the automotive detailing world had now exploded with the help of social media, the Detail Guardz Hose Guide (fka the "Hose-eez") was relaunched. With the immediate acceptance and success of the product being relaunched into the market, Carmine hit the ground running inventing and developing additional products filling product gaps in the automotive detailing market that would all eventually fall under the Details Guardz product line. Today, the Detail Guardz products are distributed worldwide and have received global recognition including the SEMA Global Media Product Award in 2020 for their "Dirt Lock Pad Washer".
                      </p>
                    </div>
                  </div>

                  {/* Our Goal Section */}
                  <div className="mt-10 pt-10 border-t border-slate-300">
                    <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">Our Goal</h3>
                    <p className="text-base lg:text-lg text-muted-foreground leading-relaxed text-justify">
                      We strive to reach far above and beyond our competitors with our innovative products that are made of high quality materials, offered at competitive prices, and our continued commitment to exceptional customer service. Because details matter!
                    </p>
                  </div>
                </div>

                {/* Right Column - Side Element (only first row) */}
                <div className="relative sticky top-8 lg:row-span-1">
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 lg:p-10 shadow-md">
                    <BannerCarousel />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-16 lg:py-24 bg-secondary">
            <div className="container-wide">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">What Drives Us</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Our core values guide everything we do, from product selection to customer service.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Award, title: "Quality First", description: "We only sell products we'd use on our own cars." },
                  { icon: Users, title: "Community", description: "We're building a community of passionate detailers." },
                  { icon: MapPin, title: "Canadian Roots", description: "Proudly Canadian-owned and operated." },
                  { icon: Heart, title: "Customer Love", description: "Your satisfaction is our top priority." },
                ].map((value) => (
                  <div key={value.title} className="bg-background rounded-xl p-6 text-center shadow-soft">
                    <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 lg:py-24">
            <div className="container-wide text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Browse our collection and discover why thousands of Canadians trust Detail Guardz.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/products">
                  Shop Now
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;