import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
export const InfoItem = styled.li`
  background-color: #fff;
  padding: 20px;
  height: auto;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0 10px 36px 0, rgba(0, 0, 0, 0.06) 0 0 0 1px;

  @media screen and (max-width: 1205px) {
    width: 500px;
  }
  @media screen and (max-width: 613px) {
    width: 400px;
  }
  @media screen and (max-width: 500px) {
    width: 300px;
  }
  & p {
    font-size: 1.09rem;
    text-align: justify;
    padding: 20px;

    @media screen and (max-width: 1205px) {
      font-size: 1.1rem;
      text-align: center;
    }
  }
`;