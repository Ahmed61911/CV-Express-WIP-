import {Cv1, Cv2, Cv3, Cv4} from '../../assets/images'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle';
import 'swiper/css/effect-cards';

import './styles.css';

import { EffectCards } from 'swiper/modules';

const Slider = () => {
  return (
    <div className='px-28 max-lg:p-0'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCards]}
        navigation
        effect={'cards'}
        pagination={{ clickable: true }}
        className='mySwiper'
      >
        <SwiperSlide className='cursor-grab'>
          <img src={Cv1} className=''/>
        </SwiperSlide>
        <SwiperSlide className='cursor-grab'>
          <img src={Cv2} className=''/>
          </SwiperSlide>
        <SwiperSlide className='cursor-grab'>
          <img src={Cv3} className=''/>
          </SwiperSlide>
        <SwiperSlide className='cursor-grab'>
          <img src={Cv4} className=''/>
          </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider