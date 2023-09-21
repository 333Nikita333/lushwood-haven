import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;
export const WrapperLinks = styled.div`
  display: flex;
  gap: 0.5em;
`;
export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  outline: none;
  border: none;
  background: #ffffff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  transition: all 0.2s ease-in-out;

  & svg {
    width: 40px;
    height: 40px;
  }
  &:hover {
    scale: 1.1;
  }
  &:hover svg {
    fill: #ffffff;
  }
`;
export const LinkInst = styled(Link)`
  border-radius: 90px 5px 5px 5px;

  &:hover {
    background-color: #cc39a4;
    box-shadow: -5px -5px 30px 5px #cc39a4;
  }
  & svg {
    margin-top: 1.5em;
    margin-left: 1.2em;
    fill: #cc39a4;
  }
`;
export const LinkLinkedin = styled(Link)`
  border-radius: 5px 90px 5px 5px;

  &:hover {
    background-color: #1877f2;
    box-shadow: 5px -5px 30px 5px #1877f2;
  }
  & svg {
    margin-top: 1.5em;
    margin-left: -0.9em;
    fill: #1877f2;
  }
`;
export const LinkGithub = styled(Link)`
  border-radius: 5px 5px 5px 90px;

  &:hover {
    background-color: #1c1c1c;
    box-shadow: -5px 5px 30px 5px #1c1c1c;
  }
  & svg {
    margin-top: -0.6em;
    margin-left: 1.2em;
    fill: #1c1c1c;
  }
`;
export const LinkGmail = styled(Link)`
  border-radius: 5px 5px 90px 5px;

  &:hover {
    background-color: #f14336;
    box-shadow: 5px 5px 30px 5px #f14336;
  }
  & svg {
    margin-top: -0.9em;
    margin-left: -1.2em;
    fill: #f14336;
  }
`;
