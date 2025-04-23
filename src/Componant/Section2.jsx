import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Apidata } from '../services/brandlist/Index'
import Slider from "react-slick"


const Section2 = () => {
  
  const {data,isLoading}=useQuery({

    queryKey:["brandlist"],queryFn:()=>Apidata()

} )
console.log(data)

const settings = {
  dots: false,
  infinite: true,
  speed: 3000,  
  slidesToShow: 15,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 0, 
  cssEase: "linear", 
  pauseOnHover: false,
  arrows: false, responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 12,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 10,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

   

  return (


<Slider {...settings}>
  {
    data?.data?.data?.map((i, index) => (
      <div
        key={index}
        className="px-1 lg:px-4" 
      >
        <div className="w-full h-full flex items-center justify-center rounded-full ">
          <img
            className="!rounded-full  lg:h-20 lg:w-20"
            src={i?.image}
            alt="item"
          />
        </div>
      </div>
    ))
  }
</Slider>


 


    
  )
}

export default Section2