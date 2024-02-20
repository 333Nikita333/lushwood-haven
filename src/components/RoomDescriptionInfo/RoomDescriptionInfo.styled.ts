import styled from 'styled-components';

export const MainInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 10px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 2fr 380px;
  }
`;
export const RoomTitle = styled.h2`
  margin-bottom: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.secondary};
  text-align: center;
  font-size: calc(var(--index) * 2.7);
  line-height: 1.5;

  @media screen and (min-width: 481px) {
    font-size: calc(var(--index) * 2.5);
  }
`;
export const RoomInfo = styled.div`
  margin-bottom: 30px;
`;
export const RoomDescriptionTitle = styled.h3`
  position: relative;
  padding-bottom: 5px;
  margin-bottom: 10px;
  font-size: calc(var(--index) * 2);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 25%;
    border-bottom: 3px solid ${({ theme }) => theme.colors.primaryBrown};
  }
`;
export const RoomDescription = styled.p`
  padding: ${({ theme }) => theme.paddings.small};
  font-size: calc(var(--index) * 1.6);
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  border-radius: 45px 45px 45px 0;
  border: 2px solid ${({ theme }) => theme.colors.primaryBrown};
`;
export const RoomAmentitiesWrapper = styled.div`
  margin-top: calc(40 / 16 + rem);
`;

export const RoomAmentitiesTitle = styled.h3`
  position: relative;
  padding-bottom: 5px;
  margin-bottom: 10px;
  font-size: calc(var(--index) * 2);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 25%;
    border-bottom: 3px solid ${({ theme }) => theme.colors.primaryBrown};
  }
`;
export const RoomAmentitiesTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  display: flex;
  flex-direction: column;

  & > tbody {
    @media screen and (min-width: 481px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      max-width: 480px;
      gap: 5px;
    }
  }
`;
export const RoomAmentitiesRow = styled.tr``;
export const RoomAmentitiesItem = styled.td`
  padding: 5px;

  & svg {
    width: 50px;
    height: 50px;
    padding: 5px;
    box-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3), 0px -4px 10px rgba(255, 255, 255, 0.3);
    border-radius: 15px;
    border: 1px solid #2f3817;
  }
`;

export const RoomAmentitieTitle = styled.p`
  font-size: calc(var(--index) * 1.8);
  font-weight: ${({ theme }) => theme.fontWeights.secondary};
  font-style: italic;

  @media screen and (min-width: 481px) {
    font-size: calc(var(--index) * 1.2);
  }
`;

export const RoomPriceWrapper = styled.div`
  display: flex;
`;
export const RoomPriceLabel = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: calc(var(--index) * 1.7);
  font-weight: ${({ theme }) => theme.fontWeights.primary};
  line-height: 1.5;
  border-top-left-radius: 45px;
  border-bottom-left-radius: 45px;
  border: 2px solid ${({ theme }) => theme.colors.primaryBrown};
  border-right: none;
  background-color: #ffffff90;
  backdrop-filter: blur(5px);
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
    rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;

  @media screen and (min-width: 481px) {
    font-size: calc(var(--index) * 1.6);
  }
`;
export const RoomPriceNumber = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 45px;
  border-bottom-right-radius: 45px;
  padding: 10px;
  font-size: calc(var(--index) * 3);
  font-weight: ${({ theme }) => theme.fontWeights.secondary};
  letter-spacing: 1px;
  background-color: #ffffff90;
  backdrop-filter: blur(5px);
  border: 2px solid ${({ theme }) => theme.colors.primaryBrown};
  border-left: none;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
    rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;
