import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { motion } from 'framer-motion';

const ProductList = () => {
  // Datos de ejemplo - Reemplazar con datos reales
  const products = [
    {
      id: 1,
      name: "Zapatillas Deportivas",
      price: 89.99,
      category: "Calzado",
      rating: 4.5,
      reviews: 128,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      discount: 15,
      isNew: true
    },
    {
        id: 1,
        name: "Zapatillas Deportivas",
        price: 89.99,
        category: "Calzado",
        rating: 4.5,
        reviews: 128,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        discount: 15,
        isNew: true
      },
      {
        id: 1,
        name: "Zapatillas Deportivas",
        price: 89.99,
        category: "Calzado",
        rating: 4.5,
        reviews: 128,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        discount: 15,
        isNew: true
      },
        {
      id: 1,
      name: "Zapatillas Deportivas",
      price: 89.99,
      category: "Calzado",
      rating: 4.5,
      reviews: 128,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      discount: 15,
      isNew: true
    },
    // Añadir más productos aquí
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

  return (
    <div className="container mx-auto px-4">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>

      {/* Paginación */}
      <div className="mt-8 flex justify-center">
        <nav className="flex items-center gap-2">
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
            Anterior
          </button>
          <div className="flex gap-1">
            {[1, 2, 3].map(page => (
              <button
                key={page}
                className={`px-4 py-2 rounded-lg ${
                  page === 1
                    ? 'bg-purple-600 text-white'
                    : 'hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
            Siguiente
          </button>
        </nav>
      </div>
    </div>
  );
};

export default ProductList;