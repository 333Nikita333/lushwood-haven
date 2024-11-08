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

const scaleOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  z-index: 11;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.paddings.small};
  background-color: rgba(0, 0, 0, 0.5);
  transition: background-color 0.5s ease-in-out;

  @media screen and (min-width: 481px) {
    padding: ${({ theme }) => theme.paddings.big};
  }
`;

export const ModalContainer = styled.div<{ $isanimating: number }>`
  position: relative;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  animation: ${({ $isanimating }) => ($isanimating ? scaleIn : scaleOut)} 0.3s ease-in-out;
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
    background-color: transparent;
    transition: transform 0.3s ease-in-out;
  }

  &:hover > svg {
    transform: scale(1.1);
  }
`;
