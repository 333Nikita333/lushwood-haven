import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  background: rgb(25, 69, 8);
  background-image: linear-gradient(to right, #00b09b, #96c93d);
`;
export const ContentInfo = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3), 0px -4px 10px rgba(255, 255, 255, 0.3);
  
  @media screen and (min-width: 1200px) {
    padding: 0 25px;
  }
`;
export const MainInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 10px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 2fr 380px;
  }
`;
export const RoomTitle = styled.h2`
  font-size: calc(var(--index) * 2.6);
  font-weight: 400;
  text-align: center;
  margin-bottom: 20px;
  font-size: calc(var(--index) * 2.7);
  line-height: 1.5;
  color: #2f3817;

  @media screen and (min-width: 481px) {
    font-size: calc(var(--index) * 2.5);
  }
`;
export const RoomInfo = styled.div`
  margin-bottom: 30px;
`;
export const RoomDescriptionTitle = styled.h3`
  font-size: calc(var(--index) * 2);
  padding-bottom: 5px;
  margin-bottom: 10px;
  position: relative;
  color: #2f3817;

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
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  border-radius: 45px 45px 45px 0;
  border: 2px solid ${({ theme }) => theme.colors.primaryBrown};
  padding: 15px;
  font-size: calc(var(--index) * 1.6);
  color: #2f3817;
`;
export const RoomAmentitiesWrapper = styled.div`
  margin-top: calc(40 / 16 + rem);
`;

export const RoomAmentitiesTitle = styled.h3`
  font-size: calc(var(--index) * 2);
  padding-bottom: 5px;
  margin-bottom: 10px;
  position: relative;
  color: #2f3817;

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
    box-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3), 0px -4px 10px rgba(255, 255, 255, 0.3);
    border-radius: 15px;
    padding: 5px;
    border: 1px solid #2f3817;
    color: #2f3817;
  }
`;

export const RoomAmentitieTitle = styled.p`
  font-size: calc(var(--index) * 1.8);
  font-weight: 900;
  font-style: italic;
  color: #2f3817;

  @media screen and (min-width: 481px) {
    font-size: calc(var(--index) * 1.2);
  }
`;

export const RoomPriceWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
export const RoomPriceLabel = styled.span`
  display: block;

  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
`;
export const RoomPriceNumber = styled.span`
  font-size: 1.35rem;
  font-weight: 300;
  letter-spacing: 1px;
`;
