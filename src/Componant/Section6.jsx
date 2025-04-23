import React from "react";
import { useQuery } from "@tanstack/react-query";
import { GetSecondData } from "../services/Maincontent/Index";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useNavigate } from "react-router-dom";

const Section6 = () => {
  const navigate = useNavigate();
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

  const electronicsCategory = data?.data?.data?.find(
    (item) => item.category === "Tv's & Electronics"
  );
  const electronicsProducts = electronicsCategory?.product_deatils || [];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
 

  return (
    
    <div className="w-full px-4 md:px-6 lg:px-10 py-6">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
        <div className="w-full lg:w-3/4">
        <div className="h-[10vh] w-full flex justify-between p-4 items-center bg-[#F3F4F6]">
            <p className="text-base sm:text-lg md:text-xl font-semibold">Tv & Electronics</p>
            <p  onClick={()=>navigate("/product",{state:{c_id:electronicsCategory?.id}})} className="text-base sm:text-lg md:text-xl">See All</p>
          </div>
          <Slider {...settings} className="w-full">
            {electronicsProducts?.map((item, index) => (
              <div key={index} className="px-2 md:px-3">
                <div  onClick={() => navigate(`/details/${item?.id}/${item?.variant_id}/${item?.slug}`)}
                 className="bg-white rounded-2xl shadow-md p-3 md:p-4 hover:scale-105 transition-transform duration-300 border border-gray-200 h-full">
                  <div className="overflow-hidden rounded-xl mb-3">
                    <img
                      src={item?.variant_image}
                      alt={item?.Meta_Description || "Product image"}
                      className="h-32 sm:h-40 md:h-48 w-full object-cover rounded-xl hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-sm md:text-base font-semibold text-gray-800 truncate">
                    {item?.Meta_Description}
                  </p>
                  <p className="text-xs md:text-sm mb-1 text-green-500 font-semibold">
                    {item?.stock_sataus}
                  </p>
                  <p className="text-base md:text-lg font-semibold text-black">
                    ₹{item?.actual_price}
                  </p>

                  <button className="w-full mt-4 text-white bg-gradient-to-r from-green-500 to-green-700 px-1 py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-300 ease-in-out relative overflow-hidden group">
                    <span className="relative z-10 group-hover:opacity-0 transition-opacity duration-500">
                      Buy Now
                    </span>
                  
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="w-full lg:w-1/4 mt-6 lg:mt-0 ">
          <div className="rounded-xl overflow-hidden shadow-lg hidden lg:block">
            <img
              src="https://crazzyhub.s3.amazonaws.com/media/maincat/image/tv_3PbwT80.jpg"
              alt="side-banner"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;