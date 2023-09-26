import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FC, useLayoutEffect, useRef } from 'react';
import AboutHero from '../../components/AboutHero';
import AboutSection from '../../components/AboutSection';
import { AboutWrapper } from './About.styled';

const AboutPage: FC = () => {
  const heroSectionRef = useRef<HTMLDivElement | null>(null);
  const galleryLeftRef = useRef<HTMLDivElement | null>(null);
  const galleryRightRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.refresh();

      gsap.fromTo(
        heroSectionRef.current,
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: '50px',
            end: '820px',
            scrub: true,
          },
        }
      );

      const itemsL = galleryLeftRef.current!.querySelectorAll('.gallery__item');

      itemsL.forEach(item => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -150 },
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
          { opacity: 0, x: 150 },
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

  }, []);

  return (
    <AboutWrapper>
      <AboutHero heroSectionRef={heroSectionRef} />
      <AboutSection
        galleryLeftRef={galleryLeftRef}
        galleryRightRef={galleryRightRef}
      />
    </AboutWrapper>
  );
};

export default AboutPage;
