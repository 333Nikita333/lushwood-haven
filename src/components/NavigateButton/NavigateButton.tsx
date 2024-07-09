import { FC } from 'react';
import { INavigateButtonProps } from '../../types';
import { Button } from './NavigateButton.styled';
import { MdKeyboardBackspace } from "react-icons/md";

const NavigateButton: FC<INavigateButtonProps> = ({ path, text }) => {
  return (
    <Button to={path}>
      <MdKeyboardBackspace />
      <span>{text}</span>
    </Button>
  );
};

export default NavigateButton;
