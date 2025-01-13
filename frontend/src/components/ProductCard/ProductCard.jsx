import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiFillHeart, AiOutlineHeart, AiFillStar } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';

const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white rounded-2xl shadow-lg overflow-hidden"
    >
      {/* Imagen del producto */}
      <div className="relative aspect-square overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Badges */}
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm font-medium">
            Nuevo
          </span>
        )}
        {product.discount && (
          <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium">
            -{product.discount}%
          </span>
        )}

        {/* Botón de favoritos */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
        >
          {isLiked ? (
            <AiFillHeart className="w-5 h-5 text-red-500" />
          ) : (
            <AiOutlineHeart className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>

      {/* Información del producto */}
      <div className="p-4">
        <div className="mb-2">
          <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-1">{product.category}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-center mb-3">
          {[...Array(5)].map((_, index) => (
            <AiFillStar
              key={index}
              className={`w-4 h-4 ${
                index < product.rating
                  ? 'text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">
            ({product.reviews})
          </span>
        </div>

        {/* Precio y botón de compra */}
        <div className="flex items-center justify-between">
          <div>
            {product.discount ? (
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-gray-900">
                  ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  ${product.price}
                </span>
              </div>
            ) : (
              <span className="text-xl font-bold text-gray-900">
                ${product.price}
              </span>
            )}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700"
          >
            <BsCart2 className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;