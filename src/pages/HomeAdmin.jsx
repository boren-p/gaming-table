import React from 'react';
import Navbar from '../components/Navbar';
import CreateProduct from '../compsAdmin/CreateProduct';
import ProductM from '../compsAdmin/ProductM';

const HomeAdmin = () => {
    return (
        <div className='relative'>
            <Navbar/>
            <main className="grow w-full flex flex-col items-center px-[5%]">
                <CreateProduct/>
                {/* Featured Section Placeholder */}
        
                 <ProductM/>
        
            </main>
        </div>
    );
}

export default HomeAdmin;
