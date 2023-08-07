import { FC, useState, useEffect } from 'react';
import { HeaderProps } from '../../types/interfaces';
import SoundBtn from '../SoundBtn';
import { HeaderContainer, LinkList, LinkListItem } from './Header.styled';

const Header: FC<HeaderProps> = ({ isMuted, toggleMute }) => {
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
      <LinkList>
        <LinkListItem>
          <a href="">Home</a>
        </LinkListItem>
        <LinkListItem>
          <a href="">Collections</a>
        </LinkListItem>
        <LinkListItem>
          <a href="">Gallery</a>
        </LinkListItem>
        <SoundBtn isMuted={isMuted} toggleMute={toggleMute} />
      </LinkList>
    </HeaderContainer>
  );
};

export default Header;
