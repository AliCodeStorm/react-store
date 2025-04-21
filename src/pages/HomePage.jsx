import React from 'react';
import Carousels from '../components/Carousels/Carousels';
import SpecialOffersCountdown from '../components/Offers/SpecialOffersCountdown';
import FeatureProducts from '../components/Product/FeatureProducts';
import PromotionalBanners from '../components/Banners/PromotionalBanners';
import Category from '../components/Product/Category';
import NewsletterSignup from '../components/Offers/NewsletterSignup';

const HomePage = () => {
  return (

    <div>
      
      <Carousels />
      <SpecialOffersCountdown />
      <FeatureProducts />
      <PromotionalBanners />
      <Category />
      <NewsletterSignup />

    </div>

  );

};

export default HomePage;
