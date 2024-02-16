import { FC } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderProps } from '../../types';
import { Wrapper } from './ImageSlider.styled';

const ImageSlider: FC<SliderProps> = ({ images }) => {
  return (
    <Wrapper>
      <Swiper
        slidesPerView={1}
        grabCursor={true}
        freeMode={true}
        navigation
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode, Navigation]}
      >
        {images.map((image, index) => (
          <SwiperSlide style={{ width: 480 }} key={index} virtualIndex={index}>
            <img src={image} alt={`Slide ${index}`} style={{ height: '100%' }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

export default ImageSlider;
