import React from 'react'

const Trustedby = () => {
  return (
    <div className='border p-10 my-10 rounded-md'>
        <div className='text-center my-8'>
        <h2 className='font-bold text-3xl'>Trusted by creators worldwide</h2>
        <p className='font-semibold text-slate-500'>Lorem ipsum dolor sit amet consect adipisicing possimus.</p>
        </div>
        <div className='grid grid-cols-4 gap-[2px] rounded-md overflow-hidden'>
            <div className='bg-slate-200 p-5 grid place-items-center'>
                <h2 className='font-bold text-2xl'>500+</h2>
                <p className='text-slate-500 font-semibold'>Active customer on the platform</p>
            </div>
            <div className='bg-slate-200 p-5 grid place-items-center'>
                <h2 className='font-bold text-2xl'>$1000</h2>
                <p className='text-slate-500 font-semibold'>Free Shipping to any country</p>
            </div>
            <div className='bg-slate-200 p-5 grid place-items-center'>
                <h2 className='font-bold text-2xl'>3000+</h2>
                <p className='text-slate-500 font-semibold'>Happy customer</p>
            </div>
            <div className='bg-slate-200 p-5 grid place-items-center'>
                <h2 className='font-bold text-2xl'>10000+</h2>
                <p className='text-slate-500 font-semibold'>Unique and update products</p>
            </div>
        </div>
    </div>
  )
}

export default Trustedby