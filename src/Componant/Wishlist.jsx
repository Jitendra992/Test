import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    { id: 1, name: 'Noise Cancelling Headphones', purchased: false },
    { id: 2, name: 'Kindle Paperwhite', purchased: true },
  ]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim()) {
      setWishlist([
        ...wishlist,
        { id: Date.now(), name: newItem.trim(), purchased: false },
      ]);
      setNewItem('');
    }
  };

  const togglePurchased = (id) => {
    setWishlist(
      wishlist.map((item) =>
        item.id === id ? { ...item, purchased: !item.purchased } : item
      )
    );
  };

  const deleteItem = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div className="h-full w-full ">
      <div className="max-w-xl mx-auto mt-10 backdrop-blur-lg bg-white/60 shadow-xl rounded-2xl p-6">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">🌟 My Wishlist</h1>

        {/* Add Item Input */}
        <div className="flex gap-3 mb-6">
          <input
            className="flex-1 bg-white/70 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            placeholder="Add something magical..."
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button
            onClick={addItem}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-4 py-2 rounded-xl flex items-center shadow transition"
          >
            <Plus className="w-4 h-4 mr-1" />
            Add
          </button>
        </div>

        {/* Wishlist Items */}
        <div className="space-y-4">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white/70 backdrop-blur-sm border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={item.purchased}
                  onChange={() => togglePurchased(item.id)}
                  className="accent-purple-500 w-5 h-5 transition"
                />
                <span
                  className={`text-lg font-medium ${
                    item.purchased ? 'line-through text-gray-400' : 'text-gray-800'
                  }`}
                >
                  {item.name}
                </span>
              </div>
              <button
                onClick={() => deleteItem(item?.id)}
                className="text-red-500 hover:text-red-600 transition"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
