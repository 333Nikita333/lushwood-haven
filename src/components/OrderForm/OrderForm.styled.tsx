import PhoneInput from 'react-phone-input-2';
import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 500px;
  max-height: 400px;
  padding: 20px;
  overflow-y: auto;
  color: ${({ theme }) => theme.colors.primaryBrown};
  background-color: ${({ theme }) => theme.colors.primary};
  background-image: url('images/about_images/bg-image-modal.png');
  background-size: cover;
  border-radius: 16px;
`;
export const FormTitle = styled.h3`
  margin-bottom: 10px;
  text-align: center;
  font-size: calc(var(--index) * 2);
  color: #000000;
  text-shadow: 7px 7px 5px rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
`;
export const OrderFormContainer = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;

  & input {
    width: 100%;
    padding: 5px;
    border-radius: 8px;
  }
  & .form__field {
    width: 100%;
    margin-bottom: 5px;
    padding: 7px;
    font-size: ${({ theme }) => theme.fontSizes.primary};
    background: transparent;
    outline: 0;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primaryBrown};
    transition: border-color 0.2s ease-in-out;
  }
  & .form__field::placeholder {
    color: transparent;
  }

  & .form__field:placeholder-shown ~ .form__label {
    top: 30px;
    font-size: ${({ theme }) => theme.fontSizes.primary};
    cursor: text;
  }

  & .form__label {
    position: absolute;
    top: 0;
    display: block;
    font-size: 17px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primaryBrown};
    pointer-events: none;
    transition: 0.2s ease-in-out;
  }

  & .form__field:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(
      to right,
      #116399,
      ${({ theme }) => theme.colors.bookRoomBtnBgc}
    );
    border-image-slice: 1;
  }

  & .form__field:focus ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    font-size: 17px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.bookRoomBtnBgc};
    transition: 0.2s ease-in-out;
  }

  & .form__field:required,
  & .form__field:invalid {
    box-shadow: none;
  }
`;

export const FormGroup = styled.div`
  position: relative;
  padding: 20px 0 0;
  width: 100%;
  max-width: 220px;

  & > .react-tel-input:focus-within + label {
    color: ${({ theme }) => theme.colors.bookRoomBtnBgc};
  }
  & .react-datepicker__navigation-icon::before {
    border-color: #000000;
  }

  @media screen and (min-width: 400px) {
    & .react-datepicker {
      display: flex;
    }
  }
  @media screen and (max-width: 399px) {
    &
      .react-datepicker__navigation--next--with-time:not(
        .react-datepicker__navigation--next--with-today-button
      ) {
      right: 0;
    }
  }
`;

export const PhoneNumberInput = styled(PhoneInput)`
  & .form-control {
    width: 100%;
    padding-left: 45px;
    font-size: 17px;
    border-radius: 8px;
  }

  & .flag-dropdown {
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
  }
`;
export const ErrorText = styled.span`
  color: red;
  font-size: 14px;
`;

export const SubmitButton = styled.button`
  width: 120px;
  height: 60px;
  margin-top: auto;
  margin-left: auto;
  font-size: 1.3em;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryBrown};
  border: 1px solid ${({ theme }) => theme.colors.primaryBrown};
  background-color: #ffffff80;
  border-radius: 45px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: #315cfd;
    color: #ffffff;
    font-size: 1.5em;
  }
  @media screen and (max-width: 479px) {
    margin-right: auto;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 15px;

  @media screen and (max-width: 479px) {
    align-items: baseline;
    flex-direction: column;
  }
`;

export const RadioButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.3s ease;

  & span {
    margin-right: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #9b9b9b;
    transition: all 0.3s ease;
  }
  &:hover span {
    transform: scale(1.2);
    border-color: ${({ theme }) => theme.colors.bookRoomBtnBgc};
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.bookRoomBtnBgc + 80};
  }
`;

export const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${RadioLabel} span {
    background-color: ${({ theme }) => theme.colors.bookRoomBtnBgc};
    border-color: transparent;
    transform: scale(0.8);
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.bookRoomBtnBgc + 80};
  }
  &:checked + ${RadioLabel} {
    font-size: 17px;
    color: ${({ theme }) => theme.colors.bookRoomBtnBgc};
  }
`;

export const RadioButtonsLabel = styled.label`
  &.form__label {
    position: static;
  }
  margin-bottom: 10px;
`;

export const FormGroupButtons = styled(FormGroup)`
  padding: 0px;
`;
