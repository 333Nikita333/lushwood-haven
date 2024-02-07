import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  background: rgb(25, 69, 8);
  background-image: linear-gradient(to right, #00b09b, #96c93d);
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
export const RoomTitle = styled.h2`
  font-size: calc(var(--index) * 2.6);
  font-weight: 400;
  text-align: center;
  margin-bottom: 20px;
  font-size: calc(var(--index) * 2.7);
  line-height: 1.5;
  background: linear-gradient(to right, #095609, #000000);
  background-clip: text;
  color: transparent;
  
  @media screen and (min-width: 481px) {
    font-size: calc(var(--index) * 2.5);
  }
`;
export const RoomInfo = styled.div``;
export const RoomDescriptionTitle = styled.h3`
  font-size: calc(var(--index) * 2);
  padding-bottom: 5px;
  margin-bottom: 10px;
  position: relative;

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
  border-radius: 25px 25px 25px 0;
  border: 2px solid ${({ theme }) => theme.colors.primaryBrown};
  padding: 5px;
`;
export const RoomAmentitiesWrapper = styled.div`
  margin-top: calc(40 / 16 + rem);
`;
export const RoomAmentitiesTitle = styled.h3`
  font-size: calc(var(--index) * 2);
`;
export const RoomAmentitiesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: calc(30 / 16 + rem);
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
export const RoomAmentitieTitle = styled.span`
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
