import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {  BiShoppingBag } from 'react-icons/bi';
import { GiHops, GiBeerBottle } from 'react-icons/gi';
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs';

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const product = {
    name: "IPA Artesanal Premium",
    price: 29.99,
    discount: 10,
    images: [
      "https://example.com/beer1.jpg",
      "https://example.com/beer2.jpg",
      "https://example.com/beer3.jpg"
    ],
    rating: 4.8,
    reviews: 156,
    stock: 24,
    description: "Una IPA artesanal con un perfil aromático único...",
    characteristics: {
      style: "India Pale Ale (IPA)",
      abv: "6.5%",
      ibu: "65",
      origen: "Artesanal Local",
      temperatura: "6-8°C",
      volumen: "355ml"
    }
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <BreadCrumbs />
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Galería */}
            <div className="space-y-4">
              <motion.div className="rounded-lg overflow-hidden bg-amber-100">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className={`aspect-square rounded-lg overflow-hidden cursor-pointer ${
                      selectedImage === index ? 'ring-2 ring-amber-600' : ''
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Información */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <AiFillStar
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-amber-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-gray-600">
                      ({product.reviews} reseñas)
                    </span>
                  </div>
                </div>
              </div>

              {/* Precio y Acciones */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  {product.discount ? (
                    <>
                      <span className="text-3xl font-bold text-amber-900">
                        ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                      </span>
                      <span className="text-xl text-gray-500 line-through">
                        ${product.price}
                      </span>
                      <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-sm">
                        -{product.discount}%
                      </span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold text-amber-900">
                      ${product.price}
                    </span>
                  )}
                </div>

                {/* Características Principales */}
                <div className="grid grid-cols-2 gap-4 p-4 bg-amber-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <GiBeerBottle className="w-6 h-6 text-amber-600" />
                    <div>
                      <p className="text-sm text-gray-600">Alcohol</p>
                      <p className="font-semibold">{product.characteristics.abv}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <GiHops className="w-6 h-6 text-amber-600" />
                    <div>
                      <p className="text-sm text-gray-600">IBU</p>
                      <p className="font-semibold">{product.characteristics.ibu}</p>
                    </div>
                  </div>
                </div>

                {/* Cantidad */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded-lg">
                    <button
                      className="px-4 py-2 hover:bg-amber-50"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </button>
                    <span className="px-4 py-2">{quantity}</span>
                    <button
                      className="px-4 py-2 hover:bg-amber-50"
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    >
                      +
                    </button>
                  </div>
                  <span className="text-gray-600">
                    {product.stock} unidades disponibles
                  </span>
                </div>

                {/* Botones */}
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 flex items-center justify-center"
                  >
                    <BiShoppingBag className="w-5 h-5 mr-2" />
                    Agregar al carrito
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 border border-amber-600 rounded-lg hover:bg-amber-50"
                  >
                    <AiOutlineHeart className="w-6 h-6 text-amber-600" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-12">
            <div className="border-b border-amber-200">
              <div className="flex gap-8">
                {['description', 'characteristics', 'reviews'].map((tab) => (
                  <button
                    key={tab}
                    className={`py-4 capitalize ${
                      activeTab === tab
                        ? 'border-b-2 border-amber-600 text-amber-600'
                        : 'text-gray-500'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="py-6">
              {activeTab === 'description' && (
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              )}

              {activeTab === 'characteristics' && (
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(product.characteristics).map(([key, value]) => (
                    <div key={key} className="border-b pb-4">
                      <dt className="font-medium text-gray-900 capitalize">{key}</dt>
                      <dd className="mt-1 text-gray-600">{value}</dd>
                    </div>
                  ))}
                </dl>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  {/* Aquí irían las reseñas */}
                </div>
              )}
            </div>
          </div>

          {/* Aviso Legal */}
          <div className="mt-8 p-4 bg-amber-50 rounded-lg text-sm text-amber-800">
            El consumo de bebidas alcohólicas es exclusivo para mayores de 18 años. 
            Bebe con moderación.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;