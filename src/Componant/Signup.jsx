import { useState } from 'react';
import { Eye, EyeOff, ShoppingBag, Check } from 'lucide-react';


export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="flex flex-col lg:flex-row items-center max-w-6xl w-full bg-white shadow-md rounded-lg overflow-hidden">
        
        {/* Left: Image */}
        <div className="hidden lg:block lg:w-1/3 p-4">
          <img
            src="https://img.freepik.com/premium-photo/png-man-with-laptop-computer-sitting-fashion_53876-885931.jpg?ga=GA1.1.1296923057.1724960362&semt=ais_hybrid&w=740"
            alt="Signup Illustration"
            className="w-full h-auto object-contain rounded-md"
          />
        </div>

        {/* Right: Form */}
        <div className="w-full lg:w-2/3 px-6 py-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="flex items-center justify-center text-blue-600 font-bold text-4xl mb-4">
              <ShoppingBag className="mr-2 " />
              Zynero Store
            </div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Join thousands of happy shoppers and get access to exclusive deals
            </p>
          </div>

          <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-6 px-4 sm:px-10">
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Enter your full name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Enter your email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative mt-1">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                      required
                      placeholder="Create a strong password"
                      className="block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-3 flex items-center"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <div className="relative mt-1">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                      required
                      placeholder="Confirm your password"
                      className="block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-3 flex items-center"
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Create Account
                  </button>
                </div>
              </form>

              {/* Benefits */}
              <div className="mt-8">
                <h3 className="text-md font-semibold text-gray-800 mb-3">Why shop with us</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Free shipping over $50',
                    '30-day money back',
                    'Exclusive member discounts',
                    '24/7 customer support',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-blue-500 mr-2" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sign In Link */}
              <div className="mt-6 text-center text-sm">
                Already have an account?{' '}
                <a href="#" className="text-blue-600 hover:text-blue-500 font-medium">
                  Sign in
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
