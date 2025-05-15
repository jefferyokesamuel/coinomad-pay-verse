
import React from 'react';
import StatCard from '../StatCard';

const Stats = () => {
  const stats = [
    {
      value: '400+',
      label: 'Projects Supported'
    },
    {
      value: '$12M+',
      label: 'Total Payouts Processed'
    },
    {
      value: '15+',
      label: 'Supported Blockchains'
    },
    {
      value: '0%',
      label: 'Conversion/FX Fees'
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
