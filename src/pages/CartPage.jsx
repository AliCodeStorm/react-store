import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function CartPage() {
    const { cart, removeFromCart, clearCart } = useCart();

    return (

        <div className="py-10 px-4 lg:px-8 bg-gray-50 min-h-screen">
            
            <h2 className="text-3xl font-bold text-center mb-6">Your Cart</h2>

            {cart.length === 0 ? (
                <div className="text-center">Your cart is empty.</div>
            ) : (
                <div>

                    <div className="space-y-6">

                        {cart.map((product) => (
                            <div key={product.id} className="flex items-center justify-between p-4 bg-white shadow-lg rounded-lg">

                                <div className="flex items-center">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-24 h-24 object-cover rounded-lg mr-4"
                                    />
                                    <div>
                                        <h3 className="font-semibold">{product.name}</h3>
                                        {product.description && (
                                            <p className="text-sm text-gray-500">{product.description}</p>
                                        )}
                                        <p className="text-sm text-gray-600">{product.category}</p>
                                        <p className="text-lg font-bold">${product.price?.toFixed(2)}</p>
                                        <p className="text-sm text-gray-700">Qty: {product.quantity}</p>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        onClick={() => removeFromCart(product.id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Remove
                                    </button>
                                </div>

                            </div>
                        ))}

                    </div>

                    <div className="mt-6 flex justify-between items-center">
                        <button
                            onClick={clearCart}
                            className="py-2 px-4 bg-red-500 text-white font-bold rounded"
                        >
                            Clear Cart
                        </button>
                        <Link
                            to="/checkout"
                            className="py-2 px-4 bg-teal-500 text-white font-bold rounded"
                        >
                            Proceed to Checkout
                        </Link>
                    </div>

                </div>
            )}

        </div>
    );
}

export default CartPage;
