import React from 'react';
import { motion } from 'framer-motion';

const FeaturedCategories = () => {
  const categories = [
    { id: 1, name: "Ropa", image: "../images/short.webp" },
    { id: 2, name: "Calzado", image: "../images/tenis.webp" },
    { id: 3, name: "Accesorios", image: "../images/short.webp" },
    { id: 4, name: "Deportes", image: "../images/tenis.webp" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Categorías Destacadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={`/images/${category.image}`}
                  alt={category.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">{category.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;