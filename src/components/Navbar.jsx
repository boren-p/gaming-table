import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <header className="relative bg-deep-forest-green h-18 text-parchment-cream  shadow-md w-full">
      <img src={logo} alt="Gaming Table Logo" className="h-70 w-auto absolute top-0 left-0 z-10" />
      <div className="pl-70 pr-20 w-full h-full flex justify-between items-center ">
        <ul className="flex space-x-6">
          <li>
            <a href="#" className=" hover:text-rustic-gold transition-colors duration-300">Home</a>
          </li>
          <li>
            <a href="#" className=" hover:text-rustic-gold transition-colors duration-300">Games</a>
          </li>
          <li>
            <a href="#" className="  hover:text-rustic-gold transition-colors duration-300">About</a>
          </li>
          <li>
            <a href="#" className="  hover:text-rustic-gold transition-colors duration-300">Contact</a>
          </li>
        </ul>
        <button className=" bg-rich-mahogany-brown hover:bg-rustic-gold text-parchment-cream font-bold py-2 px-4 rounded transition-colors duration-300">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Navbar;
