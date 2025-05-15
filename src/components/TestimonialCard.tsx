
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  title,
  company,
  avatar
}) => {
  return (
    <div className="bg-coinomad-card border border-coinomad-border rounded-lg p-6">
      <div className="flex items-start mb-4">
        <div className="text-coinomad-primary text-4xl font-serif mr-2">"</div>
      </div>
      <p className="text-coinomad-textGray mb-6">{quote}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="text-coinomad-text font-medium">{name}</h4>
          <p className="text-coinomad-textGray text-sm">{title}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
