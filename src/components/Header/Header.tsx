import { FC, useCallback, useEffect, useState } from 'react';
import { FaHouseUser } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdBorderColor } from 'react-icons/md';
import Modal from '../../utils/Modal';
import { useScroll } from '../../utils/ScrollContext';
import AuthForm from '../AuthForm';
import ButtonOpenModal from '../ButtonOpenModal';
import MobileMenuHeader from '../MobileMenuHeader';
import Navigation from '../Navigation';
import OrderForm from '../OrderForm';
import ProfileWindow from '../ProfileWindow';
import { HeaderContainer, ListButtons, MobileMenuButton } from './Header.styled';
import useStore from '../../store';

type ModalState = 'profileModal' | 'authModal' | 'orderModal';

const Header: FC = () => {
  const [modals, setModals] = useState<Record<ModalState, boolean>>({
    profileModal: false,
    authModal: false,
    orderModal: false,
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(window.scrollY);

  const { isLoggedIn } = useStore(state => ({
    isLoggedIn: state.isLoggedIn,
  }));

  const { toggleScroll } = useScroll();

  const handleScroll = useCallback((): void => {
    if (Object.values(modals).some(Boolean)) return;

    const currentScrollPos: number = window.scrollY;
    const isScrollingUp: boolean = currentScrollPos < prevScrollPos;

    setIsHeaderVisible(isScrollingUp);
    setPrevScrollPos(currentScrollPos);
  }, [modals, prevScrollPos]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const toggleModal = useCallback(
    (modal: ModalState) => {
      setModals(prev => ({
        ...prev,
        [modal]: !prev[modal],
      }));
      toggleScroll(modals[modal]);
    },
    [toggleScroll, modals]
  );

  return (
    <HeaderContainer
      $isMobileMenuOpen={isMobileMenuOpen}
      style={{
        transform: isHeaderVisible ? 'translateX(0)' : 'translateX(-100%)',
      }}
    >
      {!isMobileMenuOpen && (
        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <GiHamburgerMenu size={40} />
        </MobileMenuButton>
      )}

      <MobileMenuHeader
        isMobileMenuOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <Navigation />

      <ListButtons>
        {!isLoggedIn ? (
          <ButtonOpenModal
            toggleModalForm={() => toggleModal('authModal')}
            text="Log in"
            icon={<FiLogIn size={30} />}
          />
        ) : (
          <>
            <ButtonOpenModal
              toggleModalForm={() => toggleModal('profileModal')}
              text="My profile"
              icon={<FaHouseUser size={30} />}
            />

            <ButtonOpenModal
              toggleModalForm={() => toggleModal('orderModal')}
              text="Book a room"
              icon={<MdBorderColor size={30} />}
            />
          </>
        )}
      </ListButtons>

      <Modal isOpen={modals.authModal} onClose={() => toggleModal('authModal')}>
        <AuthForm />
      </Modal>

      <Modal isOpen={modals.profileModal} onClose={() => toggleModal('profileModal')}>
        <ProfileWindow />
      </Modal>

      <Modal isOpen={modals.orderModal} onClose={() => toggleModal('orderModal')}>
        <OrderForm />
      </Modal>
    </HeaderContainer>
  );
};

export default Header;
