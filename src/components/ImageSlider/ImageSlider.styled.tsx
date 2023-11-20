import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  max-width: calc(var(--index) * 25);

  @media (min-width: 480px) and (max-width: 767px) {
    max-width: calc(var(--index) * 34);
  }
  @media (min-width: 768px) {
    max-width: calc(var(--index) * 20.5);
  }
  @media (min-width: 1024px) {
    max-width: calc(var(--index) * 15);
  }

  & .swiper {
    height: auto;
    border-radius: 0.5rem;
  }
  & .swiper-button-prev,
  & .swiper-button-next {
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    opacity: 0;
  }
  &:hover .swiper-button-prev,
  &:hover .swiper-button-next {
    opacity: 1;
  }
  & .swiper-button-prev:hover,
  & .swiper-button-next:hover,
  & .swiper-button-prev:focus,
  & .swiper-button-next:focus {
    color: #43b72b;
    transform: scale(1.1);
  }
  & .swiper-button-prev:hover,
  & .swiper-button-prev:focus {
    color: #43b72b;
    transform: translateX(-10px);
  }
  & .swiper-button-next:hover,
  & .swiper-button-next:focus {
    color: #43b72b;
    transform: translateX(10px);
  }
`;
