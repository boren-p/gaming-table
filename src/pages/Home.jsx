import React from 'react';
import CreateProduct from "../comps/CreateProduct"

const Home = () => {
    return (
        <div className='bg-white w-screen h-screen'>
            <header className='bg-red-800 w-screen h-20 flex items-center px-[10%]'>gaming-table</header>
            <main className='py-5 px-[15%] text-black'>
                <CreateProduct/>
            </main>
        </div>
    );
}

export default Home;
