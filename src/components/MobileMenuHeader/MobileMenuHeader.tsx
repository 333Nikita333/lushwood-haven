import { FC } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IMobileMenuProps } from '../../types';
import NavLinkItem from '../NavLinkItem';
import { listLinkNames } from '../Navigation/Navigation';
import { CloseButton, LinkItem, ListLinks, MobileMenuContainer } from './MobileMenuHeader.styled';

const MobileMenuHeader: FC<IMobileMenuProps> = ({ isMobileMenuOpen, onClose }) => {
  return (
    <MobileMenuContainer $isMobileMenuOpen={isMobileMenuOpen}>
      <CloseButton onClick={onClose}>
        <AiOutlineCloseCircle />
      </CloseButton>
      <ListLinks onClick={onClose}>
        {listLinkNames.map(linkName => (
          <LinkItem key={linkName}>
            <NavLinkItem linkName={linkName.toLowerCase()} />
          </LinkItem>
        ))}
      </ListLinks>
    </MobileMenuContainer>
  );
};

export default MobileMenuHeader;
