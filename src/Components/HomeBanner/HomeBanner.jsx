import React from 'react'

const HomeBanner = () => {
  return (
    <div className='relative my-10 rounded-md overflow-hidden'>
        <img className='relative' src="https://i.ibb.co/0fQM64F/wallpaper2you-396215.jpg" alt="" />
        <div className='absolute inset-0 bg-black/60'></div>
        <div className='z-20 text-center absolute top-1/2 text-white left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <h1 className='text-7xl font-bold text-center my-5'>Find Your Perfect Running Shoes </h1>
        <p>Always wear what you want to wear</p>
        <button className='inline-flex items-center my-5 justify-center rounded-md bg-green-400 px-8 py-2.5 font-semibold leading-7 text-white'> Shop Now</button>
        </div>
    </div>
  )
}

export default HomeBanner