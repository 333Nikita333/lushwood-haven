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
  position: relative;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  animation: ${scaleIn} 0.5s ease-in-out;
`;

export const ButtonClose = styled.button`
  position: absolute;
  z-index: 1000;
  top: 15px;
  right: 15px;
  background-color: transparent;
  border: none;
  border-radius: 45px;
  font-size: ${({ theme }) => theme.fontSizes.primary};
  margin-bottom: 20px;
  margin-left: auto;
  transition: color 0.3s ease-in-out, opacity 3s ease-in-out;

  & > svg {
    width: 30px;
    height: 30px;
    border-radius: 45px;
    border: none;
    color: #000000;
    background-color: transperent;
    transition: transform 0.3s ease-in-out;
  }
  &:hover > svg {
    transform: scale(1.1);
  }
`;
