import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroCarousel from '../components/HeroCarousel';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

const HomeClient = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("user")
    if (!token) {
      navigate("/");
    }

    async function traerPerfil() {
      try {
        const respuesta = await fetch(
          "https://api-funval-g6.onrender.com/auth/me",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await respuesta.json();
        setUser(data);
      } catch (error) {}
    }
    traerPerfil();
  }, []);
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

export default HomeClient;
