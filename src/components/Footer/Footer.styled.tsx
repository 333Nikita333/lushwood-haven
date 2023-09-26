import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  padding: 30px 10px;
  text-align: center;
  color: #bbb;
  background-color: #445147;

  & p {
    font-size: calc(var(--index) * 1.2);
    text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3), 0px -4px 10px rgba(255, 255, 255, 0.3);
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
`;
export const Logo = styled.img`
  width: 200px;
  height: 200px;
`;
export const LinksWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-evenly;

  @media (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const LinksSite = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 35px;
  font-size: calc(var(--index) * 2);

  @media (min-width: 768px) {
    font-size: calc(var(--index) * 1.2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;
export const LinksSiteItem = styled.li`
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
  & a {
    color: #999;
    text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3), 0px -4px 10px rgba(255, 255, 255, 0.3);
  }
  & a:hover,
  & a:focus {
    color: #fff;
    text-decoration: underline;
  }
`;
