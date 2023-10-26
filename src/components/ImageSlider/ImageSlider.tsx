import { FC } from 'react';
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Wrapper } from './ImageSlider.styled';

interface SliderProps {
  images: string[];
}

const ImageSlider: FC<SliderProps> = ({ images }) => {
  return (
    <Wrapper>
      <Swiper
        slidesPerView={1}
        freeMode={true}
        navigation
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode, Navigation]}
      >
        {images.map((image, index) => (
          <SwiperSlide style={{ width: 480 }} key={image} virtualIndex={index}>
            <img src={image} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

export default ImageSlider;
