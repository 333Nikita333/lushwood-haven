import { FC } from 'react';
import { ButtonLogoutProps } from '../../types';
import { Button, IconWrapper, Text } from './ButtonLogout.styled';

const ButtonLogout: FC<ButtonLogoutProps> = ({ onSubmit, icon, text }) => {
  return (
    <Button onClick={onSubmit}>
      <IconWrapper>{icon}</IconWrapper>

      <Text>{text}</Text>
    </Button>
  );
};

export default ButtonLogout;
