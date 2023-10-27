import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  border-radius: 0.5rem;
  background-color: #8b451390;
  backdrop-filter: blur(5px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  color: #fff;
`;

export const RoomTitle = styled.h3`
  text-transform: uppercase;
  font-size: 18px;

  @media (min-width: 480px) {
    font-size: 24px;
  }
`;

export const RoomPrice = styled.p`
  font-size: 16px;

  & > span {
    font-size: 32px;
  }

  @media (min-width: 480px) {
    font-size: 20px;

    & > span {
      font-size: 36px;
    }
  }
`;

export const LinkDetails = styled(Link)`
  padding: 15px 20px;
  max-width: 150px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: #fff;
  border: 2px solid #1a1a1a;
  border-radius: 15px;
  background-color: #8b451390;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  will-change: transform;
  appearance: none;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;

  &:disabled {
    pointer-events: none;
  }

  &:hover,
  &:focus {
    color: #fff;
    background-color: #1a1a1a;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;
