import styled from 'styled-components';

export const ButtonCancel = styled.button`
  display: flex;
  gap: 2px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  width: 30px;
  height: 30px;
  font-weight: 600;
  border: none;
  border-radius: 50%;
  background-color: rgb(20, 20, 20);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.164);
  transition-duration: 0.3s;
  opacity: 0.3;

  &:hover {
    transition-duration: 0.3s;
    background-color: rgb(255, 69, 69);
    box-shadow: 0px 0px 20px rgba(255, 69, 69, 0.164);
    align-items: center;
    gap: 0;
  }

  & .bin-top {
    transform-origin: bottom right;
  }

  &:hover .bin-top {
    transition-duration: 0.5s;
    transform: rotate(160deg);
  }

  & svg {
    width: 15px;
    transition-duration: 0.3s;

    & path {
      fill: white;
    }
  }
`;
