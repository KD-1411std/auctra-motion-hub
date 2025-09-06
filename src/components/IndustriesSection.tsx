import { Card } from "@/components/ui/card";

const IndustriesSection = () => {
  const industries = [
    {
      icon: "🏭",
      title: "Manufacturing",
      description: "Precision automation for production lines, assembly systems, and quality control processes"
    },
    {
      icon: "🤖",
      title: "Robotics",
      description: "Motion control solutions for industrial robots, collaborative robots, and automated guided vehicles"
    },
    {
      icon: "📦",
      title: "Packaging",
      description: "High-speed automation for packaging lines, filling systems, and material handling equipment"
    },
    {
      icon: "🚗",
      title: "Automotive",
      description: "Reliable automation for automotive assembly, testing equipment, and production machinery"
    },
    {
      icon: "🔧",
      title: "CNC Machines",
      description: "Precision motion control for CNC machining centers, lathes, and multi-axis manufacturing systems"
    },
    {
      icon: "💻",
      title: "Electronics",
      description: "Accurate positioning systems for PCB assembly, component placement, and testing equipment"
    },
    {
      icon: "🍭",
      title: "Food & Beverage",
      description: "Hygienic automation solutions for food processing, bottling, and packaging applications"
    },
    {
      icon: "💊",
      title: "Pharmaceutical",
      description: "Precise automation for drug manufacturing, packaging, and laboratory automation systems"
    },
    {
      icon: "🏗️",
      title: "Construction",
      description: "Robust motion control for construction equipment, material handling, and automated systems"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-surface-elevated">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Industries We Serve</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powering automation across diverse industries with specialized motion control solutions
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-card hover:shadow-elevated transition-all duration-300 group cursor-pointer"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-card shadow-elevated max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary">Custom Industry Solutions</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Don't see your industry listed? We work across many specialized sectors and can develop 
              custom automation solutions tailored to your specific industry requirements and regulations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="bg-primary/10 px-3 py-1 rounded-full">Aerospace</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">Mining</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">Energy</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">Textiles</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">Marine</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">Agriculture</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;