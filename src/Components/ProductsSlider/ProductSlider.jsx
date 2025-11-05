import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import ProductItem from './ProductItem';
import Slider1 from '../../assets/Images/ProductSlider/Slider1.jpg'
import FetchItem from './fetchItem';

export default function ProductSlider(props) {
  return (
    <>
      <div className='ProductSlider py-5'>
      <Swiper 

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

       navigation={true}  
        slidesPerView={props.item}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation,Autoplay]}
        className="mySwiper "
      >

        <SwiperSlide>
          <ProductItem>
             <FetchItem/>
          </ProductItem>
        </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
