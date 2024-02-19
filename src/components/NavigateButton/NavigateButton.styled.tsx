import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  max-width: 120px;
  padding: 10px;
  background-image: linear-gradient(to top, #114633 0%, #4cedb5 80%, #28a479 100%);
  border-radius: 30px;
  border: 2px solid #8b4513;
  transition: all 0.2s ease;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #2f3817;
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.2), 0px -4px 10px rgba(255, 255, 255, 0.2);
  overflow: hidden;

  @media screen and (min-width: 1200px) {
    max-width: 150px;
    padding: 15px;
    font-size: 18px;
  }

  & svg {
    width: 30px;
    height: 30px;
    transition: all 0.2s ease;

    @media screen and (min-width: 1200px) {
      width: 40px;
      height: 40px;
    }
  }

  & span {
    transform: translateX(0px);
    transition: all 0.2s ease;
  }

  &:hover svg {
    scale: 2;
    transform: translateX(15px);

    @media screen and (min-width: 1200px) {
      transform: translateX(20px);
    }
  }

  &:hover span {
    transform: translateX(200px);
  }

  &:hover {
    box-shadow: 0 4px 3px 1px #27b683, 0 6px 8px #20966c, 0 -4px 4px #239b71, 0 -6px 4px #27b683,
      inset 0 0 3px 3px #176a4d;
  }

  &:active {
    box-shadow: 0 4px 3px 1px #27b683, 0 6px 8px #20966c, 0 -4px 4px #239b71, 0 -6px 4px #27b683,
      inset 0 0 15px 3px #0c4933, inset 0 0 30px #106546;
  }

  &:focus {
    box-shadow: 0 4px 3px 1px #27b683, 0 6px 8px #20966c, 0 -4px 4px #239b71, 0 -6px 4px #27b683,
      inset 0 0 15px 3px #0c4933, inset 0 0 30px #106546;
  }
`;
