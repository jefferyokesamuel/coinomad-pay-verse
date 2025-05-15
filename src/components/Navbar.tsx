
import { useState, useEffect } from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-coinomad-background bg-opacity-90 backdrop-blur-md border-b border-coinomad-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              <li>
                <a href="#" className="text-coinomad-text hover:text-coinomad-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-coinomad-text hover:text-coinomad-primary transition-colors">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-coinomad-text hover:text-coinomad-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#partners" className="text-coinomad-text hover:text-coinomad-primary transition-colors">
                  Partners
                </a>
              </li>
            </ul>
            
            <Button className="bg-coinomad-primary hover:bg-opacity-90 text-black font-medium neon-glow-primary">
              Login
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-coinomad-text focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-coinomad-card border-t border-coinomad-border">
          <div className="container mx-auto px-6 pt-4 pb-8">
            <ul className="space-y-6">
              <li>
                <a 
                  href="#" 
                  className="text-coinomad-text hover:text-coinomad-primary text-lg block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#how-it-works" 
                  className="text-coinomad-text hover:text-coinomad-primary text-lg block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How it Works
                </a>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  className="text-coinomad-text hover:text-coinomad-primary text-lg block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="#partners" 
                  className="text-coinomad-text hover:text-coinomad-primary text-lg block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Partners
                </a>
              </li>
              <li className="pt-2">
                <Button 
                  className="bg-coinomad-primary hover:bg-opacity-90 text-black font-medium w-full neon-glow-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
