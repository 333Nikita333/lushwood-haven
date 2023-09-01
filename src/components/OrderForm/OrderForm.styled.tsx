import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 500px;
  max-height: 400px;
  overflow-y: auto;
`;
export const OrderFormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

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
    border-image: linear-gradient(to right, #116399, #38caef);
    border-image-slice: 1;
  }

  & .form__field:focus ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    font-size: 17px;
    font-weight: 700;
    color: #38caef;
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
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 14px;
`;

export const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
