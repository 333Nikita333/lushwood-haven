import { FC } from 'react';
import { Button, IconWrapper, Text } from './ButtonLogout.styled';

interface ButtonLogoutProps {
  onSubmit: () => void;
  icon: JSX.Element;
  text: string;
}

const ButtonLogout: FC<ButtonLogoutProps> = ({ onSubmit, icon, text }) => {
  return (
    <Button onClick={onSubmit}>
      <IconWrapper>{icon}</IconWrapper>

      <Text>{text}</Text>
    </Button>
  );
};

export default ButtonLogout;
