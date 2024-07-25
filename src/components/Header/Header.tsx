import { FC, useEffect, useState, useCallback, Dispatch, SetStateAction } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Modal from '../../utils/Modal';
import { useScroll } from '../../utils/ScrollContext';
import AuthForm from '../AuthForm';
import BookRoomButton from '../BookRoomButton';
import MobileMenuHeader from '../MobileMenuHeader';
import Navigation from '../Navigation';
import OrderForm from '../OrderForm';
import ProfileWindow from '../ProfileWindow';
import { HeaderContainer, MobileMenuButton } from './Header.styled';

const Header: FC = () => {
  const [isModalFormOpen, setIsModalFormOpen] = useState<boolean>(false);
  const [isWindowProfileOpen, setIsWindowProfileOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isAuthFormOpen, setIsAuthFormOpen] = useState<boolean>(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(window.scrollY);

  const { toggleScroll } = useScroll();

  const handleScroll = useCallback((): void => {
    if (isModalFormOpen || isWindowProfileOpen) return;

    const currentScrollPos: number = window.scrollY;
    const isScrollingUp: boolean = currentScrollPos < prevScrollPos;

    setIsHeaderVisible(isScrollingUp);
    setPrevScrollPos(currentScrollPos);
  }, [isModalFormOpen, isWindowProfileOpen, prevScrollPos]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const toggleState = useCallback(
    (stateSetter: Dispatch<SetStateAction<boolean>>, state: boolean): void => {
      stateSetter(!state);
      toggleScroll(state);
    },
    [toggleScroll]
  );

  const toggleModalForm = (): void => toggleState(setIsModalFormOpen, isModalFormOpen);
  const toggleMobileMenu = (): void => toggleState(setIsMobileMenuOpen, isMobileMenuOpen);
  const toggleWindowProfile = (): void => toggleState(setIsWindowProfileOpen, isWindowProfileOpen);
  const toggleAuthForm = (): void => toggleState(setIsAuthFormOpen, isAuthFormOpen);

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
        <button onClick={toggleAuthForm} type="button">
          OPEN AUTH
        </button>
        <BookRoomButton toggleModalForm={toggleModalForm} />
      </div>

      <Modal isOpen={isAuthFormOpen} onClose={toggleAuthForm}>
        <AuthForm />
      </Modal>

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
