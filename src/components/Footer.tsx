
import React from 'react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-12 border-t border-coinomad-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 text-coinomad-textGray max-w-md">
              Simplifying crypto payroll for global teams. Automated, fast, and borderless salary payments in stablecoins.
            </p>
            <p className="mt-4 text-coinomad-textGray">
              &copy; {currentYear} Coinomad. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="text-coinomad-text font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-coinomad-textGray hover:text-coinomad-primary transition-colors">Features</a></li>
              <li><a href="#" className="text-coinomad-textGray hover:text-coinomad-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="text-coinomad-textGray hover:text-coinomad-primary transition-colors">Dashboard</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-coinomad-text font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-coinomad-textGray hover:text-coinomad-primary transition-colors">FAQs</a></li>
              <li><a href="#" className="text-coinomad-textGray hover:text-coinomad-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-coinomad-textGray hover:text-coinomad-primary transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-coinomad-text font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-coinomad-textGray hover:text-coinomad-primary transition-colors">Terms</a></li>
              <li><a href="#" className="text-coinomad-textGray hover:text-coinomad-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="text-coinomad-textGray hover:text-coinomad-primary transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
