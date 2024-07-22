import { FC, useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Modal from '../../utils/Modal';
import { useScroll } from '../../utils/ScrollContext';
import BookRoomButton from '../BookRoomButton';
import MobileMenuHeader from '../MobileMenuHeader';
import Navigation from '../Navigation';
import OrderForm from '../OrderForm';
import ProfileWindow from '../ProfileWindow';
import { HeaderContainer, MobileMenuButton } from './Header.styled';

const Header: FC = () => {
  const [isModalFormOpen, setIsModalFormOpen] = useState<boolean>(false);
  const [isWindowProfileOpen, setIsWindowProfileOpen] = useState<boolean>(false); //! переключить на false
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(window.scrollY);

  const { toggleScroll } = useScroll();

  useEffect(() => {
    const handleScroll = (): void => {
      if (isModalFormOpen || isWindowProfileOpen) return;

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
  }, [prevScrollPos, isModalFormOpen, isWindowProfileOpen]);

  const toggleModalForm = (): void => {
    setIsModalFormOpen(prevState => !prevState);
    toggleScroll(isModalFormOpen);
  };

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(prevState => !prevState);
    toggleScroll(isMobileMenuOpen);
  };

  const toggleWindowProfile = (): void => {
    setIsWindowProfileOpen(prevState => !prevState);
    toggleScroll(isWindowProfileOpen);
  };

  return (
    <HeaderContainer
      $isMobileMenuOpen={isMobileMenuOpen}
      style={{
        transform: isHeaderVisible ? 'translateX(0)' : 'translateX(-100%)',
      }}
    >
      {!isMobileMenuOpen && (
        <MobileMenuButton onClick={toggleMobileMenu}>
          <GiHamburgerMenu size={40} />
        </MobileMenuButton>
      )}

      <MobileMenuHeader isMobileMenuOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />

      <Navigation />

      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', marginLeft: 'auto' }}>
        <button onClick={toggleWindowProfile} type="button">
          OPEN PROFILE
        </button>
        <BookRoomButton toggleModalForm={toggleModalForm} />
      </div>

      <Modal isOpen={isWindowProfileOpen} onClose={toggleWindowProfile}>
        <ProfileWindow />
      </Modal>

      <Modal isOpen={isModalFormOpen} onClose={toggleModalForm}>
        <OrderForm />
      </Modal>
    </HeaderContainer>
  );
};

export default Header;
