import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 30px 10px;
  color: #bbb;
  background-color: #445147;

  & a {
    color: #999;
  }
  & a:hover,
  & a:focus {
    color: #fff;
    text-decoration: none;
    border-bottom: 1px dotted #999;
  }
`;
export const Container = styled.div``;
export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const LinksWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LinksSite = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
export const LinksSiteList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  font-size: calc(var(--index) * 2);
`;
export const Logo = styled.img`
  width: 200px;
  height: 200px;
`;
export const LinksLeft = styled.div``;
export const LinksRight = styled.div``;
export const SocialListLinks = styled.ul``;
export const SocialListItem = styled.li``;
export const SocialLink = styled.a``;
export const Text = styled.h3`
  font-size: calc(var(--index) * 2);
`;
export const FormWrapper = styled.div``;
export const FormGroup = styled.fieldset``;
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
export const ButtonSubmit = styled.button``;
