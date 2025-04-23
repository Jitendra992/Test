import React, { useState } from "react";
import { IoLocationSharp, IoStarOutline } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { Getfirst } from "../services/Productdetails/Index";
import { useQuery } from "@tanstack/react-query";
import { GiFastBackwardButton, GiFastForwardButton } from "react-icons/gi";

const Details1 = () => {
  const { p_id, v_id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === ProductD?.variant_images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? ProductD?.variant_images.length - 1 : prev - 1
    );
  };

  const handleThumbClick = (index) => {
    setCurrentIndex(index);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["productdetails"],
    queryFn: () =>
      Getfirst({
        product_id: p_id,
        variant_id: v_id,
      }),
  });

  const ProductD = data?.data?.data;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <div className="w-full flex flex-col lg:flex-row gap-5 py-3 md:py-5 px-3 md:px-5 justify-between">
        <div className="w-full lg:w-[30%] mb-6 lg:mb-0">
          {ProductD?.variant_images && ProductD.variant_images.length > 0 && (
            <>
              <img
                src={ProductD.variant_images[currentIndex]}
                alt="Main"
                className="w-full h-64 md:h-80 object-contain rounded-xl shadow-lg"
              />

              <div className="flex items-center justify-center gap-2 mt-4 px-2">
                <button
                  onClick={handlePrev}
                  className="text-gray-500 hover:text-orange-700 transition"
                >
                  <GiFastBackwardButton size={24} className="hidden sm:block" />
                  <GiFastBackwardButton size={20} className="sm:hidden" />
                </button>

                <div className="flex gap-2 md:gap-3 overflow-x-auto py-1 custom-scrollbar">
                  {ProductD.variant_images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      onClick={() => handleThumbClick(index)}
                      className={`w-14 h-14 md:w-20 md:h-20 object-cover rounded-md cursor-pointer transition-all duration-200 border-2 ${
                        currentIndex === index
                          ? "border-gray-500 scale-105"
                          : "border-transparent hover:border-gray-300"
                      }`}
                      alt={`Thumbnail ${index}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="text-gray-500 hover:text-gray-700 transition"
                >
                  <GiFastForwardButton size={24} className="hidden sm:block" />
                  <GiFastForwardButton size={20} className="sm:hidden" />
                </button>
              </div>
            </>
          )}
        </div>

        <div className="w-full lg:w-[40%] mb-6 lg:mb-0">
          <p className="font-semibold text-lg md:text-xl">
            {ProductD?.product_variant_name}
          </p>
          <p className="font-semibold text-base md:text-lg">PREMIUM QUALITY SUGAR</p>

          <div className="flex text-green-600 my-1">
            <IoStarOutline />
            <IoStarOutline />
            <IoStarOutline />
            <IoStarOutline />
            <IoStarOutline />
          </div>
          <p className="font-semibold text-base md:text-xl text-green-600 py-1 md:py-2">In Stock</p>

          <div className="flex flex-wrap gap-3 md:gap-5 py-1 md:py-2">
            <p className="text-orange-600 font-semibold text-xl md:text-2xl">
              Rs:{ProductD?.mrp}
            </p>
            <p className="line-through text-gray-600 font-semibold text-base md:text-lg">
              MRP:{ProductD?.price}
            </p>
            <p className="bg-green-600 text-white font-semibold rounded-sm px-2 text-base md:text-lg text-center">
              25%
            </p>
          </div>

          <div className="py-2">
            <p className="font-semibold text-lg md:text-xl mb-2">Storage</p>

            <p className="border-2 w-24 text-center py-1 border-orange-500">
              2024
            </p>

            <div className="py-2 bg-gray-200 p-3 md:p-5 rounded-lg mt-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <p className="font-semibold text-base md:text-lg">
                  Delivery Option
                </p>
                <div className="flex items-center w-full sm:w-auto">
                  <IoLocationSharp className="mr-1 mb-1" />
                  <input
                    className="outline-none rounded-sm p-1 w-full sm:w-auto"
                    type="text"
                    placeholder="Enter Pin Code"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 bg-[#FEE2E2] justify-center items-center mt-3 rounded-sm p-2 md:p-3 text-center text-sm md:text-base">
              <div className="flex flex-col">
                <p className="font-bold">Replacement</p>
                <p>in 7 days</p>
              </div>
              <div>
                <p className="font-bold">Warranty</p>
                <p>in 1 Year</p>
              </div>
              <div>
                <p className="font-bold">GST Invoice</p>
                <p>Available</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[30%]">
          {data?.data?.frequntly_buy_products?.length > 0 ? (
            <>
              {data.data.frequntly_buy_products.map((i, index) => (
                <div key={index} className="border border-gray-300 w-full max-w-md mx-auto p-3 bg-gray-200 mb-4 rounded-lg">
                  <h2 className="font-bold text-base md:text-lg underline text-center my-2 md:my-3">
                    Frequently Bought Together
                  </h2>

                  <div className="flex gap-3">
                    <img
                      src={i?.variant_image}
                      alt={i?.product_variant_name || "Product"}
                      className="w-14 h-16 md:w-16 md:h-20 object-contain border border-gray-300"
                    />

                    <div className="flex flex-col justify-between flex-1">
                      <div>
                        <p className="text-xs md:text-sm font-semibold line-clamp-3">
                          {i?.product_variant_name}
                        </p>
                      </div>
                      <p className="text-xs text-gray-600">{i?.brand_name}</p>
                    </div>

                    <div className="ml-auto text-right font-semibold text-black">
                      ₹{i?.price}
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="flex justify-center mb-4">
              <img
                className="w-full max-w-xs"
                src="https://img.freepik.com/premium-vector/no-data-found-empty-file-folder-concept-design-vector-illustration_620585-1698.jpg"
                alt="No data found"
              />
            </div>
          )}

          <div className="space-y-3 md:space-y-4 w-full max-w-md mx-auto">
            <button className="bg-gradient-to-r from-rose-500 to-purple-600 hover:opacity-90 text-white p-2 md:p-3 rounded-lg w-full font-medium text-base">
              Buy Now
            </button>

            <button className="bg-gradient-to-r from-green-500 to-purple-600 hover:opacity-90 text-white p-2 md:p-3 rounded-lg w-full font-medium text-base">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details1;