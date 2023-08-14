import styled from 'styled-components';

export const AboutWrapper = styled.main`
  overflow-x: hidden;
  color: #fafafa;
  background-image: url(images/about_images/bgImage.jpg);
  background-size: 200px;
  background-position: center;
  will-change: transform;
`;
export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
`;
export const HeroVideo = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const HeroImage = styled.img`
  position: absolute;
  top: 22vh;
  left: 37vw;
  width: calc(var(--index) * 36);
  will-change: transform;

  @media screen and (max-width: 480px) {
    top: 10vh;
    left: 3vw;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    top: 5vh;
    left: 25vw;
  }
`;
export const Container = styled.div`
  padding: 0 7vw;
`;
export const MainHeader = styled.div`
  height: 100vh;
  will-change: transform;
`;
export const MainTitle = styled.h1`
  position: absolute;
  width: min-content;
  font-size: calc(var(--index) * 8);
  line-height: 0.9;
  bottom: 32vh;

  font-weight: bold;
  color: #67320c;
  text-shadow: -4px 0 black,0 4px black,4px 0 black,0 -4px black
`;

export const Portfolio = styled.section``;
export const ContainerPortfolio = styled.div``;
export const Gallery = styled.div`
  display: flex;
  padding: calc(var(--index) * 2) 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  & > * {
    display: flex;
    flex: 1;
    align-items: center;
    flex-direction: column;
    will-change: transform;
  }
  & .gallery__item {
    max-width: calc(var(--index) * 35);
    margin-bottom: var(--gallery-gap);
    max-height: 180vh;
    border-radius: 8px;

    @media screen and (min-width: 769px) and (max-width: 1280px) {
      max-width: calc(var(--index) * 28);
    }
    @media screen and (min-width: 1281px) {
      max-width: calc(var(--index) * 30);
    }
  }
  & img {
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
      rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
`;
export const GalleryImage = styled.img``;
export const TextBlock = styled.div`
  color: ${({ theme }) => theme.colors.aboutSectionText};
  position: relative;
  text-shadow: 7px 7px 3px rgba(0, 0, 0, 0.6);

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
export const TextBlockH = styled.h2`
  font-size: 2rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.colors.aboutSectionTitle};
  margin-bottom: 1.5rem;
`;
export const TextBlockP = styled.p`
  font-weight: 700;
  line-height: 1.75;
`;
export const GalleryLeft = styled.div`
  margin-top: calc(var(--gallery-gap) * 0.75);

  @media screen and (min-width: 769px) {
    margin-top: calc(var(--gallery-gap) * 1.75);
  }
`;
export const GalleryRight = styled.div`
  & .gallery-item {
    margin: 0;
    margin-top: var(--gallery-gap);
  }
`;
