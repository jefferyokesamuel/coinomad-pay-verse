import React from 'react';
import logo from '../assets/logo.png'
const Logo: React.FC = () => {
  return <div className="flex items-center">
      <img src={logo} alt="Coinomad Logo" className="h-[130px]" />
    </div>;
};
export default Logo;