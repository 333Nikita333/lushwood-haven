import { FC, useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Modal from '../../utils/Modal';
import BookRoomButton from '../BookRoomButton';
import MobileMenuHeader from '../MobileMenuHeader';
import Navigation from '../Navigation';
import OrderForm from '../OrderForm';
import { HeaderContainer, MobileMenuButton } from './Header.styled';

const Header: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(window.scrollY);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const toggleModal = (): void => {
    setIsModalOpen(prevState => !prevState);
  };

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(prevState => !prevState);
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

      <BookRoomButton toggleModal={toggleModal} />
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <OrderForm />
      </Modal>
    </HeaderContainer>
  );
};

export default Header;
