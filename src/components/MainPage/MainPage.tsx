import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { FC, useLayoutEffect, useRef } from 'react';
import Header from '../Header';
import MainSection from '../MainSection';
import { Content, Wrapper } from './MainPage.styled';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const MainPage: FC = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
    });
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <Content ref={contentRef}>
        <Header />
        <MainSection />
      </Content>
    </Wrapper>
  );
};
export default MainPage;
