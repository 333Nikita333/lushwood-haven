import styled, { keyframes } from 'styled-components';

export const FormContainer = styled.div`
  max-width: 400px;
  background-color: #222;
  padding: 30px 10px;
  border: 3px solid ${({ theme }) => theme.colors.bookRoomBtnBgc};
  border-radius: 20px;

  & form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const textAnimation = keyframes`
  0% {  
      transform: translateY(0);
  }
  20% {  
      transform: translateY(-1em);
  }
  40% {  
      transform: translateY(0.5em);
  }
  60% {
      transform: translateY(-0.25em);
  }
  80% {  
      transform: translateY(0);
  } 
`;
export const Heading = styled.span`
  display: block;
  color: #bbb;
  margin-bottom: 20px;
  font-size: calc(var(--index) * 1.8);
  font-weight: 800;
  text-align: center;
  animation: ${textAnimation} 1.5s ease-in-out infinite;

  ${FormContainer}:focus-within & {
    animation: paused;
  }
`;
export const FormGroup = styled.div`
  width: 100%;
  text-align: center;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const Input = styled.input`
  width: 100%;
  color: #fff;
  background-color: #002733;
  border: none;
  outline: none;
  padding: 10px;
  font-weight: bold;
  font-style: italic;
  transition: all 0.2s ease-in-out;
  border-left: 1px solid transparent;

  &::placeholder {
    font-style: normal;
    color: #bbb;
  }
  &:focus {
    border-left: 5px solid ${({ theme }) => theme.colors.bookRoomBtnBgc};
  }
`;
export const ErrorText = styled.span`
  color: red;
  font-size: 14px;
`;
export const TextArea = styled.textarea`
  width: 100%;
  max-height: 150px;
  padding: 10px;
  font-weight: bold;
  font-style: italic;
  border: none;
  color: #fff;
  background-color: #002733;
  resize: none;
  transition: all 0.2s ease-in-out;

  &::placeholder {
    font-style: normal;
    color: #bbb;
  }
  &:focus {
    border-left: 5px solid ${({ theme }) => theme.colors.bookRoomBtnBgc};
  }
`;

export const SendButton = styled.button`
  position: relative;
  padding: 0.9rem 2rem;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0.05rem;
  color: #333;
  background: ${({ theme }) => theme.colors.bookRoomBtnBgc};
  border: none;
  border-radius: 500px;
  overflow: hidden;

  &:active {
    box-shadow: inset 4px 4px 12px #000, inset -4px -4px 12px #000;
  }
  & span {
    position: relative;
    z-index: 10;
    transition: color 0.4s ease-in-out;
  }
  &:hover span {
    color: #000;
  }
  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  &::before {
    content: '';
    background: #fff;
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }
  &:hover::before {
    transform: translate3d(100%, 0, 0);
  }
`;
