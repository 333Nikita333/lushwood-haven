import styled, { keyframes } from 'styled-components';

const scaleIn = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  padding: 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  animation: ${scaleIn} 0.5s ease-in-out;
`;
