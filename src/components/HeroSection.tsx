import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-automation.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/45 to-background/30" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground drop-shadow-lg">
            Powering Automation with 
            <span className="block text-primary drop-shadow-lg">Reliable Motion Control Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto drop-shadow-md font-medium">
            Specializing in high-performance industrial connectors, servo motors, and cables. 
            Delivering precision, quality, and innovation for modern automation systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('products')}
              className="min-w-[200px]"
            >
              Explore Products
            </Button>
            <Button 
              variant="outline-industrial" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="min-w-[200px]"
            >
              Get Quote
            </Button>
          </div>
          
          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">Q</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground drop-shadow-md">Quality Products</h3>
              <p className="text-foreground/80 drop-shadow-sm">Premium automation components built to last</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">R</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground drop-shadow-md">Reliable Support</h3>
              <p className="text-foreground/80 drop-shadow-sm">Expert technical assistance and after-sales service</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">C</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground drop-shadow-md">Competitive Pricing</h3>
              <p className="text-foreground/80 drop-shadow-sm">Cost-effective solutions without compromising quality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;