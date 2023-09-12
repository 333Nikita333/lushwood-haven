import styled from 'styled-components';

export const Button = styled.button`
  position: fixed;
  z-index: 1000;
  top: 13%;
  right: 20px;
  width: calc(var(--index) * 3);
  height: calc(var(--index) * 3);
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  will-change: transform;
  transform: translate3d(0, calc(var(--scrollTop) / 1), 0);
  transition: transform 0.3s ease;

  & svg {
    width: 40px;
    height: 40px;
  }
`;
