import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  background-color: white;
`;
export const RoomImages = styled.div`
  margin-bottom: 2.5rem;
  width: 100%;
`;
export const DescriptionWrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  text-align: left;
`;
export const RoomDetails = styled.div`
  & p {
    font-size: 1rem;
    line-height: 1.75;
    color: #5f6060;
  }
`;
export const RoomTypeTitle = styled.h2`
  position: relative;
  margin-top: 0;
  padding-top: 1.875rem;
  margin-bottom: 0.875rem;
  font-size: 1.5625rem;
  color: #222;
  word-wrap: break-word;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 70px;
    height: 4px;
    background: #c1b086;
  }
`;

export const PriceDetails = styled.div`
  display: inline-flex;
  flex-wrap: wrap;

  & p {
    font-size: 1.875rem;
    line-height: 1.75;
    color: #222;
  }

  & a {
    color: #5f6060;
    border-color: #dadada;
    border: 1px solid;
    border-radius: 1.875rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    line-height: 1.2;
    padding: 20px;
    font-weight: 600;
    text-align: center;
    letter-spacing: 1px;
  }
`;
