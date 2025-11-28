import React from 'react';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

const Navbar = () => {
  const nav = useNavigate();

  return (
    <header className="bg-deep-forest-green h-15 text-parchment-cream  shadow-md w-full">
      <img src={logo} alt="Gaming Table Logo" className="size-55 absolute top-0 left-[2.5%] z-1" />
      <div className="pl-70 pr-20 w-full h-full flex justify-between items-center ">
        <ul className="flex space-x-6">
          <li>
            <button 
              onClick={() => {
                const role = localStorage.getItem("role");
                if (role) {
                  if (role === "cliente") {
                    nav("/client");
                  }
                  if (role === "admin") {
                    nav("/admin");
                  }
                } else {
                  nav("/");
                }
              }}
              className=" hover:text-rustic-gold transition-colors duration-300 cursor-pointer"
            >
              Home
            </button>
          </li>
          <li>
            <button onClick={() => nav("/games")} className=" hover:text-rustic-gold transition-colors duration-300 cursor-pointer">Games</button>
          </li>
          <li>
            <a href="#" className="  hover:text-rustic-gold transition-colors duration-300">About</a>
          </li>
          <li>
            <button onClick={() => nav("/contact")} className="  hover:text-rustic-gold transition-colors duration-300 cursor-pointer">Contact</button>
          </li>
        </ul>
        {localStorage.getItem("role") === "cliente" && <h1 className=' rounded-2xl py-2 px-7'>Bienvenido, {localStorage.getItem("user")}</h1>}
        {localStorage.getItem("role") === "admin" && <h1 className=' rounded-2xl py-2 px-7'>Bienvenido, Señor {localStorage.getItem("user")}</h1>}
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

        {localStorage.getItem("role") && <div className='flex gap-5 items-center justify-center'>
        {localStorage.getItem("role") === "cliente" && 
        <div onClick={() => nav("/cart")} className='cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>

          </div>}
        {localStorage.getItem("role") && <button 
                  onClick={()=>{
                    localStorage.clear();
                    nav("/")}} 
                  className=" bg-rich-mahogany-brown hover:bg-rustic-gold text-parchment-cream font-bold py-2 px-4 rounded transition-colors duration-300 cursor-pointer">
              Sign Out
              </button>}
        
        </div>}

      </div>
    </header>
  );
};

export default Navbar;
