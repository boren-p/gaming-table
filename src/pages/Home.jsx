import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroCarousel from '../components/HeroCarousel';
import Cards from '../components/Cards';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-parchment-cream text-deep-forest-green font-sans overflow-x-hidden">
      <Navbar />

      <main className="grow w-full">
        <HeroCarousel />

        {/* Featured Section Placeholder */}
        
        <Cards/>
        
      </main>
      <Footer />
    </div>
  );
}

export default Home;
