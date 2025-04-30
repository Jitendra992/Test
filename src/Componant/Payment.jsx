import React from "react";

export default function Payment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 overflow-hidden">
    
        <div className="md:col-span-2 p-8">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Signed in</h2>
          <p className="text-gray-600 mb-8">as <strong>GrandJury</strong>. <a href="#" className="text-blue-500 underline">Not you? Log out</a></p>

          <h2 className="text-xl font-semibold text-blue-700 mb-4">Payment</h2>

          <div className="mb-6">
            <label className="inline-flex items-center">
              <input type="radio" name="payment" className="form-radio text-blue-600" checked readOnly />
              <span className="ml-2 font-semibold">Credit Card</span>
            </label>
            <div className="mt-4 space-y-4">
              <input type="text" placeholder="Name on card" className="w-full p-3 border rounded-md" />
              <input type="text" placeholder="Card number" className="w-full p-3 border rounded-md" />
              <div className="grid grid-cols-3 gap-4">
                <input type="text" placeholder="Exp" className="p-3 border rounded-md" />
                <input type="text" placeholder="CVV" className="p-3 border rounded-md" />
                <input type="text" placeholder="Zip" className="p-3 border rounded-md" />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="inline-flex items-center">
              <input type="radio" name="payment" className="form-radio text-blue-600" />
              <span className="ml-2 font-semibold">PayPal</span>
            </label>
            <img src="https://www.paypalobjects.com/webstatic/icon/pp258.png" alt="PayPal" className="mt-2 h-8" />
          </div>

          <h2 className="text-xl font-semibold text-blue-700 mb-2">Add-ons</h2>
        </div>

        {/* Right Side */}
        <div className="bg-gray-50 p-8 border-l">
          <div className="flex justify-between mb-4">
            <button className="text-blue-600 font-semibold">Yearly</button>
            <button className="text-gray-400 font-semibold">Monthly</button>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Plan:</span><span className="font-semibold">PRO</span>
            </div>
            <div className="flex justify-between">
              <span>Infinity remote app</span><span>📱🖥️</span>
            </div>
            <div className="flex justify-between">
              <span>Vote tokens/month</span><span>5</span>
            </div>
            <div className="flex justify-between">
              <span>WePoints multiplier</span><span>2x</span>
            </div>
            <div className="flex justify-between">
              <span>WePoints bonus</span><span>+10,000</span>
            </div>
          </div>

          <div className="mt-8 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Regular Price</span><span className="line-through">$7.99</span>
            </div>
            <div className="flex justify-between text-sm text-green-600 font-semibold">
              <span>Discounted Price</span><span>$5.99</span>
            </div>
            <div className="text-sm text-blue-500">+ Promo Code</div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span><span>$5.99</span>
            </div>
          </div>

          <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl shadow-lg font-semibold">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
