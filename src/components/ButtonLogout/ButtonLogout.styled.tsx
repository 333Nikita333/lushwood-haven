import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 45px;
  height: 45px;
  margin-right: 20px;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  transition-duration: 0.3s;

  &:hover {
    width: 125px;
    border-radius: 40px;
    transition-duration: 0.3s;
  }

  &:active {
    box-shadow: inset 1px 1px 10px #333;
    transition-duration: 0.3s;
  }

  @media (hover: none) and (pointer: coarse) {
    &:focus {
      width: 125px;
      border-radius: 40px;
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition-duration: 0.3s;

  ${Button}:hover & {
    padding-left: 20px;
    width: 30%;
    transition-duration: 0.3s;
  }

  & > svg {
    width: 20px;
    height: 20px;
  }

  @media (hover: none) and (pointer: coarse) {
    ${Button}:focus & {
      padding-left: 20px;
      width: 30%;
      transition-duration: 0.3s;
    }
  }
`;

export const Text = styled.p`
  position: absolute;
  right: 0%;
  width: 0%;
  opacity: 0;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.secondary};
  color: #000000;
  transition-duration: 0.3s;

  ${Button}:hover & {
    opacity: 1;
    width: 70%;
    padding-right: 10px;
    transition-duration: 0.3s;
  }

  @media (hover: none) and (pointer: coarse) {
    ${Button}:focus & {
      opacity: 1;
      width: 70%;
      padding-right: 10px;
      transition-duration: 0.3s;
    }
  }
`;
