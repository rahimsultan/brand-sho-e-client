import React from 'react';

const ProductCard = ({product}) => {
    const {title, brand_name, short_des, price, image} =product
    // console.log(product);
  return (
    <div className="rounded-md border">
    <img
      src={image}
      alt="shoes"
      className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
    />
    <div className="p-4">
      <h1 className="inline-flex items-center text-lg font-semibold">{title}</h1>
      <p className="mt-3 text-sm text-gray-600">
        {short_des}
      </p>


      <div className="mt-5 flex items-center space-x-2">
        <span className="block text-sm font-semibold">Price : </span>
        <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
          ${price}
        </span>
      </div>
      <button
        type="button"
        className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Add to Cart
      </button>
    </div>
  </div>
  )
}

export default ProductCard