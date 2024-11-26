import { FC, useEffect } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import useStore from '../../store';
import { IMobileMenuProps } from '../../types';
import NavLinkItem from '../NavLinkItem';
import { listLinkNames } from '../Navigation/Navigation';
import { CloseButton, LinkItem, ListLinks, MobileMenuContainer } from './MobileMenuHeader.styled';

const MobileMenuHeader: FC<IMobileMenuProps> = ({ isMobileMenuOpen, onClose }) => {
  const { isLoggedIn } = useStore(state => ({ isLoggedIn: state.isLoggedIn }));

  const toggleBodyScroll = (disable: boolean): void => {
    document.body.style.overflow = disable ? 'hidden' : '';
    document.body.style.position = disable ? 'fixed' : '';
    document.body.style.width = disable ? '100%' : '';
  };

  useEffect(() => {
    toggleBodyScroll(isMobileMenuOpen);

    return () => toggleBodyScroll(false);
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
