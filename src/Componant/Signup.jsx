import { useState } from 'react';
import { Eye, EyeOff, ShoppingBag, Check } from 'lucide-react';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      // Since we can't use react-hot-toast, we'll handle success state internally
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-10 relative overflow-hidden bg-gradient-to-br from-blue-900 to-purple-900">
      {/* Simple confetti alternative for success state */}
      {success && (
        <div className="fixed inset-0 pointer-events-none flex items-center justify-center">
          <div className="text-center bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl z-50 max-w-sm mx-auto">
            <div className="text-green-500 text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-gray-800">Success!</h3>
            <p className="text-gray-600 mt-2">Your account has been created successfully!</p>
          </div>
        </div>
      )}

      <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
        {/* Image Section - Hidden on mobile, visible on lg screens */}
        <div className="hidden lg:block lg:w-1/2 h-full">
          <div className="h-full bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center">
            <div className="p-8 text-center">
              <ShoppingBag className="h-20 w-20 mx-auto text-white mb-6" />
              <h2 className="text-4xl font-bold text-white mb-4">Welcome to Zynero</h2>
              <p className="text-white/90 text-lg">Join our community of shoppers and unlock exclusive benefits today!</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10">
          {/* Mobile Logo - Only visible on mobile/tablet */}
          <div className="flex justify-center items-center mb-6 text-white font-extrabold text-3xl lg:hidden">
            <ShoppingBag className="mr-2" />
            <span>Zynero Store</span>
          </div>

          <h2 className="text-2xl sm:text-3xl text-white text-center font-bold mb-2">Create Your Account</h2>
          <p className="text-center text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">Unlock premium benefits and deals!</p>

          <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
            <div>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Full Name"
                className="w-full px-4 sm:px-5 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none backdrop-blur-sm"
              />
            </div>

            <div>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className="w-full px-4 sm:px-5 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none backdrop-blur-sm"
              />
            </div>

            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="Password"
                className="w-full px-4 sm:px-5 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none backdrop-blur-sm"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 sm:right-4 flex items-center text-gray-300"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>

            <div className="relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                required
                placeholder="Confirm Password"
                className="w-full px-4 sm:px-5 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none backdrop-blur-sm"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 sm:right-4 flex items-center text-gray-300"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              {loading ? (
                <div className="flex items-center space-x-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                  </svg>
                  <span>Creating...</span>
                </div>
              ) : (
                'Create Account'
              )}
            </button>
          </form>

          {/* Benefits - Responsive grid */}
          <div className="mt-6 sm:mt-8">
            <h3 className="text-white text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-center">Why Join Us?</h3>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3 text-gray-200 text-xs sm:text-sm">
              {[
                'Free shipping over $50',
                '30-day money back',
                'Exclusive member discounts',
                '24/7 customer support',
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-300 mr-1 sm:mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Login Link */}
          <p className="text-center text-gray-300 text-xs sm:text-sm mt-5 sm:mt-6">
            Already have an account?{' '}
            <a href="#" className="text-pink-300 hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}