import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Mail, Send, Clock } from "lucide-react"; // Removed Phone and MapPin
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "mailto:info@nordicaplastics.ca";
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Detail Guardz Canada</title>
        <meta
          name="description"
          content="Get in touch with Detail Guardz. We're here to help with product questions, orders, and support. Canadian customer service team."
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
                <span className="text-foreground">Contact</span>
              </nav>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground">Contact Us</h1>
              <p className="text-muted-foreground mt-2">We're here to help with any questions</p>
            </div>
          </section>

          <section className="py-12 lg:py-20">
            <div className="container-wide">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Contact Info */}
                <div className="lg:col-span-1 space-y-8">
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-4">Get In Touch</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Have a question about a product? Need help with an order? We're here to help!
                    </p>
                  </div>

                  {/* Cleaned up info section - keeping only specific essential details if needed */}
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Support Hours</p>
                        <p className="text-muted-foreground">Mon-Fri: 9am - 5pm EST</p>
                      </div>
                    </div>

                    {/* Visual spacer to keep the left column from feeling too empty compared to the form */}
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-sm text-muted-foreground italic">
                        Responses are typically sent within 24 business hours.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
                  <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-soft">
                    <h2 className="text-xl font-semibold text-foreground mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            Name
                          </label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Your name"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="you@example.com"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="What can we help with?"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us more about your inquiry..."
                          rows={5}
                          required
                        />
                      </div>
                      <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;