import React from "react";
import { useCart } from "../context/CartContext";

const CheckoutPage = () => {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg mt-10 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>

      <form className="space-y-4">
        {/* User Info */}
        <div>
          <label className="block font-medium mb-1">
            <i className="fas fa-user mr-2 text-gray-600"></i>
            Full Name
          </label>
          <input type="text" className="w-full border p-2 rounded" placeholder="John Doe" />
        </div>

        <div>
          <label className="block font-medium mb-1">
            <i className="fas fa-truck mr-2 text-gray-600"></i>
            Shipping Address
          </label>
          <input type="text" className="w-full border p-2 rounded" placeholder="123 Main St" />
        </div>

        <div>
          <label className="block font-medium mb-1">
            <i className="fas fa-envelope mr-2 text-gray-600"></i>
            Email
          </label>
          <input type="email" className="w-full border p-2 rounded" placeholder="email@example.com" />
        </div>

        {/* Order Summary */}
        <div className="mt-6">
          <h3 className="font-bold mb-2 flex items-center">
            <i className="fas fa-receipt mr-2 text-gray-600"></i>
            Order Summary
          </h3>

          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center mb-2">
                  <div>
                    <p className="font-medium">
                      {item.name} x {item.quantity}
                    </p>
                    <p className="text-sm text-gray-500">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    type="button"
                    className="text-red-500 hover:text-red-700 text-sm"
                    title="Remove item"
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
              ))}

              <hr className="my-2" />
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </>
          )}
        </div>

        {/* Place Order Button */}
        {cart.length > 0 && (

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded mt-4 flex justify-center items-center gap-2 hover:bg-blue-700 transition"
          >
            <i className="fas fa-credit-card"></i>
            Place Order
          </button>
          
        )}
      </form>
    </div>
  );
};

export default CheckoutPage;
