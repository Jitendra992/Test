import React from "react";
import { useQuery } from "@tanstack/react-query";
import { GetSecondData } from "../services/Maincontent/Index";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@mui/material";
import SkeletonCard from './Skelton'; 

const Section3 = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["mainCatogary"],
    queryFn: () => GetSecondData(),
  });

  const Book = data?.data?.data?.filter((i) => i.category === "Books & More");
  const navigate = useNavigate();

  
  

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    cssEase: "ease-in-out",
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
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  if (error)
    return (
      <div className="p-4 text-red-500 flex justify-center items-center text-2xl font-semibold">
        Error fetching data
      </div>
    );

  return (
    <div className="h-full w-full bg-gradient-to-b from-[#f0f4f8] to-[#e0f7fa] py-10 px-4 ">
      <div className="flex lg:flex-row justify-center items-center gap-8">
        <div className="lg:w-[70%] w-full relative">
        <div className="h-[10vh] w-full flex justify-between p-4 items-center bg-[#F3F4F6]">
            <p className="text-base sm:text-lg md:text-xl font-semibold">Book & More</p>
            <p  onClick={()=>navigate("/product", {state:{c_id:Book?.[0]?.id}})}  className="text-base sm:text-lg md:text-xl">See All</p>
          </div>
          {isLoading ? (<>
   

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(4)].map((_, index) => (
        <SkeletonCard key={index} />  
      ))}      
    </div>
    </> ) : (
            <Slider {...settings}>
            
              {Book?.[0]?.product_deatils?.map((item, index) => (
                <div key={index} className="px-3">
                  <div
                    onClick={() => navigate(`/details/${item?.id}/${item?.variant_id}/${item?.slug}`)}
                    className="relative bg-white rounded-2xl shadow-lg p-4 hover:scale-[1.05] overflow-hidden transition-all duration-500 border border-gray-300 h-full transform hover:shadow-2xl"
                  >
                    <div>
                      <img
                        src={item?.variant_image}
                        alt="Product"
                        className="h-[10%] lg:h-[200px] w-full object-cover rounded-xl mb-4 transition-transform duration-300 ease-in-out transform hover:scale-110"
                      />

                      <div className="absolute top-1 h-[10%] text-center pt-3 font-semibold -rotate-35 left-px-5 bg-red-500 text-white text-xs px-2 py-1 shadow z-10 w-[55%] -left-6">
                        <p className="text-xs"> 25% OFF</p>
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
                    </div>

                    <button className="w-full mt-4 text-white bg-gradient-to-r from-green-500 to-green-700 px-5 py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-300 ease-in-out relative overflow-hidden group">
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
          )}

          
        </div>

        <div className="w-full lg:w-[30%] hidden lg:block">
          {isLoading ? (
            <Skeleton
              variant="rectangular"
              width="100%"
              height={350}
              className="rounded-2xl"
            />
          ) : (
            <img
              src="https://crazzyhub.s3.amazonaws.com/media/maincat/image/tv_3PbwT80.jpg"
              alt="Ad"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Section3;
