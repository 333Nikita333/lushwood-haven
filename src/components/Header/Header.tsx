import { FC, useEffect, useState } from 'react';
import Navigation from '../Navigation';
import { HeaderContainer } from './Header.styled';

const Header: FC = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(window.scrollY);

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollPos: number = window.scrollY;
      const isScrollingUp: boolean = currentScrollPos < prevScrollPos;

      if (isScrollingUp) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <HeaderContainer
      style={{
        transform: isHeaderVisible ? 'translateY(0)' : 'translateY(-100%)',
      }}
    >
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
