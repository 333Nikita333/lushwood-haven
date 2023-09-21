import { FC } from 'react';
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import { BiLogoGmail } from 'react-icons/bi';
import {
  ButtonSubmit,
  Container,
  ContentWrapper,
  FooterWrapper,
  FormGroup,
  FormWrapper,
  Input,
  LinksLeft,
  LinksRight,
  LinksSite,
  LinksSiteList,
  LogoWrapper,
  SocialLink,
  SocialListItem,
  SocialListLinks,
  Text,
  TextArea,
  TextWrapper,
} from './Footer.styled';

const socialLinks = [
  {
    link: 'https://link.com',
    icon: <BsInstagram />,
  },
  {
    link: 'https://link.com',
    icon: <BsGithub />,
  },
  {
    link: 'https://link.com',
    icon: <BiLogoGmail />,
  },
  {
    link: 'https://link.com',
    icon: <BsLinkedin />,
  },
];

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <Container>
        <ContentWrapper>
          <LinksSite>
            <LogoWrapper>
              <img src="logo.png" alt="logo" />
            </LogoWrapper>

            <LinksSite>
              <LinksLeft>
                <LinksSiteList>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                </LinksSiteList>
              </LinksLeft>
              <LinksRight>
                <LinksSiteList>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </LinksSiteList>
              </LinksRight>
            </LinksSite>

            <SocialListLinks>
              {socialLinks.map(({ link, icon }) => (
                <SocialListItem>
                  <SocialLink href={link} target="_blank" rel="noreferrer noopener nofollow">
                    {icon}
                  </SocialLink>
                </SocialListItem>
              ))}
            </SocialListLinks>
            <br />
          </LinksSite>
          <TextWrapper>
            <Text>Contact Us</Text>
            <hr />
          </TextWrapper>

          <FormWrapper>
            <form>
              <FormGroup>
                <Input type="email" id="exampleInputEmail1" placeholder="Enter email" />
              </FormGroup>
              <FormGroup>
                <TextArea id="exampleMessage" placeholder="Message"></TextArea>
              </FormGroup>
              <FormGroup className="text-xs-right">
                <ButtonSubmit type="button" className="btn btn-secondary-outline btn-lg">
                  Send
                </ButtonSubmit>
              </FormGroup>
            </form>
          </FormWrapper>
        </ContentWrapper>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
