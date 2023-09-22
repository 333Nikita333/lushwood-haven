import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  padding: 30px 10px;
  text-align: center;
  color: #bbb;
  background-color: #445147;

  & p {
    font-size: calc(var(--index) * 1.2);
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (max-width: 899px) {
    align-items: center;
  }
`;
export const LinksWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: space-around;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`;
export const LinksSite = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 35px;
  text-align: center;
  font-size: calc(var(--index) * 2);

  @media (max-width: 767px) {
    & li {
      width: calc(33.33% - 25px);
    }
  }
  @media (min-width: 900px) {
    justify-content: start;
    margin-top: -5rem;
  }
`;
export const LinksSiteItem = styled.li`
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
  & a {
    color: #999;
  }
  & a:hover,
  & a:focus {
    color: #fff;
    text-decoration: underline;
  }
`;
export const Logo = styled.img`
  width: 200px;
  height: 200px;
`;
export const Text = styled.h3`
  font-size: calc(var(--index) * 2);
  margin-bottom: 10px;
`;
export const FormWrapper = styled.div`
  text-align: center;
`;
export const Input = styled.input`
  background-color: #1f2022;
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1);
  border: none;
  resize: none;
  color: #d1d2d2;
  padding: 0.7em 1em;
`;
export const TextArea = styled.textarea`
  background-color: #1f2022;
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1);
  border: none;
  resize: none;
  color: #d1d2d2;
  padding: 0.7em 1em;
`;
