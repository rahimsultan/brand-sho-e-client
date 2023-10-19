import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Brands from '../Brands/Brands'
import HomeBanner from '../HomeBanner/HomeBanner'
import NewsLetter from '../NewsLetter/NewsLetter'
import ProductCard from '../ProductCard/ProductCard'
import Trustedby from '../TrustedBy/Trustedby'

const Home = () => {
  const data = useLoaderData()
  // console.log(data.products);
  return (
    <div className='max-w-7xl lg:px-8 px-5 mx-auto'>
      <HomeBanner/>
      <Brands/>
      <div className='grid grid-cols-4 gap-5 my-10'>
        {
          data.products.map(product=><ProductCard key={product.id} product={product}/>)
        }
      </div>
      <Trustedby/>
      <NewsLetter/>
    </div>
  )
}

export default Home