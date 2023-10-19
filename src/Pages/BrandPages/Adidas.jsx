import React, { useEffect, useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import ProductCard from '../../Components/ProductCard/ProductCard';

const Adidas = () => {

    const [products, setProducts] = useState([])
    const [filteredData, setFilteredData] = useState([])

    const data = useLoaderData()

    const root = useLocation()
    const path = root.pathname.replace('/', '')

    useEffect(()=>{
        setProducts(data.products)

        const find = products.filter(product=> product.brand_name.toLowerCase() === path)
        setFilteredData(find)
    },[products])

  return (
    <div className='max-w-7xl mx-auto px-5 lg:px-8'>
        <h2 className='text-4xl font-bold text-center my-8'>Welcome to Adidas Page</h2>
        <div className='grid md:grid-cols-2 lg:gap-20 my-10 gap-5 grid-cols-1 lg:grid-cols-3'>
            {
                filteredData.map(product=> <ProductCard key={product.id} product={product}/>)
            }
        </div>
    </div>
  )
}

export default Adidas