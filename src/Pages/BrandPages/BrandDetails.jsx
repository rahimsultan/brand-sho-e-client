import React from 'react';
import { useLoaderData } from 'react-router-dom';
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


    const data = useLoaderData()

  return (
    <div className='max-w-7xl mx-auto px-5 lg:px-8'>
        <h2 className='text-4xl font-bold text-center my-8'>Welcome to Page</h2>
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
        {
          data.map(pro=> {
            return (
              <SwiperSlide key={pro._id}>
                  <img className='w-full' src={pro.photo} alt="" />
              </SwiperSlide>
            )
          })
        }

      </Swiper>
        </div>
        <div className='grid md:grid-cols-2 lg:gap-20 my-10 gap-5 grid-cols-1 lg:grid-cols-3'>
            {
                data.map(product=> <ProductCard key={product._id} product={product}/>)
            }
        </div>
    </div>
  )
}

export default BrandDetails;