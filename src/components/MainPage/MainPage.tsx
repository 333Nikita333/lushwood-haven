import { FC, useEffect } from 'react';
import { animateScroll as scroll} from 'react-scroll';
import Header from '../Header';
import MainSection from '../MainSection';
import { Content } from './MainPage.styled';

const MainPage: FC = () => {
  useEffect(() => {
    const handleScroll = (): void => {
      document.documentElement.style.setProperty('--scrollTop', `${window.scrollY}px`);
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
    <Content id="content">
      <Header />
      <MainSection />
    </Content>
  );
};
export default MainPage;
