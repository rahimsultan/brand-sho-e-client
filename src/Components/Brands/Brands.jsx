import React from 'react'
import { Link } from 'react-router-dom'

const Brands = () => {
  return (
    <div className='grid grid-cols-3 gap-[2px] rounded-lg overflow-hidden'>
        <Link className='block' to={'/nike'}>
        <div className='bg-slate-200 p-5 grid place-items-center cursor-pointer'>
            <h2 className='text-2xl font-bold text-slate-500'>Nike</h2>
            <img className='max-w-[150px]' src="https://i.ibb.co/vHN7k80/nike-PNG11.png" alt="" />
        </div>
        </Link>
        <Link className=' bg-slate-200' to={'/adidas'}>
        <div className='bg-slate-200 p-5 grid place-items-center cursor-pointer'>
        <h2 className='text-2xl font-bold text-slate-500'>Adidas</h2>
            <img className='max-w-[150px]' src="https://i.ibb.co/Xpd8L4d/image.png" alt="" />
        </div>
        </Link>
        <Link className=' bg-slate-200' to={'/reebok'}>
        <div className='bg-slate-200 p-5 grid place-items-center cursor-pointer'>
        <h2 className='text-2xl font-bold text-slate-500'>Reebok</h2>
            <img className='max-w-[150px]' src="https://i.ibb.co/rvVzYNS/reebok-logo.png" alt="" />
        </div>
        </Link>
        <Link className=' bg-slate-200' to={'/puma'}>
        <div className='bg-slate-200 p-5 grid place-items-center cursor-pointer'>
        <h2 className='text-2xl font-bold text-slate-500'>Puma</h2>
            <img className='max-w-[150px]' src="https://i.ibb.co/QJYNw16/image.png" alt="" />
        </div>
        </Link>
        <Link className='block' to={'/gucci'}>
        <div className='bg-slate-200 p-5 grid place-items-center cursor-pointer'>
        <h2 className='text-2xl font-bold text-slate-500'>Gucci</h2>
            <img className='max-w-[150px]' src="https://i.ibb.co/K90JWBQ/download-gucci-png-logo-27.png" alt="" />
        </div>
        </Link>
        <Link className=' bg-slate-200' to={'/lotto'}>
        <div className='bg-slate-200 p-5 grid place-items-center cursor-pointer'>
        <h2 className='text-2xl font-bold text-slate-500'>Lotto</h2>
            <img className='max-w-[150px]' src="https://i.ibb.co/9TVPp78/Lotto-Sport-Italia-logo-svg.png" alt="" />
        </div>
        </Link>
    </div>
  )
}

export default Brands