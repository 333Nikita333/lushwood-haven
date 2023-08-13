import { FC, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  AboutWrapper,
  Container,
  ContainerPortfolio,
  Gallery,
  GalleryImage,
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
  const heroSectionRef = useRef<HTMLDivElement | null>(null);
  const galleryLeftRef = useRef<HTMLDivElement | null>(null);
  const galleryRightRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (ScrollTrigger.isTouch !== 1) {
      ScrollTrigger.refresh();

      gsap.fromTo(
        heroSectionRef.current,
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: 'center',
            end: '820px',
            scrub: true,
          },
        }
      );

      const itemsL = galleryLeftRef.current!.querySelectorAll('.gallery__item');

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

      const itemsR =
        galleryRightRef.current!.querySelectorAll('.gallery__item');

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
  }, []);

  return (
    <AboutWrapper>
      <HeroSection ref={heroSectionRef}>
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
            <GalleryLeft ref={galleryLeftRef}>
              <GalleryImage
                className="gallery__item"
                src={galleryItem1}
                alt="example 1"
              />
              <GalleryImage
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

              <GalleryImage
                className="gallery__item"
                src={galleryItem6}
                alt="example 6"
              />
            </GalleryLeft>

            <GalleryRight ref={galleryRightRef}>
              <TextBlock className="gallery__item">
                <TextBlockH>
                  Creative floating scroll with amazing parallax effect
                </TextBlockH>
                <TextBlockP>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor amount scrolling.
                </TextBlockP>
              </TextBlock>
              <GalleryImage
                className="gallery__item"
                src={galleryItem4}
                alt="example 4"
              />
              <GalleryImage
                className="gallery__item"
                src={galleryItem5}
                alt="example 5"
              />
              <GalleryImage
                className="gallery__item"
                src={galleryItem3}
                alt="example 3"
              />
            </GalleryRight>
          </Gallery>
        </ContainerPortfolio>
      </Portfolio>
    </AboutWrapper>
  );
};

export default About;
