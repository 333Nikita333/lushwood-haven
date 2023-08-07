import { FC } from 'react';
import { HeaderProps } from '../../types/interfaces';
import SoundBtn from '../SoundBtn';
import { HeaderContainer, LinkList, LinkListItem } from './Header.styled';

const Header: FC<HeaderProps> = ({ isMuted, toggleMute }) => {
  return (
    <HeaderContainer>
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
