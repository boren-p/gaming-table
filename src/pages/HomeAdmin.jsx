import React from 'react';
import Navbar from '../components/Navbar';
import HeroCarousel from '../components/HeroCarousel';
import Cards from '../components/Cards';
import CreateProduct from '../compsAdmin/CreateProduct';

const HomeAdmin = () => {
    return (
        <div>
            <Navbar/>
            <main className="grow w-full flex flex-col items-center px-[5%]">
                <CreateProduct/>
                {/* Featured Section Placeholder */}
        
                 <Cards/>
        
            </main>
        </div>
    );
}

export default HomeAdmin;
