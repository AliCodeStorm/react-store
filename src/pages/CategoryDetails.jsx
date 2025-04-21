import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function CategoryDetails() {

  const { state: category } = useLocation();
  const { addToCart } = useCart();
  const navigate = useNavigate(); 

  const [selectedImage, setSelectedImage] = useState(category?.image);

  if (!category) return <div className="text-center py-10">Category not found</div>;

  const handlePreviewClick = (image) => {
    setSelectedImage(image);
  };

  return (

    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded-lg shadow-md">
        {/* Main Image and Thumbnails */}
        <div>
          <img
            src={selectedImage}
            alt={category.name}
            className="w-full h-[400px] object-cover rounded-lg"
          />

          {category.images && category.images.length > 1 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {category.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`preview-${i}`}
                  className="w-20 h-20 object-cover rounded border hover:ring-2 cursor-pointer"
                  onClick={() => handlePreviewClick(img)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{category.name}</h1>
          <p className="text-gray-500">{category.slug}</p>
          <p className="text-2xl text-green-600 font-bold">
            ${category.price || 49.99}
          </p>
          <p className="text-gray-700">{category.description}</p>

          <div className="space-x-4">
            <button
              onClick={() => addToCart(category)}
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-medium transition"
            >
              Add to Cart
            </button>

            <button
              onClick={() => {
                addToCart(category); 
                navigate('/checkout'); 
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition"
            >
              Buy Now
            </button>
          </div>

        </div>

      </div>

    </div>

  );
}

export default CategoryDetails;
