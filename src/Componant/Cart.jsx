import { useState } from 'react';
import { Trash2, Plus, Minus, ShoppingCart, X } from 'lucide-react';
import { FaOpencart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import Payment from './Payment';

export default function ShoppingCartUI() {
  const [isOpen, setIsOpen] = useState(true);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 129.99,
      quantity: 1,
      image: "/api/placeholder/80/80"
    },
    {
      id: 2,
      name: "Organic Cotton T-Shirt",
      price: 34.50,
      quantity: 2,
      image: "/api/placeholder/80/80"
    },
    {
      id: 3,
      name: "Smart Fitness Watch",
      price: 89.99,
      quantity: 1,
      image: "/api/placeholder/80/80"
    }
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };
  const navigate = useNavigate();


  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 4.99;
  const tax = subtotal * 0.07;
  const total = subtotal + shipping + tax;

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  if (!isOpen) {
    return (
      <button
        onClick={toggleCart}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition hover:scale-105"
      >
        <ShoppingCart className="h-6 w-6" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
          {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        </span>
      </button>
    );
  }

  return (
    <div className="fixed inset-y-0 right-0 max-w-md w-full bg-white/80 backdrop-blur-lg shadow-2xl rounded-l-2xl overflow-hidden z-50 mt-52">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-white/60 shadow-sm">
        <div className="flex items-center gap-3">
          <FaOpencart className="text-orange-500 text-2xl" />
          <h2 className="text-2xl font-bold text-blue-600">Zynero Cart</h2>
        </div>
        <button onClick={toggleCart} className="text-gray-600 hover:text-red-500">
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Cart Items */}
      <div className="flex-grow overflow-y-auto p-4">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <ShoppingCart className="h-16 w-16 mb-4" />
            <p className="text-xl">Your cart is empty</p>
            <button
              onClick={toggleCart}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <ul className="space-y-6">
            {cartItems.map((item) => (
              <li key={item.id} className="flex gap-4 bg-white/50 rounded-xl p-4 shadow hover:shadow-md transition">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-md object-cover border border-gray-200"
                />
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-500">${item.price.toFixed(2)} each</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-2 py-1 bg-gray-100 hover:bg-gray-200"
                      >
                        <Minus className="h-4 w-4 text-gray-600" />
                      </button>
                      <span className="px-3">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="px-2 py-1 bg-gray-100 hover:bg-gray-200"
                      >
                        <Plus className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="font-medium text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="border-t bg-white/60 p-4 shadow-inner">
          <div className="text-sm text-gray-700 space-y-1">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p>${shipping.toFixed(2)}</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Tax</p>
              <p>${tax.toFixed(2)}</p>
            </div>
            <div className="flex justify-between font-semibold text-base">
              <p>Total</p>
              <p>${total.toFixed(2)}</p>
            </div>
          </div>
          <button onClick={() => navigate("/payment")}  className="mt-4 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl hover:opacity-90 transition shadow">
            Checkout Securely
          </button>
          <button
            onClick={toggleCart}
            className="mt-3 w-full text-gray-700 bg-gray-100 hover:bg-gray-200 py-3 px-4 rounded-xl transition"
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
}
