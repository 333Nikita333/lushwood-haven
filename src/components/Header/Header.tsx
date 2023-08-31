import { FC, useEffect, useState } from 'react';
import Navigation from '../Navigation';
import {
  HeaderContainer,
  MobileMenuButton,
  OrderButton,
} from './Header.styled';
import Modal from '../Modal';
import OrderForm from '../OrderForm';
import { GiHamburgerMenu } from 'react-icons/gi';
import MobileMenuHeader from '../MobileMenuHeader';

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

  const toggleModal = (): void => {
    setIsModalOpen(prevState => !prevState);
  };

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  return (
    <HeaderContainer
      style={{
        transform: isHeaderVisible ? 'translateX(0)' : 'translateX(-100%)',
      }}
    >
      {!isMobileMenuOpen && (
        <MobileMenuButton onClick={toggleMobileMenu}>
          <GiHamburgerMenu size={40} />
        </MobileMenuButton>
      )}

      <MobileMenuHeader isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />

      <Navigation />

      <OrderButton onClick={toggleModal}>Book a room</OrderButton>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <OrderForm />
      </Modal>
    </HeaderContainer>
  );
};

export default Header;
