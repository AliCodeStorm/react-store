import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import products from '../data/Products'; // Make sure this is your product data source

function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate(); // ✅ React Router navigate
  const { addToCart } = useCart();

  const [product, setProduct] = useState(location.state || null);
  const [selectedImage, setSelectedImage] = useState(null);

  // If product not passed via state, try to find it using ID
  useEffect(() => {
    if (!location.state) {
      const found = products.find((p) => p.id.toString() === id);
      if (found) setProduct(found);
    }
  }, [id, location.state]);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
    }
  }, [product]);

  if (!product) return <div className="text-center py-10">Product not found</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded-lg shadow-md">
        {/* Main Image */}
        <div>
          <img
            src={selectedImage}
            alt={product.name}
            className="w-full h-[400px] object-cover rounded-lg"
          />
          {/* Thumbnails */}
          {product.images?.length > 1 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`preview-${i}`}
                  className="w-20 h-20 object-cover rounded border hover:ring-2 cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-500">{product.category}</p>
          <p className="text-2xl text-green-600 font-bold">${product.price}</p>
          <p className="text-gray-700">{product.description}</p>

          <div className="space-x-4">
            <button
              onClick={() => addToCart(product)}
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-medium transition"
            >
              Add to Cart
            </button>

            <button
              onClick={() => {
                addToCart(product); 
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

export default ProductDetails;
