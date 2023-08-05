import styled from 'styled-components';

export const IconWrapper = styled.button`
  position: absolute;
  top: 30%;
  right: 50%;
  font-size: 24px;
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  z-index: 999;
  transform: translate3d(0, calc(var(--scrollTop) / 2), 0);

  & svg {
    width: 30px;
    height: 30px;
    cursor: 'pointer';
  }
`;
