import styled from 'styled-components';
import { bgImageAbout, modalBgImage } from '../../data/photos';

export const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 420px;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 3px 3px 85px 10px rgba(186, 181, 181, 1);
  background-image: url(${modalBgImage});
  background-size: cover;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

export const Checkbox = styled.input`
  display: none;
`;

export const Login = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Register = styled.div`
  background: #eee;
  border-radius: 60% / 10%;
  transition: 0.8s ease-in-out;

  background-image: url(${bgImageAbout});
  background-size: 100px;
  background-color: #8b451380;
  background-blend-mode: multiply;

  ${Checkbox}:checked ~ & {
    transform: translateY(-65%);
  }
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fontWeights.secondary};
  transition: 0.5s ease-in-out;
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);

  &:hover {
    cursor: url(/images/pointer-hover.png), auto;
  }
`;
export const LabelLogin = styled(Label)`
  margin: 40px 0 0;
  color: ${({ theme }) => theme.colors.secondaryColor};

  ${Checkbox}:checked ~ ${Login} & {
    transform: scale(0.6);
    margin: 0;
  }
`;

export const LabelRegister = styled(Label)`
  color: #ebebeb;
  transform: scale(0.6);

  ${Checkbox}:checked ~ ${Register} & {
    color: #ebebeb;
    transform: scale(1);
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 30px;
`;
export const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 15px;
  padding: 10px;
  background-color: #ccc;
  box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.3);
  transition: 300ms ease-in-out;

  &::placeholder {
    color: #5f5f5f;
  }

  &:focus {
    transform: scale(1.05);
    font-weight: ${({ theme }) => theme.fontWeights.secondary};
    background-color: white;
    box-shadow: 13px 13px 100px #969696, -13px -13px 100px #ffffff;
  }
`;

export const TogglePasswordButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.secondaryColor};
`;

export const Button = styled.button`
  min-width: 100px;
  height: 40px;
  margin: 25px auto;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.secondary};
  border: none;
  border-radius: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  transition: all 0.3s ease-in;
`;

export const ButtonLogin = styled(Button)`
  color: #ebebeb;
  background-image: url(${bgImageAbout});
  background-size: 50px;
  background-color: ${({ theme }) => theme.colors.secondaryColor + '80'};
  background-blend-mode: multiply;

  &:hover {
    box-shadow: 0 0 4px 2px #ae8d6f90, 0 0 13px 4px #ae8d6f90, 0 0 23px 4px #ae8d6f90;
  }
  &:active {
    box-shadow: rgba(93, 77, 50, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    transform: scale(0.9);
  }
`;

export const ButtonRegister = styled(Button)`
  background-image: url(${modalBgImage});
  background-size: cover;
  color: #000;

  &:hover {
    box-shadow: 0 0 4px 2px #b3b1b090, 0 0 13px 4px #b3b1b090, 0 0 23px 4px #b3b1b090;
  }
  &:active {
    box-shadow: rgba(80, 78, 74, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    transform: scale(0.9);
  }
`;

export const ErrorMessage = styled.p`
  position: absolute;
  left: 0;
  top: -20px;
  color: red;

  &::before {
    content: '⚠ ';
    display: inline;
    font-size: 60%;
  }
`;
