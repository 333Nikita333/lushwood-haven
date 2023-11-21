import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 20px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 20px inset,
    rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 40px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 40px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

export const InfoList = styled.ul`
  z-index: 2;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: -40px 0 -40px;
  padding: 10px;
  width: 100%;

  @media screen and (min-width: 481px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1025px) {
    flex-wrap: nowrap;
    justify-content: space-evenly;
    margin: 0;
    padding: 20px;
  }
`;

export const InfoItem = styled.li`
  position: relative;
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px;
  min-height: 110px;
  padding: 10px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
    rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  color: rgba(0, 0, 0, 0.6);
  text-shadow: 0px 3px 0px #b2a98f80, 0px 14px 10px rgba(0, 0, 0, 0.15),
    0px 14px 2px rgba(0, 0, 0, 0.1), 0px 24px 30px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #ffbc00, #43b72b);
    border-radius: 15px;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #43b72b, #8b4513);
    filter: blur(50px);
    z-index: -1;
  }

  & svg {
    z-index: 1;
    width: 30px;
    height: 30px;

    @media screen and (min-width: 769px) {
      width: 40px;
      height: 40px;
    }
  }

  & h3 {
    z-index: 1;
    font-size: 22px;

    @media screen and (min-width: 481px) {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 481px) {
    width: calc(50% - 20px);
  }
  @media screen and (min-width: 769px) {
    width: calc(33.33% - 20px);
  }
  @media screen and (min-width: 1025px) {
    width: 250px;
    min-height: 130px;
  }
`;
