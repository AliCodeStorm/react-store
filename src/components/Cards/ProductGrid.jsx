// src/components/ProductGrid.jsx
import React from 'react';
import { useCart } from "../../context/CartContext";
import { Link } from 'react-router-dom';

function ProductGrid({ products }) {

  const { addToCart } = useCart();

  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 shadow-sm rounded-lg">
          <Link to={`/product-details/${product.id}`} state={product}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded-md cursor-pointer"
            />
          </Link>

          <h3 className="text-lg font-semibold mb-2">
            <Link to={`/product-details/${product.id}`} state={product} className="hover:underline">
              {product.name}
            </Link>
          </h3>

          <p className="text-sm text-gray-600">{product.category}</p>
          <p className="text-xl font-bold mt-2">${product.price}</p>

          <Link to={`/product-details/${product.id}`} state={product}>
            <button className="w-full py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition duration-150 mt-2">
              View Details
            </button>
          </Link>

          <button
            onClick={() => addToCart(product)}
            className="w-full py-2 bg-teal-500 text-white font-bold rounded hover:bg-teal-600 transition duration-150 mt-2"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
