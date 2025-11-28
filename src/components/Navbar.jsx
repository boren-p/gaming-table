import React from 'react';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

const Navbar = () => {
  const nav = useNavigate();

  return (
    <header className="bg-deep-forest-green h-15 text-parchment-cream  shadow-md w-full">
      <img src={logo} alt="Gaming Table Logo" className="size-55 absolute top-0 left-[2.5%]" />
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
        {localStorage.getItem("role") === "cliente" && <h1 className='bg-green-900 rounded-2xl py-2 px-7'>Bienvenido, {localStorage.getItem("user")}</h1>}
        {localStorage.getItem("role") === "admin" && <h1 className='bg-green-900 rounded-2xl py-2 px-7'>Bienvenido, Señor {localStorage.getItem("user")}</h1>}
        <div className='flex gap-5'>
        {!localStorage.getItem("role")  && <button 
                  onClick={()=>nav("/login")} 
                  className=" bg-rich-mahogany-brown hover:bg-rustic-gold text-parchment-cream font-bold py-2 px-4 rounded transition-colors duration-300 cursor-pointer">
              Sign In
              </button>}
        {!localStorage.getItem("role") && <button 
                  onClick={()=>nav("/create")} 
                  className=" bg-rich-mahogany-brown hover:bg-rustic-gold text-parchment-cream font-bold py-2 px-4 rounded transition-colors duration-300 cursor-pointer">
              Create Account
              </button>}
        </div>
        {localStorage.getItem("role") && <button 
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
