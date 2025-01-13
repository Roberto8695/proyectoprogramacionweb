import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiFillStar, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';

const RecomendProducts = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'ropa', 'calzado', 'accesorios'];

  const products = [
    {
      id: 1,
      name: "Zapatillas Deportivas",
      price: 89.99,
      category: "calzado",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      discount: "15%",
      isNew: true
    },
    // Añadir más productos aquí
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Recomendados para ti</h2>
          <div className="flex justify-center space-x-4 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium capitalize
                  ${activeCategory === category 
                    ? 'bg-black text-white' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative aspect-w-1 aspect-h-1">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 space-y-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="bg-white p-2 rounded-full shadow-md"
                  >
                    <AiOutlineHeart className="w-5 h-5 text-gray-600" />
                  </motion.button>
                </div>
                {product.discount && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                    -{product.discount}
                  </span>
                )}
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <AiFillStar
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    ({product.rating})
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">${product.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-black text-white p-2 rounded-full hover:bg-gray-800"
                  >
                    <AiOutlineShoppingCart className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RecomendProducts;