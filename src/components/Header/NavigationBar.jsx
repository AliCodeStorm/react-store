import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from '../modals/LoginModal';
import SignUpModal from '../modals/SignUpModal';
import { useCart } from "../../context/CartContext";

export default function NavigationBar() {
  const { cart } = useCart();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);

  const toggleLoginModal = () => setLoginModalOpen(!isLoginModalOpen);
  const toggleSignUpModal = () => setSignUpModalOpen(!isSignUpModalOpen);

  return (
    
    <>

      <div
        className={`fixed inset-0 z-50 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-white shadow-lg w-64 md:hidden`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-xl font-bold">Store</span>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <i className="fas fa-times text-lg"></i>
          </button>
        </div>
        <nav className="p-4 space-y-4">
          <Link to="/" className="block py-3 px-2 text-gray-700 hover:bg-gray-100 rounded" onClick={() => setSidebarOpen(false)}>
            <i className="fas fa-home mr-3"></i> Home
          </Link>
          <Link to="/products" className="block py-3 px-2 text-gray-700 hover:bg-gray-100 rounded" onClick={() => setSidebarOpen(false)}>
            <i className="fas fa-box-open mr-3"></i> Shop
          </Link>
          <Link to="/services" className="block py-3 px-2 text-gray-700 hover:bg-gray-100 rounded" onClick={() => setSidebarOpen(false)}>
            <i className="fas fa-concierge-bell mr-3"></i> Services
          </Link>
          <Link to="/about" className="block py-3 px-2 text-gray-700 hover:bg-gray-100 rounded" onClick={() => setSidebarOpen(false)}>
            <i className="fas fa-info-circle mr-3"></i> About Us
          </Link>
          <Link to="/contact" className="block py-3 px-2 text-gray-700 hover:bg-gray-100 rounded" onClick={() => setSidebarOpen(false)}>
            <i className="fas fa-envelope mr-3"></i> Contact Us
          </Link>
        </nav>
      </div>

      <header className="sticky top-0 z-40 w-full text-gray-700 bg-white border-b border-gray-200 shadow-sm">
        <div className="container flex flex-wrap items-center justify-between p-4 mx-auto">
          
          <button
            className="md:hidden mr-4 text-gray-500 hover:text-gray-700"
            onClick={() => setSidebarOpen(true)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>

          <Link to="/" className="flex items-center text-xl font-bold text-gray-900">
            <i className="fas fa-store mr-2"></i> Store
          </Link>

          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="font-medium hover:text-gray-900 flex items-center">
              <i className="fas fa-home mr-2"></i> Home
            </Link>
            <Link to="/products" className="font-medium hover:text-gray-900 flex items-center">
              <i className="fas fa-box-open mr-2"></i> Shop
            </Link>
            <Link to="/services" className="font-medium hover:text-gray-900 flex items-center">
              <i className="fas fa-concierge-bell mr-2"></i> Services
            </Link>
            <Link to="/about" className="font-medium hover:text-gray-900 flex items-center">
              <i className="fas fa-info-circle mr-2"></i> About
            </Link>
            <Link to="/contact" className="font-medium hover:text-gray-900 flex items-center">
              <i className="fas fa-envelope mr-2"></i> Contact Us
            </Link>
          </nav>

          <div className="flex items-center space-x-4 mt-4 md:mt-0 ml-8 sm:ml-0 ">
            <button
              onClick={toggleLoginModal}
              className="font-medium hover:text-gray-900 flex items-center transition-colors"
            >
              <i className="fas fa-user mr-2"></i> Login
            </button>
            <button
              onClick={toggleSignUpModal}
              className="px-4 py-2 text-sm font-semibold text-white bg-teal-500 hover:bg-teal-600 rounded-md shadow-sm flex items-center"
            >
              <i className="fas fa-user-plus mr-2"></i> Sign Up
            </button>
            <Link
              to="/cart"
              className="font-medium hover:text-gray-900 flex items-center relative"
            >
              <i className="fas fa-shopping-cart mr-2"></i> Cart
              <span className="ml-1 inline-flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full">
                {cart.length}
              </span>
            </Link>
          </div>
        </div>
      </header>

      <LoginModal isOpen={isLoginModalOpen} onClose={toggleLoginModal} />
      <SignUpModal isOpen={isSignUpModalOpen} onClose={toggleSignUpModal} />

    </>
  );
}
