import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 500px;
  max-height: 400px;
  overflow-y: auto;
  padding: 5px;
`;
export const OrderFormContainer = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;

  & input {
    padding: 5px;
    width: 100%;
    border-radius: 8px;
  }
  & .form__field {
    width: 100%;
    margin-bottom: 5px;
    padding: 7px;
    font-size: 16px;
    color: #000000;
    background: transparent;
    outline: 0;
    border: none;
    border-bottom: 2px solid #9b9b9b;
    transition: border-color 0.2s ease-in-out;
  }
  & .form__field::placeholder {
    color: transparent;
  }

  & .form__field:placeholder-shown ~ .form__label {
    top: 30px;
    font-size: 17px;
    cursor: text;
  }

  & .form__label {
    position: absolute;
    top: 0;
    display: block;
    font-size: 17px;
    color: #9b9b9b;
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

  & .react-datepicker__navigation-icon::before {
    border-color: black;
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

export const ErrorText = styled.span`
  color: red;
  font-size: 14px;
`;

export const Button = styled.button`
  width: 120px;
  height: 60px;
  margin-top: auto;
  margin-left: auto;
  border: 1px solid #315cfd;
  border-radius: 45px;
  transition: all 0.3s;
  cursor: pointer;
  background: white;
  font-size: 1.2em;
  font-weight: 500;

  &:hover {
    background: #315cfd;
    color: white;
    font-size: 1.5em;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media screen and (max-width: 400px) {
    align-items: baseline;
    flex-direction: column;
  }
`;

export const RadioButton = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  position: relative;
  display: inline-block;
  padding-left: 30px;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 600;
  color: #9b9b9b;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.3s ease;

  & span {
    position: absolute;
    top: 0;
    left: 0;
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
    color: ${({ theme }) => theme.colors.bookRoomBtnBgc};
  }
`;
