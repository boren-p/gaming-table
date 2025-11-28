import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Import carousel images
import img1 from '../assets/carousel/1.png';
import img2 from '../assets/carousel/2.png';
import img3 from '../assets/carousel/3.png';
import img4 from '../assets/carousel/4.png';
import img5 from '../assets/carousel/5.png';
import img6 from '../assets/carousel/6.png';
import img7 from '../assets/carousel/7.png';
import img8 from '../assets/carousel/8.png';
import img9 from '../assets/carousel/9.png';
import img10 from '../assets/carousel/10.png';
import { useLocation } from 'react-router-dom';

const carouselImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const HeroCarousel = () => {
  const nav = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[550px] flex items-center justify-center overflow-hidden">
      {/* Carousel Images */}
      {carouselImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-4000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-parchment-cream">
        <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">Welcome to the Table</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
          Discover the best tabletop games, accessories, and community events. Join us for an unforgettable gaming experience.
        </p>
        <button onClick={()=>nav("/collection")} className="bg-rich-mahogany-brown hover:bg-rustic-gold text-parchment-cream font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg border border-parchment-cream/20 cursor-pointer">
          Explore Collection
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;
