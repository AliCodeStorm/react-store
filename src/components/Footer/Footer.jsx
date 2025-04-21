import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [tooltip, setTooltip] = useState('');
  
  const handleMouseEnter = (platform) => {
    setTooltip(platform);
  };

  const handleMouseLeave = () => {
    setTooltip('');
  };

  return (

    <div>

      <footer className="bg-white rounded-lg shadow sm:flex sm:items-center sm:justify-between p-4 sm:p-6 xl:p-8 mt-8">
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
          <div className="sm:w-1/3 mb-6 sm:mb-0 text-center sm:text-left">
            <p className="text-sm text-gray-600">
              &copy; 2019-2022 <a href="https://flowbite.com/" className="hover:underline text-gray-800" target="_blank" rel="noopener noreferrer">Flowbite.com</a>. All rights reserved.
            </p>
          </div>

          <div className="relative flex justify-center items-center space-x-4 mb-5 sm:mb-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => handleMouseEnter('facebook')}
              onMouseLeave={handleMouseLeave}
              className="inline-flex justify-center p-2 text-black rounded-lg cursor-pointer hover:bg-gray-100"
            >
              <i className="fab fa-facebook-f w-4 h-4"></i>
              <span className="sr-only">Facebook</span>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => handleMouseEnter('twitter')}
              onMouseLeave={handleMouseLeave}
              className="inline-flex justify-center p-2 text-black rounded-lg cursor-pointer hover:bg-gray-100"
            >
              <i className="fab fa-twitter w-4 h-4"></i>
              <span className="sr-only">Twitter</span>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => handleMouseEnter('github')}
              onMouseLeave={handleMouseLeave}
              className="inline-flex justify-center p-2 text-black rounded-lg cursor-pointer hover:bg-gray-100"
            >
              <i className="fab fa-github w-4 h-4"></i>
              <span className="sr-only">GitHub</span>
            </a>

            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => handleMouseEnter('dribbble')}
              onMouseLeave={handleMouseLeave}
              className="inline-flex justify-center p-2 text-black rounded-lg cursor-pointer hover:bg-gray-100"
            >
              <i className="fab fa-dribbble w-4 h-4"></i>
              <span className="sr-only">Dribbble</span>
            </a>

            {tooltip && (
              <div
                role="tooltip"
                className="absolute top-10 -left-12 z-10 py-2 px-3 text-sm font-medium text-white bg-gray-800 rounded-lg shadow-sm opacity-100 transition-opacity duration-300"
                style={{ transform: 'translateX(-50%)' }}
              >
                {tooltip === 'facebook' && 'Like us on Facebook'}
                {tooltip === 'twitter' && 'Follow us on Twitter'}
                {tooltip === 'github' && 'Star us on GitHub'}
                {tooltip === 'dribbble' && 'Follow us on Dribbble'}
              </div>
            )}
          </div>

        </div>

        <nav className="flex justify-center space-x-8 mt-4 sm:mt-0 mb-6">
          <Link to="/" className="text-gray-800 hover:underline">Home</Link>
          <Link to="/products" className="text-gray-800 hover:underline">Shop</Link>
          <Link to="/services" className="text-gray-800 hover:underline">Services</Link>
          <Link to="/about" className="text-gray-800 hover:underline">About Us</Link>
          <Link to="/contact" className="text-gray-800 hover:underline">Contact Us</Link>
        </nav>
        
        <div className="flex justify-center space-x-7 ml-2">
          <Link to="/terms" className="text-gray-800 hover:underline">Terms & Conditions</Link>
          <Link to="/privacy" className="text-gray-800 hover:underline">Privacy Policy</Link>
          <Link to="/shipping" className="text-gray-800 hover:underline">Shipping & Returns</Link>
        </div>

      </footer>

    </div>

  );

}
