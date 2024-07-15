import styled, { keyframes } from 'styled-components';
import { IScrollDownBtnProps } from '../../types';

const scrolldownAnim = keyframes<IScrollDownBtnProps>`
  0% {
    transform: translateY(calc(var(--sizey) / -4));
    opacity: 0;
    height: calc(var(--sizey) / 10);
  }

  40% {
    opacity: 1;
    height: calc(var(--sizey) / 5);
  }

  80% {
    transform: translateY(calc(var(--sizey) / 4));
    height: calc(var(--sizey) / 5);
    opacity: 0;
  }

  100% {
    height: calc(var(--sizey) / 10);
    opacity: 0;
  }
`;

const pulse54012 = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 0.5;
  }
`;

export const ScrollDownContainer = styled.div<IScrollDownBtnProps>`
  --sizex: ${props => props.sizex};
  --sizey: ${props => props.sizey};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: end;
  width: var(--sizex);
  height: var(--sizey);
  border: calc(var(--sizex) / 10) solid ${({ theme }) => theme.colors.bookRoomBtnBgc};
  border-radius: 50px;
  box-sizing: border-box;
`;

export const ScrollDot = styled.div`
  content: '';
  position: absolute;
  bottom: 35%;
  left: 50%;
  transform: translateX(-50%);
  width: calc(var(--sizex) / 5);
  height: calc(var(--sizey) / 5);
  margin-left: calc(var(--sizex) / -10);
  background-color: ${({ theme }) => theme.colors.bookRoomBtnBgc};
  border-radius: 50%;
  animation: ${scrolldownAnim} 2s infinite;
  box-sizing: border-box;
  box-shadow: 0px -5px 3px 1px #2a547066;
`;

export const Chevrons = styled.div`
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(calc(var(--sizey) / 1.5));
`;

export const ChevronDown = styled.div`
  margin-top: calc(var(--sizey) * -0.3);
  position: relative;
  border: solid ${({ theme }) => theme.colors.bookRoomBtnBgc};
  border-width: 0 calc(var(--sizex) / 10) calc(var(--sizex) / 10) 0;
  display: inline-block;
  width: calc(var(--sizex) * 0.8);
  height: calc(var(--sizey) * 0.5);
  transform: rotate(45deg);

  &:nth-child(odd) {
    animation: ${pulse54012} 500ms ease infinite alternate;
  }

  &:nth-child(even) {
    animation: ${pulse54012} 500ms ease infinite alternate 250ms;
  }
`;
