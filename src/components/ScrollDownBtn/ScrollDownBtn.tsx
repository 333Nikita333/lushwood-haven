import { FC } from 'react';
import { IScrollDownBtnProps } from '../../types';
import { ChevronDown, Chevrons, ScrollDot, ScrollDownContainer } from './ScrollDownBtn.styled';

const ScrollDownBtn: FC<IScrollDownBtnProps> = ({ $sizex = '30px', $sizey = '50px' }) => {
  return (
    <ScrollDownContainer $sizex={$sizex} $sizey={$sizey}>
      <ScrollDot />
      <Chevrons>
        <ChevronDown />
        <ChevronDown />
      </Chevrons>
    </ScrollDownContainer>
  );
};

export default ScrollDownBtn;
