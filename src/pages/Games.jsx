import React, { useState, useContext, useEffect } from 'react';
import UseProductsCards from '../hooks/useProductsCards';
import { CartContext } from '../components/Cart';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

const Games = () => {
  const products = UseProductsCards();
  const { addToCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(200);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
    return matchesSearch && matchesPrice;
  });

  return (
    <div className="flex flex-col min-h-screen bg-parchment-cream text-deep-forest-green font-sans overflow-x-hidden">
      {loading && <Loading />}
      <Navbar />
      <main className="grow w-full pt-24 pb-16 px-4 md:px-8">
        <div className="flex gap-8">
          <aside className="w-64 bg-white p-6 rounded-lg shadow-md border border-rustic-gold/20 h-fit">
            <div className="flex items-center gap-2 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
              </svg>
              <h2 className="text-xl font-bold text-deep-forest-green">Filters</h2>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-deep-forest-green mb-3 flex items-center justify-between cursor-pointer">
                Search by Name
              </h3>
              <input
                type="text"
                placeholder="Search games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-deep-forest-green/30 rounded-md focus:border-rustic-gold focus:ring-2 focus:ring-rustic-gold/50 outline-none transition-all"
              />
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-deep-forest-green mb-3 flex items-center justify-between cursor-pointer">
                Categories
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </h3>
              <div className="space-y-2">
                <label className="flex items-center justify-between text-sm cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" checked className="rounded border-deep-forest-green/30" />
                    <span>Gaming Table</span>
                  </div>
                  <span className="text-gray-500">{products.length}</span>
                </label>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-deep-forest-green mb-3 flex items-center justify-between cursor-pointer">
                Price Range
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-gray-600">Min: ${minPrice}</label>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={minPrice}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Max: ${maxPrice}</label>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setSearchTerm('');
                setMinPrice(0)
                setMaxPrice(200);
              }}
              className="w-full bg-rich-mahogany-brown hover:bg-rustic-gold text-parchment-cream font-semibold py-2 px-4 rounded transition-colors cursor-pointer"
            >
              Clear Filters
            </button>
          </aside>

          <section className="flex-1">
            <h1 className="text-3xl font-bold mb-8 text-deep-forest-green">
              All Games ({filteredProducts.length})
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-rustic-gold/20 flex flex-col">
                  <div 
                    style={{backgroundImage: `url(${item.image_url})`}} 
                    className="h-48 bg-gray-200 rounded-md mb-4 bg-center bg-contain bg-no-repeat flex items-center justify-center text-gray-500"
                  >
                    {!item.image_url && `Image for ${item.name}`}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-deep-forest-green">{item.name}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {item.description || "No description available."}
                  </p>
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
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-gray-500">No games found matching your filters.</p>
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Games;
