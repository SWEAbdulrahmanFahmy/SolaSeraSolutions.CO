import React from 'react'
import newsletter from "../assets/newsletter.png"
const NewsLetter = () => {
  return (
    <div style={{backgroundImage:`url(${newsletter})`}} className='px-20 bg-cover mx-20 pb-32 '>
    <div className='pt-40 pl-52'>
    <svg width="46" height="23" viewBox="0 0 46 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M41 23C41 18.2261 39.1036 13.6477 35.7279 10.2721C32.3523 6.89642 27.7739 5 23 5C18.2261 5 13.6477 6.89642 10.2721 10.2721C6.89642 13.6477 5 18.2261 5 23" stroke="#00E5CC" stroke-width="10"/>
    </svg>
</div>
     <h1 className='font-bold text-5xl pb-5 '>Subscribe NewsLetter</h1>
     <p className='w-[400px] text-[#9090A7] pb-1'>Businesses generally promote their brand, products, and services by identifying audience. No wonder that promotion strategy is one of the most important processes in marketing.</p>
    <div className=''>
    <input type='text' placeholder='Enter Email Address ' className='px-5 w-[400px] py-4 rounded-s-lg'/>
    <input type='submit' value="Subscribe" className='bg-[#060640] text-white text-sm font-medium px-4 py-4 rounded-e-lg'/>
    </div>
    </div>
  )
}

export default NewsLetter;
