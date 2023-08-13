import styled from 'styled-components';

export const AboutWrapper = styled.main`
  overflow-x: hidden;
  color: #fafafa;
  background-image: url(images/about_images/bg.jpg);
  background-size: 50px;
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

  & > * {
    display: flex;
    flex: 1;
    align-items: center;
    flex-direction: column;
    will-change: transform;
  }
  & .gallery__item {
    max-width: calc(var(--index) * 21);
    margin-bottom: var(--gallery-gap);
    max-height: 180vh;
    border-radius: 8px;
  }
`;
export const GalleryImage = styled.img``;
export const TextBlock = styled.div`
  color: ${({ theme }) => theme.colors.aboutSectionText};
  position: relative;
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
  margin-top: calc(var(--gallery-gap) * 1.75);
`;
export const GalleryRight = styled.div`
  & .gallery-item {
    margin: 0;
    margin-top: var(--gallery-gap);
  }
`;
