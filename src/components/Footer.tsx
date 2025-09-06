const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-industrial-gray text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Auctra Motion Controls</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Specializing in high-performance automation solutions with industrial connectors, 
              servo motors, and cables for modern automation systems.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                <span className="text-sm">📧</span>
              </div>
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                <span className="text-sm">📱</span>
              </div>
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                <span className="text-sm">🔗</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-primary transition-colors">Products</a></li>
              <li><a href="#industries" className="text-gray-300 hover:text-primary transition-colors">Industries</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Servo Motors</li>
              <li>Industrial Connectors</li>
              <li>Servo Cables</li>
              <li>Automation Accessories</li>
              <li>Drive Systems</li>
              <li>Custom Solutions</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {currentYear} Auctra Motion Controls. All rights reserved. | 
            <span className="text-primary ml-1">Powering Automation with Reliable Motion Control Solutions</span>
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Keywords: Automation connectors supplier India, Servo motors & cables, Industrial motion control solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;