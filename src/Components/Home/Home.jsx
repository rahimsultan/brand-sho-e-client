import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Brands from '../Brands/Brands'
import HomeBanner from '../HomeBanner/HomeBanner'
import NewsLetter from '../NewsLetter/NewsLetter'
import Trustedby from '../TrustedBy/Trustedby'

const Home = () => {
  const data = useLoaderData()
  // console.log(data.products);
  return (
    <div className='max-w-7xl lg:px-8 px-5 mx-auto'>
      <HomeBanner/>
      <Brands/>
      <NewsLetter/>
      <Trustedby/>
    </div>
  )
}

export default Home