import { FC, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  AboutWrapper,
  Container,
  ContainerPortfolio,
  Content,
  Gallery,
  GalleryItem,
  GalleryLeft,
  GalleryRight,
  Hero,
  HeroSection,
  MainHeader,
  MainTitle,
  Portfolio,
  TextBlock,
  TextBlockH,
  TextBlockP,
} from './About.styled';

const heroImage = 'images/about_images/hero.png';
const galleryItem1 = 'images/about_images/examples/1.jpg';
const galleryItem2 = 'images/about_images/examples/2.jpg';
const galleryItem3 = 'images/about_images/examples/3.jpg';
const galleryItem4 = 'images/about_images/examples/4.jpg';
const galleryItem5 = 'images/about_images/examples/5.jpg';
const galleryItem6 = 'images/about_images/examples/6.jpg';

const About: FC = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (ScrollTrigger.isTouch !== 1) {
      gsap.fromTo(
        '.hero-section',
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: '.hero-section',
            start: 'center',
            end: '820',
            scrub: true,
          },
        }
      );

      let itemsL = gsap.utils.toArray(
        '.gallery__left .gallery__item'
      ) as HTMLElement[];

      itemsL.forEach(item => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: item,
              start: '-850px',
              end: '-100px',
              scrub: true,
            },
          }
        );
      });

      let itemsR = gsap.utils.toArray(
        '.gallery__right .gallery__item'
      ) as HTMLElement[];

      itemsR.forEach(item => {
        gsap.fromTo(
          item,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: item,
              start: '-750px',
              end: 'top',
              scrub: true,
            },
          }
        );
      });
    }

    ScrollTrigger.refresh();
  }, []);

  return (
    <AboutWrapper className="wrapper">
      <Content className="content">
        <HeroSection className="hero-section">
          <Hero
            data-speed="0.6"
            className="hero"
            src={heroImage}
            alt="hero image"
          />

          <Container>
            <MainHeader data-speed="0.75">
              <MainTitle>creative scroll</MainTitle>
            </MainHeader>
          </Container>
        </HeroSection>

        <Portfolio>
          <ContainerPortfolio>
            <Gallery>
              <GalleryLeft data-speed=".9" className="gallery__left">
                <GalleryItem
                  className="gallery__item"
                  src={galleryItem1}
                  alt="example 1"
                />
                <GalleryItem
                  className="gallery__item"
                  src={galleryItem2}
                  alt="example 2"
                />

                <TextBlock className="gallery__item">
                  <TextBlockH>
                    Creative floating scroll with amazing parallax effect
                  </TextBlockH>
                  <TextBlockP>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor amount scrolling.
                  </TextBlockP>
                </TextBlock>

                <GalleryItem
                  className="gallery__item"
                  src={galleryItem6}
                  alt="example 6"
                />
              </GalleryLeft>

              <GalleryRight data-speed="1.1" className="gallery__right">
                <TextBlock className="gallery__item">
                  <TextBlockH>
                    Creative floating scroll with amazing parallax effect
                  </TextBlockH>
                  <TextBlockP>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor amount scrolling.
                  </TextBlockP>
                </TextBlock>
                <GalleryItem
                  className="gallery__item"
                  src={galleryItem4}
                  alt="example 4"
                />
                <GalleryItem
                  className="gallery__item"
                  src={galleryItem5}
                  alt="example 5"
                />
                <GalleryItem
                  className="gallery__item"
                  src={galleryItem3}
                  alt="example 3"
                />
              </GalleryRight>
            </Gallery>
          </ContainerPortfolio>
        </Portfolio>
      </Content>
    </AboutWrapper>
  );
};

export default About;
