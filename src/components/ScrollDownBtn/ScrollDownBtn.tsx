import { FC } from 'react';
import { ChevronDown, Chevrons, ScrollDot, ScrollDownContainer } from './ScrollDownBtn.styled';
import { IScrollDownBtnProps } from '../../types';

const ScrollDownBtn: FC<IScrollDownBtnProps> = ({sizeX = "30px", sizeY = "50px"}) => {
  return (
    <ScrollDownContainer sizeX={sizeX} sizeY={sizeY}>
      <ScrollDot />
      <Chevrons>
        <ChevronDown />
        <ChevronDown />
      </Chevrons>
    </ScrollDownContainer>
  );
};

export default ScrollDownBtn;
