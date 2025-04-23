import React from 'react'

import Slider from "react-slick"
import { useQuery } from '@tanstack/react-query'
import { GetSliderFn } from '../services/SliderList'

const Section1 = () => {


    const {data,isLoading}=useQuery({

       queryKey: ["sliderlist"],queryFn:()=>GetSliderFn()

 } )

    console.log(data)


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };
  return (
    <div>
     <Slider {...settings}>

     {data?.data?.data?.map((i)=>(
      <div className='h-full w-full'>
        <img className='lg:h-[50vh] h-[20vh] ' src={i?.image}/>
      </div>
    ))}
    
    </Slider>

    </div>
  )
}

export default Section1