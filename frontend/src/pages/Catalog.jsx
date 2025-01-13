import React, {  } from 'react';
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs';
import ProductFilters from '../components/Filter/ProductFilters';
import ProductList from '../components/ProductList/ProductList';
const Catalog = () => {
  
    return (
        <div className="min-h-screen bg-gray-50">
            <BreadCrumbs />
  
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar con filtros */}
                    <aside className="md:w-1/4 flex-shrink-0">
            <ProductFilters 
              onFilterChange={(filters) => console.log('Filtros:', filters)}
              onSortChange={(sort) => console.log('Ordenar:', sort)}
            />
          </aside>

                    {/* Contenido principal */}
                    <div className="md:w-3/4">
                        <h1 className="text-3xl font-bold mb-8">Catálogo</h1>
                        
                        
                           <ProductList />
                       

                        <div className="mt-8 flex justify-center">
                            {/* Implementar paginación */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;