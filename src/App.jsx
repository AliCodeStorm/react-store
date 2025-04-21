import React from 'react';
import { Route, Routes } from 'react-router-dom';

//components
import NavigationBar from './components/Header/NavigationBar';

// global components 
import { CartProvider } from "./context/CartContext"

//pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductPage from './pages/ProductPage';
import ServicesPage from './pages/ServicesPage';
import Footer from './components/Footer/Footer';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductDetails from './pages/ProductDetails';
import CategoryDetails from './pages/CategoryDetails';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from "./pages/PrivacyPolicy"
import ShippingReturns from './pages/ShippingReturns';
import CaseStudyPage from './pages/CaseStudyDetail';

function App() {

  return (

    <CartProvider>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/category/:id" element={<CategoryDetails />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/shipping" element={<ShippingReturns />} />
        <Route path="/case-studies/:slug" element={<CaseStudyPage/>} />
      </Routes>
      <Footer />
    </CartProvider>

  );
}

export default App;