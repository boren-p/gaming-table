import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-deep-forest-green text-parchment-cream py-8 mt-auto w-full">
      <div className="w-full px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start">
            <img src={logo} alt="Gaming Table Logo" className="h-60 w-auto mb-4" />
            <p className="text-lg mt-2 opacity-90 max-w-md text-center md:text-left font-medium">
              Purveyors of fine cardboard and plastic distractions. Guaranteed to ruin friendships or your money back (not really).
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-8">
              <a href="#" className="text-lg hover:text-rustic-gold transition-colors duration-300 font-semibold">Privacy Policy</a>
              <a href="#" className="text-lg hover:text-rustic-gold transition-colors duration-300 font-semibold">Terms of Service</a>
            </div>
            <div className="text-base opacity-80">
              &copy; {new Date().getFullYear()} Gaming Table. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
