import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BiBeer } from 'react-icons/bi';
import { GiHops, GiBeerBottle } from 'react-icons/gi';

const Banner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 24,
    minutes: 60,
    seconds: 60
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => ({
        ...prev,
        seconds: prev.seconds > 0 ? prev.seconds - 1 : 59
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative bg-gradient-to-r from-amber-900 to-amber-700 py-12 lg:py-16 overflow-hidden"
    >
      {/* Elementos decorativos */}
      <GiHops className="absolute top-4 left-4 text-amber-300/20 w-24 h-24 rotate-12" />
      <GiBeerBottle className="absolute bottom-4 right-4 text-amber-300/20 w-24 h-24 -rotate-12" />

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <motion.h2 
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="text-3xl md:text-4xl font-bold text-amber-100 mb-4 flex items-center justify-center lg:justify-start"
            >
              <BiBeer className="w-8 h-8 mr-2 text-amber-300" />
              ¡FESTIVAL DE CERVEZAS ARTESANALES!
            </motion.h2>
            <p className="text-xl text-amber-200/90 mb-6">
              Hasta 30% de descuento en cervezas seleccionadas
            </p>
            
            <div className="flex justify-center lg:justify-start space-x-4">
              <div className="flex flex-col items-center bg-amber-800/50 px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold text-amber-300">{timeLeft.days}</span>
                <span className="text-sm text-amber-200/80">Días</span>
              </div>
              <div className="flex flex-col items-center bg-amber-800/50 px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold text-amber-300">{timeLeft.hours}</span>
                <span className="text-sm text-amber-200/80">Horas</span>
              </div>
              <div className="flex flex-col items-center bg-amber-800/50 px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold text-amber-300">{timeLeft.minutes}</span>
                <span className="text-sm text-amber-200/80">Minutos</span>
              </div>
              <div className="flex flex-col items-center bg-amber-800/50 px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold text-amber-300">{timeLeft.seconds}</span>
                <span className="text-sm text-amber-200/80">Segundos</span>
              </div>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-500 text-amber-900 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-amber-400 transition duration-300 flex items-center"
          >
            <BiBeer className="mr-2" />
            ¡Comprar Ahora!
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default Banner;