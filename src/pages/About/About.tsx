import { FC } from 'react';
import {
  Hero,
  MainHeader,
  MainTitle,
  // AboutWrapper,
  Container,
  HeroSection,
  Portfolio,
  ContainerPortfolio,
  Gallery,
  GalleryLeft,
  GalleryRight,
  TextBlock,
  GalleryItem,
  TextBlockH,
  TextBlockP,
  AboutWrapper,
} from './About.styled';

const heroImage = 'images/about_images/hero.png';
const galleryItem1 = 'images/about_images/examples/1.jpg';
const galleryItem2 = 'images/about_images/examples/2.jpg';
const galleryItem3 = 'images/about_images/examples/3.jpg';
const galleryItem4 = 'images/about_images/examples/4.jpg';
const galleryItem5 = 'images/about_images/examples/5.jpg';
const galleryItem6 = 'images/about_images/examples/6.jpg';

const About: FC = () => {
  return (
    <AboutWrapper>
      <HeroSection>
        <Hero src={heroImage} alt="hero image" />

        <Container>
          <MainHeader>
            <MainTitle>creative scroll</MainTitle>
          </MainHeader>
        </Container>
      </HeroSection>

      <Portfolio>
        <ContainerPortfolio>
          <Gallery>
            <GalleryLeft>
              <GalleryItem src={galleryItem1} alt="example 1" />
              <GalleryItem src={galleryItem2} alt="example 2" />
              
              <TextBlock>
                <TextBlockH>
                  Creative floating scroll with amazing parallax effect
                </TextBlockH>
                <TextBlockP>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor amount scrolling.
                </TextBlockP>
              </TextBlock>
              
              <GalleryItem src={galleryItem6} alt="example 6" />
            </GalleryLeft>
            
            <GalleryRight>
            <TextBlock>
                <TextBlockH>
                  Creative floating scroll with amazing parallax effect
                </TextBlockH>
                <TextBlockP>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor amount scrolling.
                </TextBlockP>
                
                <GalleryItem src={galleryItem4} alt="example 4" />
                <GalleryItem src={galleryItem5} alt="example 5" />
                <GalleryItem src={galleryItem3} alt="example 3" />
              </TextBlock>
            </GalleryRight>
          </Gallery>
        </ContainerPortfolio>
      </Portfolio>
    </AboutWrapper>
  );
};

export default About;
