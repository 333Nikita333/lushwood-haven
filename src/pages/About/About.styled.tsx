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
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
`;
export const GalleryImage = styled.img``;
export const TextBlock = styled.div`
  color: ${({ theme }) => theme.colors.aboutSectionText};
  position: relative;

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
  line-height: 1.75;
`;
export const GalleryLeft = styled.div`
  margin-top: calc(var(--gallery-gap) * 0.75);
`;
export const GalleryRight = styled.div`
  & .gallery-item {
    margin: 0;
    margin-top: var(--gallery-gap);
  }
`;
