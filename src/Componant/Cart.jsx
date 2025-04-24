import { useState } from 'react';
import { ShoppingCart, Trash2, X, Plus, Minus, CreditCard } from 'lucide-react';

// Sample cart data - replace with your actual data source
const initialCartItems = [
  { id: 1, name: 'Premium Headphones', price: 129.99, image: '/api/placeholder/80/80', quantity: 1 },
  { id: 2, name: 'Wireless Keyboard', price: 59.99, image: '/api/placeholder/80/80', quantity: 2 },
  { id: 3, name: 'Smart Watch', price: 199.99, image: '/api/placeholder/80/80', quantity: 1 }
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [isCartOpen, setIsCartOpen] = useState(true);

  // Calculate cart totals
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax rate
  const shipping = subtotal > 100 ? 0 : 10; // Free shipping over $100
  const total = subtotal + tax + shipping;

  // Cart item manipulation functions
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Toggle cart visibility
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="font-sans">
      {/* Cart Button */}
      <button 
        onClick={toggleCart}
        className="fixed top-4 right-4 bg-blue-600 text-white p-2 rounded-full flex items-center justify-center shadow-lg"
      >
        <ShoppingCart size={24} />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </button>

      {/* Cart Panel */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
          <div className="bg-white w-full max-w-md h-full flex flex-col shadow-xl">
            {/* Cart Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-bold flex items-center">
                <ShoppingCart className="mr-2" size={24} />
                Your Cart ({itemCount} {itemCount === 1 ? 'item' : 'items'})
              </h2>
              <button onClick={toggleCart} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-grow overflow-y-auto p-4">
              {cartItems.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">Your cart is empty</p>
                  <button 
                    onClick={toggleCart}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex border rounded p-2 relative">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                      <div className="ml-4 flex-grow">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-gray-600">${item.price.toFixed(2)}</p>
                        <div className="flex items-center mt-2">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="bg-gray-200 p-1 rounded"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="bg-gray-200 p-1 rounded"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 absolute top-2 right-2"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                  
                  <button 
                    onClick={clearCart}
                    className="text-red-500 hover:text-red-700 text-sm flex items-center"
                  >
                    <Trash2 size={16} className="mr-1" />
                    Clear cart
                  </button>
                </div>
              )}
            </div>

            {/* Cart Summary */}
            {cartItems.length > 0 && (
              <div className="border-t p-4 bg-gray-50">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (8%):</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button className="w-full bg-green-600 text-white py-3 rounded mt-4 flex items-center justify-center font-medium hover:bg-green-700">
                  <CreditCard className="mr-2" size={20} />
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}