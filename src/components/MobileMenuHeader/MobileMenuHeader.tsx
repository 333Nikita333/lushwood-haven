import { FC, useEffect } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import useStore from '../../store';
import { IMobileMenuProps } from '../../types';
import NavLinkItem from '../NavLinkItem';
import { listLinkNames } from '../Navigation/Navigation';
import { CloseButton, LinkItem, ListLinks, MobileMenuContainer } from './MobileMenuHeader.styled';

const MobileMenuHeader: FC<IMobileMenuProps> = ({ isMobileMenuOpen, onClose }) => {
  const { isLoggedIn } = useStore(state => ({ isLoggedIn: state.isLoggedIn }));

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  return (
    <MobileMenuContainer $isMobileMenuOpen={isMobileMenuOpen}>
      <CloseButton onClick={onClose}>
        <AiOutlineCloseCircle />
      </CloseButton>
      <ListLinks onClick={onClose}>
        {listLinkNames.map(linkName =>
          !isLoggedIn && linkName === 'Services' ? null : (
            <LinkItem key={linkName}>
              <NavLinkItem linkName={linkName.toLowerCase()} />
            </LinkItem>
          )
        )}
      </ListLinks>
    </MobileMenuContainer>
  );
};

export default MobileMenuHeader;
