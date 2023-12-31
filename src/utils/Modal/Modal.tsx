import { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IModalProps } from '../../types';
import { Backdrop, ButtonClose, ModalContainer } from './Modal.styled';

const Modal: FC<IModalProps> = ({ isOpen, onClose, children }) => {
  const handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const handleBackdropClick = (event: React.MouseEvent): void => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContainer>
        {children}
        <ButtonClose onClick={onClose}>
          <AiOutlineCloseCircle />
        </ButtonClose>
      </ModalContainer>
    </Backdrop>,
    document.getElementById('modal-root')!
  );
};

export default Modal;
