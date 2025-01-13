import React from 'react';
import { motion } from 'framer-motion';
import { BiBeer } from 'react-icons/bi';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="../images/beer-poster.jpg" // Añadir imagen de respaldo
        >
          <source src="../video/bg-beer.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white w-full max-w-4xl mx-auto"
        >
          <BiBeer className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-amber-400" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Descubre el Arte de la Cerveza
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-amber-100 px-4">
            Las mejores cervezas artesanales seleccionadas para ti
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-amber-500 text-black px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition duration-300"
            >
              Ver Catálogo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-transparent border-2 border-amber-500 text-amber-500 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-amber-500/10 transition duration-300"
            >
              Más Información
            </motion.button>
          </div>

          {/* Features Grid */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4">
            {[
              {
                title: "Artesanal",
                description: "Cervezas elaboradas con pasión y tradición"
              },
              {
                title: "Envío Rápido",
                description: "Entrega a temperatura controlada"
              },
              {
                title: "Calidad Premium",
                description: "Selección de las mejores marcas"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-4 sm:p-6 bg-black/30 rounded-lg backdrop-blur-sm border border-amber-500/20"
              >
                <h3 className="text-amber-400 font-bold text-lg sm:text-xl mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;