import { FC, useEffect, useState } from 'react';
import Navigation from '../Navigation';
import { HeaderContainer } from './Header.styled';
import Modal from '../Modal';

const Header: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
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

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <HeaderContainer
      style={{
        transform: isHeaderVisible ? 'translateX(0)' : 'translateX(-100%)',
      }}
    >
      <Navigation />

      <button onClick={toggleModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        {/* Сюда можно передать любой компонент */}
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </Modal>
    </HeaderContainer>
  );
};

export default Header;
