import React from 'react'
import promopic from"../assets/promotion.png"
const Promo = () => {
  return (
    <div className='p-20 text-[#060640]'>
    <div className='pl-[550px]'>
    <svg width="46" height="23" viewBox="0 0 46 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M41 23C41 18.2261 39.1036 13.6477 35.7279 10.2721C32.3523 6.89642 27.7739 5 23 5C18.2261 5 13.6477 6.89642 10.2721 10.2721C6.89642 13.6477 5 18.2261 5 23" stroke="#00E5CC" stroke-width="10"/>
    </svg>
</div>
<div className='text-center'>
 <h1 className='font-bold text-5xl pb-5'>Global Promotion</h1>
 <p className='text-[#9090A7]'>Businesses generally promote their brand, products, and services by identifying audience.</p>
</div>
<img src={promopic} className='px-20 animate-pulse'/>
    </div>
  )
}

export default Promo
