import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-surface-elevated">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">About Us</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
          </div>
          

          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    At <span className="font-semibold text-primary">Auctra Motion Controls</span>, we specialise in providing high-performance automation solutions with a strong focus on industrial connectors, servo motors, and cables. With expertise in motion control technology, we aim to deliver reliable, efficient, and future-ready products that power automation across industries.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Founded with the vision to bridge the gap between innovation and industry needs, Auctra Motion Controls is committed to quality, precision, and customer satisfaction. Our solutions are designed to meet the evolving demands of modern automation systems, ensuring seamless connectivity, superior performance, and long-lasting durability.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Whether it's standard products or customised requirements, we provide end-to-end support, from product selection to after-sales service, helping our customers achieve higher productivity and efficiency.
                  </p>
                </div>
                <Tabs defaultValue="mission" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
                    <TabsTrigger value="mission">Our Mission</TabsTrigger>
                    <TabsTrigger value="vision">Our Vision</TabsTrigger>
                  </TabsList>
                  <TabsContent value="mission" className="mt-6">
                    <Card className="p-8 bg-gradient-card shadow-elevated">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                          <span className="text-2xl font-bold text-primary-foreground">🎯</span>
                        </div>
                        <h3 className="text-3xl font-bold mb-4 text-primary">Our Mission</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          Our mission is to provide high-performance automation products and customized solutions including servo systems, industrial connectors, motion control components, and automation support. We are committed to quality, customer satisfaction, continuous innovation, and building long-term partnerships that help industries achieve operational excellence
                        </p>
                      </div>
                    </Card>
                  </TabsContent>
                  <TabsContent value="vision" className="mt-6">
                    <Card className="p-8 bg-gradient-card shadow-elevated">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                          <span className="text-2xl font-bold text-primary-foreground">🚀</span>
                        </div>
                        <h3 className="text-3xl font-bold mb-4 text-primary">Our Vision</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          To become a trusted global leader in industrial automation by delivering innovative, reliable and future-ready motion control solutions that empower industries to operate smarter, faster and more efficiently.
                        </p>
                      </div>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
          {/* </div> */}
          
          {/* Why Choose Us */}
          <div className="mt-20"> 
            <h3 className="text-4xl font-bold text-center mb-12 text-foreground">Why Choose Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 shadow-card hover:shadow-elevated transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl text-primary">✓</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-3">Quality Assurance</h4>
                  <p className="text-muted-foreground">Rigorous testing and quality control ensure every product meets the highest standards</p>
                </div>
              </Card>
              
              <Card className="p-6 shadow-card hover:shadow-elevated transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl text-primary">⚙️</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-3">Technical Expertise</h4>
                  <p className="text-muted-foreground">Deep industry knowledge and technical support for complex automation challenges</p>
                </div>
              </Card>
              
              <Card className="p-6 shadow-card hover:shadow-elevated transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl text-primary">📦</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-3">Wide Product Range</h4>
                  <p className="text-muted-foreground">Comprehensive portfolio covering all your motion control and automation needs</p>
                </div>
              </Card>
              
              <Card className="p-6 shadow-card hover:shadow-elevated transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl text-primary">🔧</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-3">Custom Solutions</h4>
                  <p className="text-muted-foreground">Tailored products and solutions designed to meet your specific requirements</p>
                </div>
              </Card>
              
              <Card className="p-6 shadow-card hover:shadow-elevated transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl text-primary">🚀</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-3">On-time Delivery</h4>
                  <p className="text-muted-foreground">Reliable supply chain and efficient logistics ensure timely project completion</p>
                </div>
              </Card>
              
              <Card className="p-6 shadow-card hover:shadow-elevated transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl text-primary">🎯</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-3">Customer Focus</h4>
                  <p className="text-muted-foreground">Dedicated support team committed to your success and satisfaction</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;