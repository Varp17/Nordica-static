import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Globe, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { useState } from "react";

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

  const filteredData = distributorData.map(region => ({
    ...region,
    countries: region.countries.filter(country =>
      country.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.distributors.some(d => d.name.toLowerCase().includes(searchTerm.toLowerCase()))
    ),
  })).filter(region => region.countries.length > 0);

  return (
    <>
      <Helmet>
        <title>Where to Buy | Find Detail Guardz Distributors Worldwide</title>
        <meta
          name="description"
          content="Find Detail Guardz products near you. Locate authorized distributors and retailers across North America, Europe, Asia-Pacific, and more."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Header */}
          <section className="bg-secondary py-12 lg:py-16">
            <div className="container-wide">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Link to="/" className="hover:text-foreground">Home</Link>
                <span>/</span>
                <span className="text-foreground">Where to Buy</span>
              </nav>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground">Where to Buy</h1>
              <p className="text-muted-foreground mt-2">Find Detail Guardz distributors worldwide</p>
            </div>
          </section>

          <section className="py-12 lg:py-20">
            <div className="container-wide">
              {/* Online Store CTA */}
              <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 lg:p-12 mb-12 text-center">
                <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
                  Shop Our Online Store
                </h2>
                <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                  Can't find a distributor nearby? Shop directly from us with worldwide shipping available.
                </p>
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/products">Shop Online Now</Link>
                </Button>
              </div>

              {/* Search */}
              <div className="max-w-md mx-auto mb-12">
                <div className="relative">
                  <Globe className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search by country or distributor name..."
                    className="w-full pl-12 pr-4 h-12 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* Distributors by Region */}
              {filteredData.map((regionData) => (
                <div key={regionData.region} className="mb-16">
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 pb-4 border-b">
                    {regionData.region}
                  </h2>

                  {regionData.countries.map((countryData) => (
                    <div key={countryData.country} className="mb-10">
                      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Globe className="h-5 w-5 text-primary" />
                        {countryData.country}
                      </h3>

                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {countryData.distributors.map((distributor, idx) => (
                          <div
                            key={idx}
                            className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elevated transition-all border border-border/50 hover:border-primary/30"
                          >
                            <div className="flex flex-col h-full">
                              <div className="flex-1">
                                <h4 className="font-semibold text-foreground mb-2 leading-tight">
                                  {distributor.name}
                                </h4>
                                {distributor.isExclusive && (
                                  <span className="inline-block text-xs bg-primary/10 text-primary px-2 py-1 rounded-full mb-3 font-medium">
                                    Exclusive Distributor
                                  </span>
                                )}
                                {distributor.email && (
                                  <p className="text-sm text-muted-foreground mb-2">
                                    {distributor.email}
                                  </p>
                                )}
                              </div>

                              {distributor.url && (
                                <a
                                  href={distributor.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium mt-3"
                                >
                                  Visit Website
                                  <ExternalLink className="h-4 w-4" />
                                </a>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}

              {filteredData.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    No distributors found matching your search.
                  </p>
                </div>
              )}

              {/* Become a Distributor */}
              <div className="mt-16 text-center bg-secondary/50 rounded-2xl p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-foreground mb-3">Become a Distributor</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Interested in carrying Detail Guardz products in your region? We're always looking for passionate partners to join our global network.
                </p>
                <Button variant="default" size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default WhereToBuy;
