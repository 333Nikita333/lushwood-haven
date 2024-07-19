import { FC } from 'react';
import { MdKeyboardBackspace } from "react-icons/md";
import { INavigateButtonProps } from '../../types';
import { Button } from './NavigateButton.styled';

const NavigateButton: FC<INavigateButtonProps> = ({ path, text }) => {
  return (
    <Button to={path}>
      <MdKeyboardBackspace />
      <span>{text}</span>
    </Button>
  );
};

export default NavigateButton;
