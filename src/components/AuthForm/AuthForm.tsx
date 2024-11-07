import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaEye } from 'react-icons/fa';
import { RiEyeCloseFill } from 'react-icons/ri';
import { FormAuthData } from '../../types';
import {
  ButtonLogin,
  ButtonRegister,
  Checkbox,
  ErrorMessage,
  Form,
  Input,
  InputContainer,
  InputWrapper,
  LabelLogin,
  LabelRegister,
  Login,
  Main,
  Register,
  TogglePasswordButton,
} from './AuthForm.styled';
import useStore from '../../store';

const AuthForm: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { login, register, isLoading } = useStore(state => ({
    login: state.login,
    register: state.register,
    isLoading: state.isLoading,
  }));

  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    reset: resetLogin,
    formState: { errors: errorsLogin },
  } = useForm<FormAuthData>();

  const {
    register: registerRegister,
    handleSubmit: handleSubmitRegister,
    reset: resetRegister,
    formState: { errors: errorsRegister },
  } = useForm<FormAuthData>();

  const togglePasswordVisibility = (): void => {
    setShowPassword(prevState => !prevState);
  };

  const onSubmit: SubmitHandler<FormAuthData> = async (data): Promise<void> => {
    const { name, email, password } = data;

    if (name) {
      console.log('Register data:', data);
      await register(name, email, password);
      resetRegister();
    } else {
      console.log('Login data:', data);
      await login(email, password);
      resetLogin();
    }
  };

  return (
    <Main>
      <Checkbox type="checkbox" id="chk" aria-hidden="true" />
      <Login>
        <Form onSubmit={handleSubmitLogin(onSubmit)}>
          <LabelLogin htmlFor="chk" aria-hidden="true">
            Log in
          </LabelLogin>

          <InputWrapper>
            {errorsLogin.email && <ErrorMessage>{errorsLogin.email.message}</ErrorMessage>}
            <Input
              {...registerLogin('email', { required: 'This field is required' })}
              type="email"
              placeholder="Email"
            />
          </InputWrapper>
          <InputWrapper>
            {errorsLogin.password && <ErrorMessage>{errorsLogin.password.message}</ErrorMessage>}
            <InputContainer>
              <Input
                {...registerLogin('password', { required: 'This field is required' })}
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
              />
              <TogglePasswordButton type="button" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEye /> : <RiEyeCloseFill />}
              </TogglePasswordButton>
            </InputContainer>
          </InputWrapper>
          <ButtonLogin type="submit" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Log in'}
          </ButtonLogin>
        </Form>
      </Login>

      <Register>
        <Form onSubmit={handleSubmitRegister(onSubmit)}>
          <LabelRegister htmlFor="chk" aria-hidden="true">
            Register
          </LabelRegister>

          <InputWrapper>
            {errorsRegister.name && <ErrorMessage>{errorsRegister.name.message}</ErrorMessage>}
            <Input
              {...registerRegister('name', { required: 'This field is required' })}
              type="text"
              placeholder="Username"
            />
          </InputWrapper>
          <InputWrapper>
            {errorsRegister.email && <ErrorMessage>{errorsRegister.email.message}</ErrorMessage>}
            <Input
              {...registerRegister('email', { required: 'This field is required' })}
              type="email"
              placeholder="Email"
            />
          </InputWrapper>
          <InputWrapper>
            {errorsRegister.password && (
              <ErrorMessage>{errorsRegister.password.message}</ErrorMessage>
            )}
            <InputContainer>
              <Input
                {...registerRegister('password', { required: 'This field is required' })}
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
              />
              <TogglePasswordButton type="button" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEye /> : <RiEyeCloseFill />}
              </TogglePasswordButton>
            </InputContainer>
          </InputWrapper>
          <ButtonRegister type="submit" disabled={isLoading}>
            {isLoading ? 'Registering...' : 'Register'}
          </ButtonRegister>
        </Form>
      </Register>
    </Main>
  );
};

export default AuthForm;
