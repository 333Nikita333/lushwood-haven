import { FC } from 'react';
import { IAboutHeroProps } from '../../types';
import ScrollDownBtn from '../ScrollDownBtn';
import {
  Container,
  HeroImage,
  HeroSection,
  HeroVideo,
  MainHeader,
  MainTitle,
  ScrollDownIconWrapper,
} from './AboutHero.styled';

const heroImage: string = 'images/about_images/hero.png';
const bgHeroVideoMP4: string = 'videos/background_video.mp4';
const bgHeroVideoWEBM: string = 'videos/background_video.webm';

const AboutHero: FC<IAboutHeroProps> = ({ heroSectionRef }) => {
  return (
    <HeroSection ref={heroSectionRef}>
      <HeroVideo autoPlay muted loop>
        <source src={bgHeroVideoMP4} type="video/mp4" />
        <source src={bgHeroVideoWEBM} type="video/webm" />
      </HeroVideo>

      <HeroImage src={heroImage} alt="hero image" />

      <Container>
        <MainHeader>
          <MainTitle>Lushwood Haven</MainTitle>
        </MainHeader>
      </Container>

      <ScrollDownIconWrapper>
        <ScrollDownBtn $sizex="40px" $sizey="70px" />
      </ScrollDownIconWrapper>
    </HeroSection>
  );
};
export default AboutHero;
