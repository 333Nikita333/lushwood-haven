import { FC } from 'react';
import { imagesAbout } from '../../data/photos';
import { bgAboutVideoMP4, bgAboutVideoWEBM } from '../../data/sounds';
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

const AboutHero: FC<IAboutHeroProps> = ({ heroSectionRef }) => {
  return (
    <HeroSection ref={heroSectionRef}>
      <HeroVideo autoPlay muted loop>
        <source src={bgAboutVideoMP4} type="video/mp4" />
        <source src={bgAboutVideoWEBM} type="video/webm" />
      </HeroVideo>

      <HeroImage src={imagesAbout.heroImage.src} alt={imagesAbout.heroImage.alt} />

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
