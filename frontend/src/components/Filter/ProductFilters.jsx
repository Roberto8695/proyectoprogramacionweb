import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsFilter } from 'react-icons/bs';

const ProductFilters = ({ onFilterChange, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [
    { id: 1, name: 'Ropa', count: 120 },
    { id: 2, name: 'Calzado', count: 85 },
    { id: 3, name: 'Accesorios', count: 45 },
    { id: 4, name: 'Deportes', count: 30 }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Más recientes' },
    { value: 'price-low', label: 'Precio: Menor a Mayor' },
    { value: 'price-high', label: 'Precio: Mayor a Menor' },
    { value: 'popular', label: 'Más populares' }
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      {/* Mobile Filter Toggle */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-2 bg-gray-100 rounded-lg"
        >
          <span className="flex items-center">
            <BsFilter className="mr-2" />
            Filtros
          </span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
          >
            ▼
          </motion.span>
        </button>
      </div>

      {/* Filters Content */}
      <div className={`${!isOpen && 'hidden md:block'}`}>
        {/* Price Range */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Precio</h3>
          <div className="space-y-2">
            <div className="flex gap-4">
              <input
                type="number"
                placeholder="Min"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="w-full px-3 py-2 border rounded-lg"
              />
              <input
                type="number"
                placeholder="Max"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              className="w-full"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Categorías</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category.id} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => {
                    const newSelected = selectedCategories.includes(category.id)
                      ? selectedCategories.filter(id => id !== category.id)
                      : [...selectedCategories, category.id];
                    setSelectedCategories(newSelected);
                  }}
                  className="w-4 h-4 text-purple-600"
                />
                <span className="ml-2 flex-1">{category.name}</span>
                <span className="text-gray-500 text-sm">({category.count})</span>
              </label>
            ))}
          </div>
        </div>

        {/* Sort Options */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Ordenar por</h3>
          <select
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Apply Filters Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
          onClick={() => onFilterChange({ priceRange, selectedCategories })}
        >
          Aplicar Filtros
        </motion.button>
      </div>
    </div>
  );
};

export default ProductFilters;