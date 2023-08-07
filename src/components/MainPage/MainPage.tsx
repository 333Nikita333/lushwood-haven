import { FC, useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Hero from '../Hero';
import MainSection from '../MainSection';
import { Content } from './MainPage.styled';
import { SoundThemeType } from '../../types';
import useSoundEffect from '../../hooks/useSoundEffect';
import Header from '../Header';

const MainPage: FC = () => {
  const [soundTheme, setSoundTheme] = useState<SoundThemeType>('forest');
  const { isMuted, toggleMute } = useSoundEffect(soundTheme);
  const [viewportHeight, setViewportHeight] = useState<number>(0);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    if (scrollPosition > viewportHeight / 1.6) {
      setSoundTheme('dungeon');
    } else {
      setSoundTheme('forest');
    }
  }, [scrollPosition, viewportHeight]);

  useEffect(() => {
    setViewportHeight(window.innerHeight);
    const handleScroll = (): void => {
      document.documentElement.style.setProperty(
        '--scrollTop',
        `${window.scrollY}px`
      );
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    scroll.scrollTo(document.getElementById('content')?.offsetTop || 0, {
      duration: 750,
      delay: 0,
      smooth: true,
      offset: -70,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header isMuted={isMuted} toggleMute={toggleMute} />
      <Content id="content">
        <Hero />
        <MainSection />
      </Content>
    </>
  );
};
export default MainPage;
