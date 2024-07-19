import { FC, useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IModalProps } from '../../types';
import { Backdrop, ButtonClose, ModalContainer } from './Modal.styled';

const Modal: FC<IModalProps> = ({ isOpen, onClose, children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(isOpen);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsAnimating(true);
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  useEffect(() => {
    if (!isOpen) {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = 'auto';
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleBackdropClick = (event: React.MouseEvent): void => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isVisible) {
    return null;
  }

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContainer $isanimating={isAnimating ? 1 : 0}>
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
