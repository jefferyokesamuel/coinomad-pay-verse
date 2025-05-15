
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Cta = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-coinomad-primary to-yellow-500 opacity-90"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black">
            Start Paying Your Team in Crypto
          </h2>
          <p className="text-black text-opacity-80 text-lg mb-10 md:text-xl">
            Join hundreds of projects using Coinomad for simple, reliable crypto payroll.
          </p>
          <Button className="bg-black hover:bg-opacity-90 text-coinomad-primary font-medium text-lg px-8 py-6 rounded-lg">
            Get Started
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
