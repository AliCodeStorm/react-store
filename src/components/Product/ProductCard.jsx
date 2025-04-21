import React from 'react'

function ProductCard({ product }) {
    
    return (
        <div className="bg-white p-4 rounded-2xl shadow hover:shadow-md transition flex flex-col justify-between">

            <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-xl mb-4"
            />

            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600 mt-1 text-sm line-clamp-2">{product.description}</p>
            <p className="text-gray-800 font-medium mt-2">${product.price}</p>

            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
                <a href="/products">Shope Now</a>
            </button>

        </div>
    )
}

export default ProductCard