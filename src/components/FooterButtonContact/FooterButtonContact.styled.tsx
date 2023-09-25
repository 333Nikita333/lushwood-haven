import styled from 'styled-components';

export const ButtonSubmit = styled.button`
  position: relative;
  overflow: hidden;
  height: 50px;
  width: calc(var(--index) * 10);
  border: none;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
    rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;

  &:hover {
    box-shadow: 0.5px 0.5px 150px #252525;
  }
  &::after {
    content: 'Contact Us';
    height: 50px;
    width: calc(var(--index) * 10);
    position: absolute;
    top: 0%;
    left: 0%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.bookRoomBtnBgc};
    transform: translateY(50px);
    transition: all 0.5s ease-in-out;
  }
  &:hover::after {
    transform: translateY(0) scale(1.2);
  }
  &::before {
    content: 'Have questions?';
    height: 50px;
    width: calc(var(--index) * 10);
    position: absolute;
    top: 0%;
    left: 0%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    color: #000;
    background-color: #fff;
    transition: all 0.5s ease-in-out;
    transform: translateY(0px) scale(1.2);
  }
  &:hover::before {
    transform: translateY(-50px) scale(0) rotate(120deg);
  }
`;
