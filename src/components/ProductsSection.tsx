import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import servoMotorImage from "@/assets/servo-motor.jpg";
import connectorsImage from "@/assets/connectors-cables.jpg";
import DsubConnector from "@/assets/d-sub-con.jpg";
import FRCConnector from "@/assets/FRC.jpeg";
import HeavyDutyConnector from "@/assets/Heavy-duty-connector.jpeg";
import IOConnector from "@/assets/IO-connector.jpg";
import militaryGradeConnector from "@/assets/military-grade.jpg";
import MseriesConnector from "@/assets/M12-connector.jpg";
import powerConnector from "@/assets/Power-connector.jpg";

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
              <h3 className="text-xl font-bold mb-3 text-foreground">Servo Motors</h3>
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
              {/* <Button variant="outline-industrial" size="sm" className="w-full">
                View Specifications
              </Button> */}
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
              {/* <Button variant="outline-industrial" size="sm" className="w-full">
                View Catalog
              </Button> */}
            </div>
          </Card>

          {/* D-sub  Connectors */}
          <Card className="overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group">
            <div className="aspect-video overflow-hidden">
              <img 
                src={DsubConnector} 
                alt="Industrial connectors and cables for automation systems"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">D-Sub Connector</h3>
              <p className="text-muted-foreground mb-4">
                Standard D-Sub Connectors feature machined pin and socket contacts available in circuit sizes of 9, 15, 25, 37 and 50. These contacts can be configured for solder pot, crimp, straight or right-angled PCB termination, offering versatile solutions for various applications.
              </p>
              {/* <Button variant="outline-industrial" size="sm" className="w-full">
                View Catalog
              </Button> */}
            </div>
          </Card>
          
          {/* FRC  Connectors */}
          <Card className="overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group">
            <div className="aspect-video overflow-hidden">
              <img 
                src={FRCConnector} 
                alt="Industrial connectors and cables for automation systems"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">FRC Connector</h3>
              <p className="text-muted-foreground mb-4">
                Flat Ribbon Cable (FRC) and its corresponding connectors are essential components used in a variety of electronic and electrical systems. 
              </p>
              {/* <Button variant="outline-industrial" size="sm" className="w-full">
                View Catalog
              </Button> */}
            </div>
          </Card>

          {/* Heavy duty  Connectors */}
          <Card className="overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group">
            <div className="aspect-video overflow-hidden">
              <img 
                src={HeavyDutyConnector} 
                alt="Industrial connectors and cables for automation systems"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Heavy Duty Connector</h3>
              <p className="text-muted-foreground mb-4">
                  Heavy Duty Connectors (HDC) are industrial connectors designed to transmit power, data and signal in the toughest of conditions. In environments with vibrations, risk of dust, temperature challenges and mechanical impact, our HDC connectors provide a reliable solution with solid aluminum or thermoplastic hoods and housings with protection degree from IP65 up to IP69k.               </p>
              {/* <Button variant="outline-industrial" size="sm" className="w-full">
                View Catalog
              </Button> */}
            </div>
          </Card>

          {/* IO  Connectors */}
          <Card className="overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group">
            <div className="aspect-video overflow-hidden">
              <img 
                src={IOConnector} 
                alt="Industrial connectors and cables for automation systems"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">I/O Connector</h3>
              <p className="text-muted-foreground mb-4">
                I/O connectors play a crucial role in modern electronics, enabling seamless communication and data transfer between devices. Understanding the different types and their applications can help in selecting the right connector for specific needs.
              </p>
              {/* <Button variant="outline-industrial" size="sm" className="w-full">
                View Catalog
              </Button> */}
            </div>
          </Card>

          {/* Military grade  Connectors */}
          <Card className="overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group">
            <div className="aspect-video overflow-hidden">
              <img 
                src={militaryGradeConnector} 
                alt="Industrial connectors and cables for automation systems"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Military Grade Connector</h3>
              <p className="text-muted-foreground mb-4">
                MIL-SPEC connectors, are ruggedized electrical interconnects designed to meet stringent military specifications for durability and performance. They are used in critical applications across various sectors, including military, aerospace, and defense.
              </p>
              {/* <Button variant="outline-industrial" size="sm" className="w-full">
                View Catalog
              </Button> */}
            </div>
          </Card>

          {/* M-series  Connectors */}
          <Card className="overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group">
            <div className="aspect-video overflow-hidden">
              <img 
                src={MseriesConnector} 
                alt="Industrial connectors and cables for automation systems"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">M-series Connector</h3>
              <p className="text-muted-foreground mb-4">
                The M series connectors are available in various sizes, including M8, M5, M23, M16, and M12, and come in A, B, D, and X codes. Additionally, all M series connectors hold an IP67 rating, making them suitable for use under severe and challenging conditions.
              </p>
              {/* <Button variant="outline-industrial" size="sm" className="w-full">
                View Catalog
              </Button> */}
            </div>
          </Card>

          {/* power  Connectors */}
          <Card className="overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group">
            <div className="aspect-video overflow-hidden">
              <img 
                src={powerConnector} 
                alt="Industrial connectors and cables for automation systems"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Power Connector</h3>
              <p className="text-muted-foreground mb-4">
                 They are crucial in various applications, from consumer electronics to industrial machinery. Power connectors can carry either Alternating Current (AC) or Direct Current (DC) and are designed to ensure reliable and safe connections. 

              </p>
              {/* <Button variant="outline-industrial" size="sm" className="w-full">
                View Catalog
              </Button> */}
            </div>
          </Card>
          
        
        </div>
        
        <div className="text-center">
          <a href="/files/Auctra motion & controls.pdf" download>
            <Button variant="industrial" size="lg">
              Download Complete Catalog
            </Button>
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;