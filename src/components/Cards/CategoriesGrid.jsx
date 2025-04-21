import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function CategoryGrid({ categories }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleCategoryClick = (category) => {
    navigate(`/category/${category.id}`, { state: category });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">

      {categories.map((category) => (

        <div key={category.id} className="bg-white p-4 shadow-sm rounded-lg">
    
          <div onClick={() => handleCategoryClick(category)} className="cursor-pointer">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-300 hover:scale-105"
            />
          </div>

          <h3
            className="text-lg font-semibold mb-1 text-gray-800 cursor-pointer hover:underline"
            onClick={() => handleCategoryClick(category)}
          >
            {category.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-1">
            {category.description.length > 70
              ? `${category.description.slice(0, 70)}...`
              : category.description}
          </p>

          {/* Price */}
          <p className="text-xl font-bold text-green-600 mt-2 mb-4">
            ${category.price}
          </p>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => handleCategoryClick(category)}
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
            >
              View Details
            </button>
            <button
              onClick={() => addToCart(category)}
              className="w-full py-2 bg-teal-500 text-white font-semibold rounded hover:bg-teal-600 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>

      ))}

    </div>
  );
}

export default CategoryGrid;
