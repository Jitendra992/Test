import React from "react";
import { useQuery } from "@tanstack/react-query";
import { GetSecondData } from "../services/Maincontent/Index";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const Section14 = () => {
  const navigate=useNavigate()
  const { data, isLoading, error } = useQuery({
    queryKey: ["mainCatogary"],
    queryFn: GetSecondData, 
  });

  if (isLoading)
    return (
      <div className="p-4 text-2xl font-semibold flex justify-center items-center text-blue-500 animate-pulse">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="p-4 text-red-500 flex justify-center items-center text-2xl font-semibold">
        Error fetching data
      </div>
    );


  const mobileAccessories = data?.data?.data?.find(
    (i) => i.category === "Mobile Accessories"
  );
  const products = mobileAccessories?.product_deatils || [];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
        },
      },
    ],
  };
 

  return (
    <div className="h-full w-full px-4 py-8">
      <div className="flex flex-col lg:flex-row justify-between">
       
        <div className="w-full lg:w-[70%] mb-6 lg:mb-0">
        <div className="h-[10vh] w-full flex justify-between p-4 items-center bg-[#F3F4F6]">
            <p className="text-base sm:text-lg md:text-xl font-semibold">Mobile Accessories</p>
            <p  onClick={()=>navigate("/product",{state:{c_id:mobileAccessories?.id}})} className="text-base sm:text-lg md:text-xl">See All</p>
          </div>
          <Slider {...settings} className="w-full">
            {products.map((item, index) => (
              <div key={index} className="px-2">
                <div onClick={() => navigate(`/details/${item?.id}/${item?.variant_id}/${item?.slug}`)}
                 className="bg-white rounded-2xl shadow-md p-3 mx-auto hover:scale-105 transition-transform duration-300 border border-gray-200 h-full">
                  <img
                    src={item?.variant_image}
                    alt={item?.Meta_Description || "Product"}
                    className="h-40 w-full object-cover rounded-xl mb-3"
                  />
                  <p className="text-base lg:text-lg font-semibold text-gray-800 truncate">
                    {item?.Meta_Description}
                  </p>
                  <p className="text-xs lg:text-sm mb-1 text-green-500 font-semibold">
                    {item?.stock_sataus}
                  </p>
                  <p className="text-base lg:text-lg font-semibold text-black">
                    ₹{item?.actual_price}
                  </p>
                  <button className="w-full mt-4 text-white bg-gradient-to-r from-green-500 to-green-700 px-1 py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-300 ease-in-out relative overflow-hidden group">
                    <span className="relative z-10 group-hover:opacity-0 transition-opacity duration-500">
                      Click Me!
                    </span>
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                      Buy Now
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>

       
        <div className="w-full lg:w-[30%] lg:pl-4 lg:block hidden">
          <img
            src="https://crazzyhub.s3.amazonaws.com/media/maincat/image/Mobile-accessories.jpg"
            alt="side-banner"
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Section14;