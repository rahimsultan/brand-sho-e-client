import { Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
    const {_id,title, brand, 
      description, price, photo, category, rating} =product
    // console.log(product);

    return (
    <div className="rounded-md border">
    <img
      src={photo}
      alt="shoes"
      className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
    />
    <div className="p-4">
      <h1 className="inline-flex items-center text-lg font-semibold">{title}</h1>
      <p className="mt-3 text-sm text-gray-600">
        {
description}
      </p>

      <div className="my-4 flex items-center">
            <span className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-500" />
              ))}
              <span className="ml-3 inline-block text-xs font-semibold">{rating} Ratings</span>
            </span>
          </div>


      <div className="mt-5 flex items-center space-x-2">
        <div className='flex items-center space-x-2'>
        <span className="block text-sm font-semibold">Price : </span>
        <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
          ${price}
        </span>
        </div>
        <div className='flex items-center space-x-2'>
        <span className="block text-sm font-semibold">Category : </span>
        <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
          {category ? category : 'not updated'}
        </span>
        </div>
        
      </div>
      
      <div className='flex items-center gap-3 justify-between'>
      <Link to={`/update-product/${_id}`}>
      <button
        type="button"
        className="mt-4 rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 "
      >
        Update
      </button>
      </Link>
      <Link to={`/${brand}/${_id}`}>
      <button
        type="button"
        className="mt-4 rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 "
      >
        See Details
      </button>
      </Link>
      </div>
    </div>
  </div>
  )
}

export default ProductCard