import { useQuery } from "@tanstack/react-query";
import { Datafilter } from "../services/DataFilter/Index";
import { Token } from "../config/BaseUrl";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaFilter, FaHeart } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";  // Import motion

const MannualData = () => {
  const [brandData, setBrandData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [category_id, setCategoryId] = useState();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { state } = useLocation();

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);init

  useEffect(() => {
    state?.c_id && setCategoryId(state?.c_id);
  }, [state?.c_id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [brandRes, catRes] = await Promise.all([
          axios.get(`https://app1.crazzyhub.com/api/brand-list/`, {
            headers: { Authorization: Token },
          }),
          axios.get(
            `https://app1.crazzyhub.com/api/overall-main-category-sub-category-list/`,
            {
              headers: { Authorization: Token },
            }
          ),
        ]);
        setBrandData(brandRes.data?.data || []);
        setCategoryData(catRes.data?.data?.main_category_list || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const req = { category_id };
  const { data, isLoading } = useQuery({
    queryKey: ["dataFilter", state, category_id],
    queryFn: () => Datafilter(req),
  });

  const Product = data?.data?.data?.product_list;

  const handlePress = (id, variant_id, slug) => {
    console.log("Navigate to:", id, variant_id, slug);
  };

  return (
    <div className="p-4 md:p-6 bg-gradient-to-br from-purple-200 via-blue-100 to-teal-100 min-h-screen">
      {/* Mobile Filter Button */}
      <div className="md:hidden flex justify-end mb-4">
        <button
          onClick={toggleDrawer}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-white transition"
        >
          <FaFilter className="text-yellow-500" />
        </button>
      </div>

      {/* Drawer for Mobile */}
      <Dialog open={isDrawerOpen} onClose={toggleDrawer} className="relative z-50 md:hidden">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-y-0 left-0 w-4/5 bg-white p-4 overflow-y-auto shadow-lg z-50"
        >
          <div className="flex justify-between items-center mb-4">
            <p className="text-xl font-bold text-purple-800"><FaFilter /></p>
            <button onClick={toggleDrawer} className="text-gray-500 hover:text-red-500 text-xl">
              &times;
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">Search</label>
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Category</h3>
              <div className="flex flex-wrap gap-2">
                {categoryData.map((cat, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 cursor-pointer transition"
                  >
                    {cat?.category}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-teal-700 mb-2">Brand</h3>
              <div className="flex flex-wrap gap-2">
                {brandData.map((brand, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium hover:bg-teal-200 cursor-pointer transition"
                  >
                    {brand?.Meta_Title}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-pink-700 mb-2">Price Range</h3>
              <input type="range" min="0" max="1000" step="10" className="w-full accent-pink-500" />
              <div className="flex justify-between text-sm mt-1 text-gray-600">
                <span>₹0</span>
                <span>₹1000</span>
              </div>
            </div>

            <button className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg hover:opacity-90 transition">
              Apply Filters
            </button>
          </div>
        </motion.div>
      </Dialog>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar - Desktop Only */}
        <aside className="col-span-1 hidden md:block p-5 rounded-2xl shadow-lg backdrop-blur-md bg-white/80 border border-purple-200 space-y-6">
          <h2 className="text-3xl font-bold text-purple-800">Filters 🎯</h2>

          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">Search</label>
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Category</h3>
            <div className="flex flex-wrap gap-2">
              {categoryData.map((cat, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 cursor-pointer transition"
                >
                  {cat?.category}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-teal-700 mb-2">Brand</h3>
            <div className="flex flex-wrap gap-2">
              {brandData.map((brand, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium hover:bg-teal-200 cursor-pointer transition"
                >
                  {brand?.Meta_Title}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-pink-700 mb-2">Price Range</h3>
            <input type="range" min="0" max="1000" step="10" className="w-full accent-pink-500" />
            <div className="flex justify-between text-sm mt-1 text-gray-600">
              <span>₹0</span>
              <span>₹1000</span>
            </div>
          </div>

          <button className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg hover:opacity-90 transition">
            Apply Filters
          </button>
        </aside>

        {/* Product Grid */}
        <motion.main
          className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {isLoading ? (
            <p className="col-span-full text-center text-gray-500 text-lg">Loading products...</p>
          ) : Product?.length ? (
            Product.map((item) => (
              <motion.div
                key={item?.id}
                onClick={() => handlePress(item?.id, item?.variant_id, item?.slug)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl border border-blue-100 shadow-xl p-4 cursor-pointer transition-transform transform hover:-translate-y-1 hover:shadow-2xl relative"
              >
                <img
                  src={item.image}
                  alt={item.variant_name}
                  className="w-full h-40 object-contain mb-4 rounded-lg"
                />
                <button className="absolute top-3 right-3">
                  <FaHeart className="text-gray-300 hover:text-red-500 transition text-xl" />
                </button>
                <p className="text-base font-semibold text-gray-800 line-clamp-2 mb-1">
                  {item?.variant_name}
                </p>
                <p className="text-green-600 text-xs font-semibold mb-1">{item?.stock_sataus}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg text-purple-700">₹{item.price}</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                    {item?.discount_percent}% off
                  </span>
                </div>
                <p className="text-sm text-gray-400 line-through">₹{item.actual_price}</p>
              </motion.div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 text-lg">No products found.</p>
          )}
        </motion.main>
      </div>
    </div>
  );
};

export default MannualData;
