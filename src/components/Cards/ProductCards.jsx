import React from 'react'

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover rounded-xl mb-4" 
            />
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{product.category}</p>
            <div className="text-teal-600 font-bold text-xl mb-4">${product.price}</div>
            
            <button className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition duration-200">
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
