import { FC, useCallback, useEffect } from 'react';
import { ModalProps } from '../../types';
import { createPortal } from 'react-dom';
import { Backdrop, ModalContainer } from './Modal.styled';

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

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

  const handleBackdropClick = (event: React.MouseEvent) => {
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
        <button onClick={onClose}>Close</button>
      </ModalContainer>
    </Backdrop>,
    document.getElementById('modal-root')!
  );
};

export default Modal;
