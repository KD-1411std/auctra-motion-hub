import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import servoMotorImage from "@/assets/servo-motor.jpg";
import connectorsImage from "@/assets/connectors-cables.jpg";

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Products & Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive range of automation components designed for reliability, performance, and precision
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Servo Motors */}
          <Card className="overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group">
            <div className="aspect-video overflow-hidden">
              <img 
                src={servoMotorImage} 
                alt="High-performance servo motors for industrial automation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-foreground">Servo Motors</h3>
              <p className="text-muted-foreground mb-4">
                High-precision servo motors for accurate motion control in demanding industrial applications. 
                Available in various torque and speed configurations.
              </p>
              <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                <li>• High torque-to-weight ratio</li>
                <li>• Precise position control</li>
                <li>• Low maintenance design</li>
                <li>• Wide speed range</li>
              </ul>
              <Button variant="outline-industrial" size="sm" className="w-full">
                View Specifications
              </Button>
            </div>
          </Card>
          
          {/* Industrial Connectors */}
          <Card className="overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group">
            <div className="aspect-video overflow-hidden">
              <img 
                src={connectorsImage} 
                alt="Industrial connectors and cables for automation systems"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Industrial Connectors</h3>
              <p className="text-muted-foreground mb-4">
                Robust connectors ensuring reliable electrical connections in harsh industrial environments. 
                IP-rated protection and various pin configurations.
              </p>
              <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                <li>• IP67/IP68 protection</li>
                <li>• Vibration resistant</li>
                <li>• Quick disconnect design</li>
                <li>• Multiple pin configurations</li>
              </ul>
              <Button variant="outline-industrial" size="sm" className="w-full">
                View Catalog
              </Button>
            </div>
          </Card>
          
          {/* Servo Cables */}
          <Card className="overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group">
            <div className="aspect-video bg-gradient-card flex items-center justify-center">
              <div className="text-6xl text-primary">🔌</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Servo Cables</h3>
              <p className="text-muted-foreground mb-4">
                High-quality servo cables designed for continuous flex applications. 
                Excellent signal integrity and durability for motion control systems.
              </p>
              <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                <li>• Continuous flex rated</li>
                <li>• Low noise transmission</li>
                <li>• Oil and chemical resistant</li>
                <li>• Custom lengths available</li>
              </ul>
              <Button variant="outline-industrial" size="sm" className="w-full">
                View Options
              </Button>
            </div>
          </Card>
          
          {/* Automation Accessories */}
          <Card className="overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group">
            <div className="aspect-video bg-gradient-card flex items-center justify-center">
              <div className="text-6xl text-primary">⚙️</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Automation Accessories</h3>
              <p className="text-muted-foreground mb-4">
                Complete range of automation accessories including mounting brackets, 
                couplings, and protection systems for comprehensive solutions.
              </p>
              <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                <li>• Mounting solutions</li>
                <li>• Flexible couplings</li>
                <li>• Cable management</li>
                <li>• Protection systems</li>
              </ul>
              <Button variant="outline-industrial" size="sm" className="w-full">
                Explore Range
              </Button>
            </div>
          </Card>
          
          {/* Drive Systems */}
          <Card className="overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group">
            <div className="aspect-video bg-gradient-card flex items-center justify-center">
              <div className="text-6xl text-primary">🔋</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Drive Systems</h3>
              <p className="text-muted-foreground mb-4">
                Advanced servo drives and controllers for precise motion control. 
                Compatible with various communication protocols and feedback systems.
              </p>
              <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                <li>• Multi-protocol support</li>
                <li>• Advanced algorithms</li>
                <li>• Compact design</li>
                <li>• Easy commissioning</li>
              </ul>
              <Button variant="outline-industrial" size="sm" className="w-full">
                Technical Specs
              </Button>
            </div>
          </Card>
          
          {/* Custom Solutions */}
          <Card className="overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group">
            <div className="aspect-video bg-gradient-card flex items-center justify-center">
              <div className="text-6xl text-primary">🛠️</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Custom Solutions</h3>
              <p className="text-muted-foreground mb-4">
                Tailored automation solutions designed to meet your specific requirements. 
                From concept to implementation with full engineering support.
              </p>
              <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                <li>• Application engineering</li>
                <li>• Custom manufacturing</li>
                <li>• Integration support</li>
                <li>• Performance optimization</li>
              </ul>
              <Button variant="outline-industrial" size="sm" className="w-full">
                Discuss Requirements
              </Button>
            </div>
          </Card>
        </div>
        
        <div className="text-center">
          <Button variant="industrial" size="lg">
            Download Complete Catalog
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;