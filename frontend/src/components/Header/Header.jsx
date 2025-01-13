import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Logo = () => (
  <div className="flex items-center">
    <h1 className="text-xl font-bold">Logo</h1>
  </div>
);

const NavLinks = ({ isMobile }) => (
  <nav className={`${isMobile ? 'flex flex-col space-y-4' : 'hidden md:flex ml-6'}`}>
    <ul className={`${isMobile ? 'flex flex-col space-y-4' : 'flex space-x-4'}`}>
      <li><a href="/" className="hover:text-purple-600 transition-colors">Inicio</a></li>
      <li><a href="/productos" className="hover:text-purple-600 transition-colors">Productos</a></li>
      <li><a href="/contacto" className="hover:text-purple-600 transition-colors">Contacto</a></li>
    </ul>
  </nav>
);

const SearchBar = () => (
  <div className="mx-4 relative">
    <input 
      type="search" 
      placeholder="Buscar..." 
      className="w-full p-2 pl-8 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600"
    />
    <span className="absolute left-3 top-2.5">🔍</span>
  </div>
);

const CartIcon = () => (
  <div className="cursor-pointer hover:text-purple-600 transition-colors">
    <span className="text-xl">🛒</span>
  </div>
);

const MenuMobile = ({ isOpen, toggleMenu }) => (
  <button 
    onClick={toggleMenu}
    className="md:hidden cursor-pointer z-50"
    aria-label="Toggle menu"
  >
    <span className="text-2xl">{isOpen ? '✕' : '☰'}</span>
  </button>
);

const MobileMenu = ({ isOpen, setIsOpen }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black"
          onClick={() => setIsOpen(false)}
        />
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween' }}
          className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 z-40"
        >
          <NavLinks isMobile={true} />
          <div className="mt-6">
            <SearchBar />
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <NavLinks isMobile={false} />
          <div className="hidden md:flex items-center">
            <SearchBar />
            <CartIcon />
          </div>
          <MenuMobile isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;