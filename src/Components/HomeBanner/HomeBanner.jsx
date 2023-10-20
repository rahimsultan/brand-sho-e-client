import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const HomeBanner = () => {
  return (
    <div className='relative my-10 rounded-md overflow-hidden'>
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
          <img className='w-full h-[450px] object-cover' src="https://apparelglobal.com/en/wp-content/uploads/2022/09/footwear-banner.jpg"  alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[450px] w-full object-cover' src="https://cdn.outsideonline.com/wp-content/uploads/2022/01/ResponsiveShoes-2.jpg?width=1200" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[450px] w-full object-cover' src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/2bbcfa99737217.5ef9be3dbb9a9.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[450px] w-full object-cover' src="https://static1.squarespace.com/static/56633c25e4b05b2617c32400/t/57a4a4dde6f2e1b9a7174661/1470407905073/?format=1500w" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[450px] w-full object-cover' src="https://cdn-5c84bc36-b681cbc1.mysagestore.com/a674d2192d65bfe4ff4891ff547adcbb/contents/ckfinder/images/Category-Headers/2022-23-Shoes-Category-Desktop-Banner.jpg" alt="" />
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default HomeBanner