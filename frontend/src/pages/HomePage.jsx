// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import FeaturedCategories from '../components/FeaturedCategories/FeaturedCategories';
import SoldProducts from '../components/SoldProducts/SoldProducts';
import StoreBenefits from '../components/StoreBenefits/StoreBenefits';
import Banner from '../components/Banners/Banner';
import RecomendProducts from '../components/RecomendProducts/RecomendProducts';


const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedCategories />
      <SoldProducts />
      <StoreBenefits />
      <Banner />
      <RecomendProducts />

    </main>
  );
};

export default HomePage;
