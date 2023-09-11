'use client'
import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='mx-5'>
      <small className='uppercase text-orange-400 text-xs font-bold tracking-wide my-2.5 '>Sneaker Company</small>
      <h1 className='text-gray-900 text-[28px] font-bold my-5'>Fall Limited Edition Sneakers</h1>
      <p className='text-gray-600 text-sm font-normal '>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
      <div className='flex justify-between items-center my-5'>
       <div>
       <span className='font-bold text-[28px] text-gray-900'>$125.00</span>
        <span className='mx-5 text-base font-bold text-orange-400 bg-orange-100 p-1 rounded'>50%</span>
       </div>
        <span className='text-gray-300 line-through font-bold'>$250.00</span>
      </div>
    </div>
  )
}

export default Hero