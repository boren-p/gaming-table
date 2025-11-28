import React from 'react';
import logo from '../assets/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from './Loading';

const Navbar = () => {
  const nav = useNavigate();
  const loc = useLocation();

  return (
    <header className="relative bg-deep-forest-green h-15 text-parchment-cream  shadow-md w-full">
      <img src={logo} alt="Gaming Table Logo" className="size-55 absolute top-0 left-[2.5%] z-10" />
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
        {loc.pathname=== "/client"&&<h1 className='bg-green-900 rounded-2xl py-2 px-7'>Bienvenido, {localStorage.getItem("user")}</h1>}
        {loc.pathname=== "/admin"&&<h1 className='bg-green-900 rounded-2xl py-2 px-7'>Bienvenido, Señor {localStorage.getItem("user")}</h1>}
        <div className='flex gap-5'>
        {loc.pathname==="/" && <button 
                  onClick={()=>nav("/login")} 
                  className=" bg-rich-mahogany-brown hover:bg-rustic-gold text-parchment-cream font-bold py-2 px-4 rounded transition-colors duration-300 cursor-pointer">
              Sign In
              </button>}
        {loc.pathname==="/" && <button 
                  onClick={()=>nav("/create")} 
                  className=" bg-rich-mahogany-brown hover:bg-rustic-gold text-parchment-cream font-bold py-2 px-4 rounded transition-colors duration-300 cursor-pointer">
              Create Account
              </button>}
        </div>
        {(loc.pathname==="/client" || loc.pathname === "/admin") && <button 
                  onClick={()=>{
                    localStorage.clear();
                    nav("/")}} 
                  className=" bg-rich-mahogany-brown hover:bg-rustic-gold text-parchment-cream font-bold py-2 px-4 rounded transition-colors duration-300 cursor-pointer">
              Sign Out
              </button>}

      </div>
    </header>
  );
};

export default Navbar;
