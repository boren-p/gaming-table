import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroCarousel from '../components/HeroCarousel';
import CreateProduct from '../compsAdmin/CreateProduct';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-parchment-cream text-deep-forest-green font-sans overflow-x-hidden">
      <Navbar />

      <main className="grow w-full">
        <HeroCarousel />
        
        <CreateProduct/>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
