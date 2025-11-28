import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroCarousel from '../components/HeroCarousel';
import Footer from '../components/Footer';

import ProductList from '../components/ProductList';

const HomeClient = () => {
    const navigate = useNavigate();
    useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <div className="flex flex-col min-h-screen bg-parchment-cream text-deep-forest-green font-sans overflow-x-hidden">
      <Navbar />

      <main className="grow w-full">
        <HeroCarousel />

        <ProductList />
      </main>
      <Footer />
    </div>
  );
}

export default HomeClient;
