import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-deep-forest-green text-parchment-cream p-4 shadow-md w-full">
      <div className="w-full px-8 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Gaming Table Logo" className="h-40 w-auto" />
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="hover:text-rustic-gold transition-colors duration-300">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-rustic-gold transition-colors duration-300">Games</a>
          </li>
          <li>
            <a href="#" className="hover:text-rustic-gold transition-colors duration-300">About</a>
          </li>
          <li>
            <a href="#" className="hover:text-rustic-gold transition-colors duration-300">Contact</a>
          </li>
        </ul>
        <button className="bg-rich-mahogany-brown hover:bg-rustic-gold text-parchment-cream font-bold py-2 px-4 rounded transition-colors duration-300">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
