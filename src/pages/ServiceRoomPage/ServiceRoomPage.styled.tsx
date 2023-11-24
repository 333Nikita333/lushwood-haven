import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  background-color: white;
`;
export const ContentInfo = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: calc(40 / 16 + rem);
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;

  @media screen and (min-width: 1025px) {
    grid-template-columns: 2fr 380px;
    column-gap: calc(45 / 16 + rem);
    padding: 0 25px;
  }
`;
export const RoomInfo = styled.div`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
`;
export const RoomTitle = styled.h2`
  font-size: 2.255rem;
  font-weight: 400;
`;
export const RoomDescription = styled.p``;
export const RoomServicesList = styled.ul`
  margin-top: calc(30 / 16 + rem);
  margin-bottom: calc(20 / 16 + rem);
`;
export const RoomServicesItem = styled.li``;
export const RoomAmentitiesWrapper = styled.div`
  margin-top: calc(40 / 16 + rem);
`;
export const RoomAmentitiesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: calc(30 / 16 + rem);
  border-top: 1px solid #e4e4e4;
`;
export const RoomAmentitiesItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:nth-of-type(n + 9)) {
    margin-bottom: calc(25 / 16 + rem);
  }
  & > svg {
    width: 24px;
    height: 24px;
  }
`;
export const RoomAmentitiesTitle = styled.span`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;

  margin-left: calc(10 / 16 + rem);
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
