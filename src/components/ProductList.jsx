import React, { useContext } from 'react';
import UseProductsCards from '../hooks/useProductsCards';
import { CartContext } from './Cart';

const ProductList = () => {
  const products = UseProductsCards();
  const { addToCart } = useContext(CartContext);

  return (
    <section className="py-16 w-full px-4 md:px-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-deep-forest-green">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {products.slice(0,3).map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-rustic-gold/20 flex flex-col">
            <div 
              style={{backgroundImage: `url(${item.image_url})`}} 
              className="h-48 bg-gray-200 rounded-md mb-4 bg-center bg-contain bg-no-repeat flex items-center justify-center text-gray-500"
            >
              {!item.image_url && `Image for ${item.name}`}
            </div>
            <h3 className="text-xl font-bold mb-2 text-deep-forest-green">{item.name}</h3>
            <div className="flex justify-between items-center mt-auto gap-4">
                <span className="text-lg font-bold text-rich-mahogany-brown">${item.price}</span>
                <div className="flex gap-2">
                  <button 
                    onClick={() => {
                        addToCart(item)
                        alert("added")
                    }}
                    className="bg-deep-forest-green hover:bg-green-900 text-parchment-cream font-semibold py-2 px-4 rounded transition-colors text-sm cursor-pointer">
                    Add to Cart
                  </button>
                  <button className="text-rich-mahogany-brown font-semibold hover:text-rustic-gold transition-colors text-sm">
                    Learn More &rarr;
                  </button>
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
