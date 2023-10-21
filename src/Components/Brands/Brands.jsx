import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Brands = () => {

    const [category, setCategory]=useState([])

    useEffect(()=>{
        fetch('https://assignment-server-sigma.vercel.app/brands')
        .then(res=>res.json())
        .then(data=>setCategory(data))
    },[])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] rounded-lg overflow-hidden'>
        {
            category.map(cat=>{
                return (
                    <Link key={cat.id} className=' bg-slate-200' to={`brand/${cat.name}`}>
                    <div className='bg-slate-200 p-5 grid place-items-center cursor-pointer'>
                        <h2 className='text-2xl font-bold text-slate-500'>{cat.name}</h2>
                        <img className='max-w-[150px]' src={cat.image} alt="" />
                    </div>
                    </Link>
                )
            })
        }
    </div>
  )
}

export default Brands