import React, { useEffect, useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import ProductCard from '../../Components/ProductCard/ProductCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const BrandDetails = () => {

    const [products, setProducts] = useState([])
    const [filteredData, setFilteredData] = useState([])

    const data = useLoaderData()

    const root = useLocation()
    const path = root.pathname.replace('/brand/', '')

    useEffect(()=>{
        setProducts(data.products)

        const find = products.filter(product=> product.brand_name.includes(path))
        setFilteredData(find)
    },[products])

    console.log(path);

  return (
    <div className='max-w-7xl mx-auto px-5 lg:px-8'>
        <h2 className='text-4xl font-bold text-center my-8'>Welcome to {path} Page</h2>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className='w-full' src="https://soliloquywp.com/wp-content/uploads/2019/04/nb_esc_cover.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full' src="https://res.cloudinary.com/dmko6hpul/image/upload/v1568068457/one_kaxpwq.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full' src="https://www.simplilearn.com/ice9/free_resources_article_thumb/html_image_slider.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJfLAAWLpAXwNKMbj2uI7ecqbNJ6ch1jdBJ4EjRQTfoBRHim_YrE5GVn6SI1FQB5Krzb8&usqp=CAU" alt="" />
        </SwiperSlide>

      </Swiper>
        </div>
        <div className='grid md:grid-cols-2 lg:gap-20 my-10 gap-5 grid-cols-1 lg:grid-cols-3'>
            {
                filteredData.map(product=> <ProductCard key={product.id} product={product}/>)
            }
        </div>
    </div>
  )
}

export default BrandDetails;