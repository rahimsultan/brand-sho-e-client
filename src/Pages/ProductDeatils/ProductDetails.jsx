import { Star } from 'lucide-react';
import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const ProductDetails = () => {
    const data = useLoaderData()
    const {_id, photo, title,price, brand, rating,description, category}=data

    const {user} = useAuth()
    // console.log(data);

  const handleAddtoCart=()=>{
    const cart = {product: data, email: user.email}

    fetch('http://localhost:5000/cart/products',{
      method:"POST",
      headers:{
        'content-type':"application/json"
      },
      body: JSON.stringify(cart)
    })
    .then(res=> res.json())
    .then(data=>{
      if(data.insertedId){
        toast.success('Product Added')
      }
    })
  }

  return (
    <section className="overflow-hidden">
    <div className="mx-auto max-w-5xl px-5 py-24">
      <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
        <img
          alt={title}
          className="h-64 w-full rounded object-contain lg:h-96 lg:w-1/2"
          src={photo}
        />
        <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
          <h2 className="text-sm font-semibold tracking-widest text-gray-500">{brand}</h2>
          <h1 className="my-4 text-3xl font-semibold text-black">{title}</h1>
          <div className="my-4 flex items-center">
            <span className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-500" />
              ))}
              <span className="ml-3 inline-block text-xs font-semibold">{rating} Ratings</span>
            </span>
          </div>
          <p className="leading-relaxed">
            {description}
          </p>
          <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
            <div className="flex items-center">
              <span className="mr-3 text-sm font-semibold">Color</span>
              <button className="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
              <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
              <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-green-200 focus:outline-none"></button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="title-font text-xl font-bold text-gray-900">${price}</span>
            <button
            onClick={handleAddtoCart}
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ProductDetails