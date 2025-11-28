import React, { useContext } from 'react';
import { CartContext } from '../components/Cart';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="flex flex-col min-h-screen bg-parchment-cream text-deep-forest-green font-sans overflow-x-hidden">
      <Navbar />
      <main className="grow w-full py-16 px-4 md:px-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>
        
        {cart.length === 0 ? (
          <p className="text-center text-xl">Your cart is empty.</p>
        ) : (
          <div className="max-w-4xl mx-auto space-y-4">
            {cart.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow flex justify-between items-center border border-rustic-gold/20">
                <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gray-200 rounded bg-center bg-cover" style={{backgroundImage: `url(${item.image_url})`}}></div>
                    <div>
                        <h3 className="font-bold text-lg">{item.name}</h3>
                        <p className="text-rich-mahogany-brown font-semibold">${item.price}</p>
                    </div>
                </div>
                <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800 font-medium cursor-pointer"
                >
                    Remove
                </button>
              </div>
            ))}
            <div className="mt-8 text-right">
                <p className="text-2xl font-bold mb-4">Total: ${cart.reduce((acc, item) => acc + Number(item.price), 0)}</p>
                <button className="bg-rich-mahogany-brown hover:bg-rustic-gold text-parchment-cream font-bold py-3 px-8 rounded-lg shadow-lg transition-colors cursor-pointer">
                    Checkout
                </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
