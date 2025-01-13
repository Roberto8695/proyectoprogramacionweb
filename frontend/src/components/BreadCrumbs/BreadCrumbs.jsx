import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiChevronRight, HiHome } from 'react-icons/hi';

const BreadCrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Animación para cada elemento
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <nav className="bg-gradient-to-r from-purple-50 to-pink-50 py-4 px-4 md:px-8">
      <motion.div 
        initial="hidden"
        animate="visible"
        className="container mx-auto"
      >
        <ol className="flex flex-wrap items-center">
          <motion.li 
            variants={itemVariants}
            className="flex items-center"
          >
            <Link 
              to="/"
              className="flex items-center text-purple-600 hover:text-purple-800 transition-colors"
            >
              <HiHome className="w-5 h-5" />
              <span className="ml-1 hidden sm:inline">Inicio</span>
            </Link>
          </motion.li>

          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;

            return (
              <motion.li 
                key={name}
                variants={itemVariants}
                className="flex items-center"
              >
                <HiChevronRight className="mx-2 text-gray-400" />
                {isLast ? (
                  <span className="font-medium text-gray-800 capitalize">
                    {name.replace(/-/g, ' ')}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-purple-600 hover:text-purple-800 transition-colors capitalize"
                  >
                    {name.replace(/-/g, ' ')}
                  </Link>
                )}
              </motion.li>
            );
          })}
        </ol>

        {/* Indicator de progreso */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          className="h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mt-2"
        />
      </motion.div>
    </nav>
  );
};

export default BreadCrumbs;