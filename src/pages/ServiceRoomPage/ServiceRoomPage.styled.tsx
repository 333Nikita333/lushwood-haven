import styled from 'styled-components';

export const Wrapper = styled.main`
  overflow-x: hidden;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 20px;
  font-family: josefin_sans_regular, sans-serif;
  color: #2f3817;
  background: rgb(25, 69, 8);
  background-image: linear-gradient(to right, #00b09b, #96c93d);
`;
export const ContentInfo = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.paddings.small};
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3), 0px -4px 10px rgba(255, 255, 255, 0.3);

  @media screen and (min-width: 1200px) {
    padding: 0 25px;
  }
`;
