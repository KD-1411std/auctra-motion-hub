import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    requirement: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with your backend or email service here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
                     +91-9330470033, +91-9244324468 <br />
                      <span className="text-sm">Monday - Saturday: 9:00 AM - 8:00 PM</span>
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
                      info@auctramotioncontrols.com<br />
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
                      +91-9244324468<br />
                      <span className="text-sm">Quick support and quotes</span>
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Downloads Section */}
            <Card className="p-6 shadow-card">
              <h3 className="text-xl font-bold mb-4 text-primary">Downloads & Resources</h3>
              <div className="space-y-3">
                <Button variant="outline-industrial" className="w-full justify-start">
                  <span className="mr-2">📋</span>
                  Product Catalog (PDF)
                </Button>
                <Button variant="outline-industrial" className="w-full justify-start">
                  <span className="mr-2">📖</span>
                  Company Brochure
                </Button>
                {/* <Button variant="outline-industrial" className="w-full justify-start">
                  <span className="mr-2">📊</span>
                  Technical Datasheets
                </Button> */}
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
              
              <Button type="submit" variant="industrial" size="lg" className="w-full">
                Send Message
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                We'll get back to you within 24 hours with a detailed response.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;