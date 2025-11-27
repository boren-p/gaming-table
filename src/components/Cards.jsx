import React from 'react';

const Cards = () => {
    return (
        <>
        <section className="py-16 w-full px-4 md:px-8">
                  <h2 className="text-3xl font-bold mb-8 text-center text-deep-forest-green">Featured Games</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-rustic-gold/20">
                <div className="h-48 bg-gray-200 rounded-md mb-4 flex items-center justify-center text-gray-500">
                  Game Image Placeholder
                </div>
                <h3 className="text-xl font-bold mb-2">{item}</h3>
                <p className="text-gray-600 mb-4">
                  A brief description of the game goes here. Immerse yourself in the adventure.
                </p>
                <button className="text-rich-mahogany-brown font-semibold hover:text-rustic-gold transition-colors">
                  Learn More &rarr;
                </button>
              </div>
            ))}
                  </div>
                </section>
        
        </>
    );
}

export default Cards;
