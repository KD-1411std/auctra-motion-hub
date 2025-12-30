// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import emailjs from "emailjs-com";
import { useState } from "react";
import scanner from "@/assets/WhatsappSCanner.png";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    requirement: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: "" });

    emailjs
      .send(
        "service_wxepuga", // <-- replace
        "template_c2glkdp", // <-- replace
        {
          from_name: formData.name,
          company: formData.company,
          reply_to: formData.email,
          message: formData.requirement,
        },
        "NED9J3uk-t1ekvs3C" // <-- replace
      )
      .then(
        () => {
          setStatus({ loading: false, success: true, error: "" });
          setFormData({
            name: "",
            company: "",
            email: "",
            requirement: "",
          });
        },
        (err) => {
          setStatus({
            loading: false,
            success: false,
            error: "Failed to send message. Try again!",
          });
          console.error("EmailJS Error:", err);
        }
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Contact Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your automation needs? Get in touch with our expert team
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 shadow-card">
              <h3 className="text-2xl font-bold mb-6 text-primary">Get In Touch</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-primary">📍</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">Address</h4>
                            <p className="text-muted-foreground">
                              Bhopal, MP, 462001<br />
                              India
                            </p>
                          </div>
                        </div>
                      
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-primary">📞</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">Phone</h4>
                            <p className="text-muted-foreground">
                              +91 90397 90111<br />
                              +91 90397 90222
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-primary">✉️</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">Email</h4>
                            <p className="text-muted-foreground">
                              info@auctramotioncontrols.com
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-primary">💬</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">WhatsApp</h4>
                            <p className="text-muted-foreground">
                              +91 90397 90111
                            </p>
                          </div>
                        </div>
                      </div>
                
                      {/* WhatsApp QR Code */}
                      <div className="flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-48 h-48 bg-white rounded-lg p-4 shadow-card mb-3">
                            <img 
                              src={scanner} 
                              alt="WhatsApp QR Code" 
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <p className="text-sm text-muted-foreground">Scan to WhatsApp</p>
                        </div>
                      </div>
                </div>
            </Card>
            
            {/* Downloads Section */}
            <Card className="p-6 shadow-card">
              <h3 className="text-xl font-bold mb-4 text-primary">Downloads & Resources</h3>
              <div className="space-y-3">

                {/* Product Catalog PDF */}
                <a href="/files/Auctra-Brochure.pdf" download className="block">
                  <Button variant="outline-industrial" className="w-full justify-start">
                    <span className="mr-2">📋</span>
                    Product Catalog (PDF)
                  </Button>
                </a>

                {/* Company Brochure PDF */}
                {/* <a href="/files/Auctra motion & controls.pdf" download className="block">
                  <Button variant="outline-industrial" className="w-full justify-start">
                    <span className="mr-2">📖</span>
                    Company Brochure
                  </Button>
                </a> */}

              </div>
            </Card>


          </div>
          
          {/* Contact Form */}
          <Card className="p-8 shadow-elevated">
            <h3 className="text-2xl font-bold mb-6 text-primary">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@company.com"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="requirement">Requirement Details *</Label>
                <Textarea
                  id="requirement"
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  required
                  placeholder="Please describe your automation requirements, specific products needed, or any technical questions..."
                  rows={5}
                />
              </div>
              
              <Button type="submit" variant="industrial" size="lg" className="w-full" disabled={status.loading}>
                {status.loading ? "Sending..." : "Send Message"}
              </Button>

                            {/* STATUS MESSAGES */}
              {status.success && (
                <><p className="text-green-600 text-center font-semibold">
                  ✔ Message sent successfully!
                </p><p className="text-sm text-muted-foreground text-center">
                We'll get back to you within 2 working days with a detailed response.
              </p></>
              )}

              {status.error && (
                <p className="text-red-600 text-center font-semibold">
                  ❌ {status.error}
                </p>
              )}
              
              {/* <p className="text-sm text-muted-foreground text-center">
                We'll get back to you within 2 working days with a detailed response.
              </p> */}
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;