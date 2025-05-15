
import React from 'react';
import { images } from '@/assets/images';
import { LockKeyhole, Eye, ClipboardCheck } from 'lucide-react';

const Security = () => {
  return (
    <section className="py-20 bg-coinomad-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Enterprise-grade Security for Every Payment</h2>
            <p className="text-coinomad-textGray text-lg mb-8">
              We prioritize the security of your funds with industry-leading practices and full transparency.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1 p-2 bg-black rounded-full">
                  <LockKeyhole size={20} className="text-coinomad-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">Role-based Access Control</h3>
                  <p className="text-coinomad-textGray">
                    Granular permissions ensure only authorized team members can access specific payroll functions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 p-2 bg-black rounded-full">
                  <Eye size={20} className="text-coinomad-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">On-chain Transparency</h3>
                  <p className="text-coinomad-textGray">
                    All transactions are verifiable on-chain, providing full audit trails and accountability.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 p-2 bg-black rounded-full">
                  <ClipboardCheck size={20} className="text-coinomad-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">Smart Contract Auditing</h3>
                  <p className="text-coinomad-textGray">
                    Our payment contracts undergo rigorous security audits by leading blockchain security firms.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-coinomad-primary opacity-10 blur-3xl rounded-full"></div>
              <div className="relative">
                <img 
                  src={images.securityIllustration} 
                  alt="Security Illustration" 
                  className="max-w-full animate-float-slow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
