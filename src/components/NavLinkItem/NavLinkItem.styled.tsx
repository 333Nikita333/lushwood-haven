import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  padding: 5px calc(var(--index) * 1);
  text-transform: uppercase;
  border-radius: 8px;
  font-size: calc(var(--index) * 1.3);
  color: #ffffff80;
  text-shadow: none;
  background: transparent;
  box-shadow: transparent;
  border: 1px solid #ffffff80;
  transition: 0.5s ease;
  user-select: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryTextColor};
    background: ${({ theme }) => theme.colors.secondaryColor};
    border: 1px solid ${({ theme }) => theme.colors.secondaryColor};
    text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
    box-shadow: 0 0 5px #8b4513, 0 0 20px #8b4513, 0 0 50px #8b4513, 0 0 100px #8b4513;
  }

  &.active {
    color: #ffffff;
    background: ${({ theme }) => theme.colors.secondaryColor};
    border: 1px solid ${({ theme }) => theme.colors.secondaryColor};
    text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
    box-shadow: 0 0 5px #8b4513, 0 0 20px #8b4513, 0 0 50px #8b4513, 0 0 100px #8b4513;
  }
`;
