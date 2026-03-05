import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Globe, ExternalLink, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { useState, useMemo } from "react";

interface Distributor {
  name: string;
  url: string;
  email?: string;
  isExclusive?: boolean;
}

interface RegionData {
  region: string;
  countries: {
    country: string;
    distributors: Distributor[];
  }[];
}

const distributorData: RegionData[] = [
  {
    region: "North America",
    countries: [
      {
        country: "USA",
        distributors: [
          { name: "Detailed Image", url: "https://www.detailedimage.com/" },
          { name: "Shine Supply", url: "https://shinesupply.com/" },
          { name: "Adam's Polishes", url: "https://adamspolishes.com/" },
          { name: "The Clean Garage", url: "https://clean-garage.com/" },
          { name: "Feynlab", url: "https://www.feynlab.com/" },
          { name: "Detail-Division", url: "https://detail-division.com/" },
          { name: "IREP Detailing Hawaii", url: "", email: "info@irepdetailsupply.com" },
          { name: "Detail King", url: "https://www.detailking.com/" },
          { name: "Car Supplies Warehouse", url: "https://www.carsupplieswarehouse.com/" },
          { name: "Majestic Solutions", url: "https://majesticsolutions.com/" },
          { name: "MS Distributors Puerto Rico", url: "https://msdistributorspr.com/" },
        ],
      },
      {
        country: "Canada",
        distributors: [
          { name: "3D Products Canada", url: "https://3dproductscanada.com/" },
          { name: "Carzilla", url: "https://carzilla.ca/" },
          { name: "Sweet Ride", url: "https://www.sweetride.ca/" },
        ],
      },
      {
        country: "Mexico",
        distributors: [
          { name: "Autotoc Mexico", url: "https://www.autotoc.mx/" },
        ],
      },
    ],
  },
  {
    region: "Europe",
    countries: [
      {
        country: "Germany",
        distributors: [
          { name: "Dukano GbR", url: "https://www.waschguru.de/", isExclusive: true },
        ],
      },
      {
        country: "France",
        distributors: [
          { name: "Addict Auto", url: "https://www.addictauto.com/" },
        ],
      },
      {
        country: "United Kingdom",
        distributors: [
          { name: "Slim's Detailing (Morelli Group Ltd)", url: "https://www.slimsdetailing.co.uk/", isExclusive: true },
        ],
      },
      {
        country: "Ireland",
        distributors: [
          { name: "D&D Detailing", url: "https://dnddetailing.ie/" },
        ],
      },
      {
        country: "Netherlands",
        distributors: [
          { name: "CarClean", url: "https://www.carclean.com/nl/" },
          { name: "CarTec", url: "https://cartecworld.com/" },
        ],
      },
      {
        country: "Finland",
        distributors: [
          { name: "Projectech", url: "https://www.autonhoitokauppa.fi/" },
        ],
      },
      {
        country: "Denmark",
        distributors: [
          { name: "Pro Car Shop", url: "https://procarshop.dk/" },
        ],
      },
      {
        country: "Norway",
        distributors: [
          { name: "Bilpleiekongen", url: "https://bilpleiekongen.no" },
          { name: "Bilnerden", url: "https://bilnerden.no/" },
        ],
      },
      {
        country: "Italy",
        distributors: [
          { name: "Carismatix", url: "https://carismatix.it/" },
        ],
      },
      {
        country: "Spain",
        distributors: [
          { name: "Car Care Europe", url: "https://carcareeurope.es/" },
        ],
      },
      {
        country: "Czech Republic",
        distributors: [
          { name: "Detailing Pro", url: "https://www.detailingpro.cz/" },
        ],
      },
      {
        country: "Slovenia",
        distributors: [
          { name: "Spoliraj", url: "https://www.spoliraj.si/si/" },
        ],
      },
    ],
  },
  {
    region: "Asia-Pacific",
    countries: [
      {
        country: "Australia",
        distributors: [
          { name: "GnG Sales", url: "https://gngsales.com.au/" },
          { name: "Detailing Shed", url: "https://detailingshed.com.au/" },
          { name: "WaxIt", url: "https://www.waxit.com.au/" },
        ],
      },
      {
        country: "South Korea",
        distributors: [
          { name: "AutoWax", url: "https://autowax.co.kr/" },
        ],
      },
      {
        country: "Japan",
        distributors: [
          { name: "Abe Shokai Ltd", url: "https://abeshokai.jp/", isExclusive: true },
        ],
      },
      {
        country: "Philippines",
        distributors: [
          { name: "Reflections Car Care", url: "https://shop.reflections-carcare.com/" },
        ],
      },
      {
        country: "Brunei",
        distributors: [
          { name: "CarPro Brunei", url: "", email: "info@carprobrunei.com" },
        ],
      },
    ],
  },
  {
    region: "Other Regions",
    countries: [
      {
        country: "Caribbean",
        distributors: [
          { name: "Automotive Art", url: "https://www.automotiveart.com/Home/" },
        ],
      },
      {
        country: "South Africa",
        distributors: [
          { name: "G Shift Party", url: "https://www.gshift.co.za/" },
        ],
      },
    ],
  },
];

const WhereToBuy = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  // Filter logic
  const filteredData = useMemo(() => {
    let filtered = distributorData.map(region => ({
      ...region,
      countries: region.countries.filter(country =>
        country.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.distributors.some(d => d.name.toLowerCase().includes(searchTerm.toLowerCase()))
      ),
    }));

    if (selectedRegion) {
      filtered = filtered.filter(region => region.region === selectedRegion);
    }

    return filtered.filter(region => region.countries.length > 0);
  }, [searchTerm, selectedRegion]);

  const totalResults = filteredData.reduce(
    (sum, region) => sum + region.countries.reduce((countrySum, country) => countrySum + country.distributors.length, 0),
    0
  );

  return (
    <>
      <Helmet>
        <title>Where to Buy | Find Detail Guardz Distributors Worldwide</title>
        <meta
          name="description"
          content="Find Detail Guardz products near you. Locate authorized distributors and retailers across North America, Europe, Asia-Pacific, and more."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative py-20 lg:py-28 overflow-hidden border-b border-slate-200">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop"
                alt="Car detailing background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50 backdrop-blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-blue-900/20"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center text-white max-w-4xl">
              <nav className="flex items-center justify-center gap-2 text-sm text-slate-300 mb-8 animate-fade-in">
                <Link to="/" className="hover:text-white transition-colors duration-300">Home</Link>
                <span className="text-slate-400">/</span>
                <span className="text-white font-semibold">Where to Buy</span>
              </nav>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg tracking-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Find Your Local Distributor
              </h1>
              <p className="text-lg lg:text-xl text-slate-200 drop-shadow-md animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
                Access Detail Guardz premium products from authorized distributors worldwide
              </p>
            </div>
          </section>

          {/* Search & Filter Section */}
          <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
            <div className="container mx-auto px-4 max-w-6xl">
              {/* Search Bar */}
              <div className="relative mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search by distributor name or country..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 text-base border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white placeholder-slate-400"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>

              {/* Region Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedRegion(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedRegion === null
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                >
                  All Regions
                </button>
                {distributorData.map((region) => (
                  <button
                    key={region.region}
                    onClick={() => setSelectedRegion(region.region)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedRegion === region.region
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                  >
                    {region.region}
                  </button>
                ))}
              </div>

              {/* Results Counter */}
              <div className="mt-6 text-sm text-slate-600">
                <span className="font-semibold text-slate-800">{totalResults}</span> distributor{totalResults !== 1 ? "s" : ""} found
              </div>
            </div>
          </section>

          {/* Distributors Grid */}
          <section className="py-12 lg:py-20 bg-gradient-to-b from-white to-slate-50">
            <div className="container mx-auto px-4 max-w-6xl">
              {filteredData.length > 0 ? (
                <>
                  {filteredData.map((regionData, regionIdx) => (
                    <div key={regionData.region} className="mb-16 animate-fade-in" style={{ animationDelay: `${0.1 * regionIdx}s` }}>
                      {/* Region Header */}
                      <div className="flex items-center gap-4 mb-10">
                        <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                          {regionData.region}
                        </h2>
                        <span className="ml-auto text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                          {regionData.countries.reduce((sum, c) => sum + c.distributors.length, 0)} distributors
                        </span>
                      </div>

                      {/* Countries Grid */}
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {regionData.countries.map((countryData, countryIdx) => (
                          <div
                            key={countryData.country}
                            className="group bg-white rounded-2xl border border-slate-200 hover:border-blue-400 p-6 lg:p-7 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100"
                            style={{ animationDelay: `${0.05 * countryIdx}s` }}
                          >
                            {/* Country Header */}
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                              <Globe className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                              <h3 className="text-lg font-bold text-slate-900">{countryData.country}</h3>
                            </div>

                            {/* Distributors List */}
                            <ul className="space-y-4">
                              {countryData.distributors.map((distributor, idx) => (
                                <li key={idx} className="group/item">
                                  <div className="flex items-start justify-between gap-2">
                                    <div className="flex-1 min-w-0">
                                      {distributor.url ? (
                                        <a
                                          href={distributor.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300 flex items-center gap-2 group/link break-words"
                                        >
                                          <span>{distributor.name}</span>
                                          <ExternalLink className="h-4 w-4 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 flex-shrink-0 mt-0.5" />
                                        </a>
                                      ) : (
                                        <span className="text-slate-700 font-medium block">{distributor.name}</span>
                                      )}

                                      {/* Exclusive Badge */}
                                      {distributor.isExclusive && (
                                        <span className="inline-block mt-2 px-2 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-md border border-amber-200">
                                          ⭐ Exclusive
                                        </span>
                                      )}

                                      {/* Email Contact */}
                                      {distributor.email && (
                                        <a
                                          href={`mailto:${distributor.email}`}
                                          className="text-xs text-slate-500 hover:text-blue-600 transition-colors duration-300 block mt-2 truncate"
                                        >
                                          {distributor.email}
                                        </a>
                                      )}
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div className="text-center py-20">
                  <Globe className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">No Results Found</h3>
                  <p className="text-slate-600 mb-6">Try adjusting your search or filter criteria</p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedRegion(null);
                    }}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full -mr-40 -mt-40 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/20 rounded-full -ml-40 -mb-40 blur-3xl" />

            <div className="container mx-auto px-4 relative z-10 max-w-3xl text-center text-white">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">Become a Distributor</h3>
              <p className="text-lg text-blue-50 mb-8 leading-relaxed">
                Interested in carrying Detail Guardz products in your region? Join our global network of premium distributors.
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="font-semibold px-8 h-12 bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link to="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
};

export default WhereToBuy;