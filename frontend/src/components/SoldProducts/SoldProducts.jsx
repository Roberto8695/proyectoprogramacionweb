import React from 'react';
import { motion } from 'framer-motion';
import { AiFillStar, AiOutlineShoppingCart } from 'react-icons/ai';

const SoldProducts = () => {
  const products = [
    {
      id: 1,
      name: "Zapatillas Running Pro",
      price: 129.99,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      discount: "20%",
      isNew: true
    },
    // Agrega más productos aquí
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Más Vendidos</h2>
          <p className="text-gray-600">Descubre nuestros productos más populares</p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={item}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                {product.discount && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                    -{product.discount}
                  </span>
                )}
                {product.isNew && (
                  <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-md text-sm">
                    Nuevo
                  </span>
                )}
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <AiFillStar
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">({product.rating})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">${product.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-black text-white p-2 rounded-full hover:bg-gray-800"
                  >
                    <AiOutlineShoppingCart className="w-6 h-6" />
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

export default SoldProducts;