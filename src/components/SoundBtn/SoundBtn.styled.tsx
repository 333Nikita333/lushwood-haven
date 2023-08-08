import styled from 'styled-components';

export const Button = styled.button`
  position: fixed;
  z-index: 1000;
  top: 5%;
  right: 5%;
  width: calc(var(--index) * 2.1);
  height: calc(var(--index) * 2.1);
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  will-change: transform;
  transform: translate3d(0, calc(var(--scrollTop) / 1), 0);
  transition: transform 0.3s ease;

  & svg {
    width: calc(var(--index) * 2);
    height: calc(var(--index) * 2);
  }
`;
