import React from 'react';
import { Link } from 'react-router-dom';
const category =[
    {
        name:'Nike',
        id: 1,
        image: 'https://i.ibb.co/vHN7k80/nike-PNG11.png'
    },
    {
        name:'Adidas',
        id: 2,
        image: 'https://i.ibb.co/Xpd8L4d/image.png'
    },
    {
        name:'Reebok',
        id: 3,
        image: 'https://i.ibb.co/rvVzYNS/reebok-logo.png'
    },
    {
        name:'Puma',
        id: 4,
        image: 'https://i.ibb.co/QJYNw16/image.png'
    },
    {
        name:'Gucci',
        id: 5,
        image: 'https://i.ibb.co/K90JWBQ/download-gucci-png-logo-27.png'
    },
    {
        name:'Lotto',
        id: 6,
        image: 'https://i.ibb.co/9TVPp78/Lotto-Sport-Italia-logo-svg.png'
    }
]

const Brands = () => {

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