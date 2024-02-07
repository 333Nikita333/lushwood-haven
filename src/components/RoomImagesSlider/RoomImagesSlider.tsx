import { FC, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';
import { EffectFade, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderProps } from '../../types';
import './styles.css';
import FancyboxWrapper from '../../utils/FancyboxWrapper';

const RoomImagesSlider: FC<SliderProps> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        effect={'fade'}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[EffectFade, FreeMode, Navigation, Thumbs]}
        className="mySwiper swiperActive"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <FancyboxWrapper>
              <a href={image} data-fancybox="room-gallery">
                <img style={{ borderRadius: 'none' }} src={image} alt="room image" />
              </a>
            </FancyboxWrapper>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="room image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default RoomImagesSlider;
