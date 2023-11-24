import React from 'react'
import landing from "../assets/landing.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import pic1 from"../assets/1.jpg"
import pic2 from"../assets/2.jpg"
import pic3 from"../assets/3.jpg"
import pic4 from"../assets/4.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const PopularPackage = () => {
  return (
    <div className='p-20 bg-cover' style={{backgroundImage:`url(${landing})`}}>
    <div className='pl-16'>
    <svg width="46" height="23" viewBox="0 0 46 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M41 23C41 18.2261 39.1036 13.6477 35.7279 10.2721C32.3523 6.89642 27.7739 5 23 5C18.2261 5 13.6477 6.89642 10.2721 10.2721C6.89642 13.6477 5 18.2261 5 23" stroke="#00E5CC" stroke-width="10"/>
    </svg>
</div>
    <h1 className='font-bold text-5xl pb-56'>Popular Packages</h1>
    <Swiper
    slidesPerView={4}
    spaceBetween={30}
    centeredSlides={true}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="mySwiper"
  >
    <SwiperSlide className='p-5 rounded-lg ' >
    <img src={pic1} className="rounded-lg w-96 h-80 pb-10"/>
    <h1 className='text-sm pb-16 font-bold'>The basic package to start your promotion</h1>
    <div className='flex flex-row justify-between px-3'>
    <span className='text-sm opacity-50'>2,5K users</span>
    <h1 className='text-[#00E5CC] font-bold'>$ 108.00</h1>
    </div>
    </SwiperSlide>
    <SwiperSlide className='p-5 rounded-lg ' >
    <img src={pic2} className="rounded-lg w-96 h-80 pb-10"/>
    <h1 className='text-sm pb-16 font-bold'>The basic package to start your promotion</h1>
    <div className='flex flex-row justify-between px-3'>
    <span className='text-sm opacity-50'>2,5K users</span>
    <h1 className='text-[#00E5CC] font-bold'>$ 108.00</h1>
    </div>
    </SwiperSlide>
    <SwiperSlide className='p-5 rounded-lg ' >
    <img src={pic3} className="rounded-lg w-96 h-80 pb-10"/>
    <h1 className='text-sm pb-16 font-bold'>The basic package to start your promotion</h1>
    <div className='flex flex-row justify-between px-3'>
    <span className='text-sm opacity-50'>2,5K users</span>
    <h1 className='text-[#00E5CC] font-bold'>$ 108.00</h1>
    </div>
    </SwiperSlide>
    <SwiperSlide className='p-5 rounded-lg ' >
    <img src={pic4} className="rounded-lg w-96 h-80 pb-10"/>
    <h1 className='text-sm pb-16 font-bold'>The basic package to start your promotion</h1>
    <div className='flex flex-row justify-between px-3'>
    <span className='text-sm opacity-50'>2,5K users</span>
    <h1 className='text-[#00E5CC] font-bold'>$ 108.00</h1>
    </div>
    </SwiperSlide>
  </Swiper>
    </div>
  )
}

export default PopularPackage;
