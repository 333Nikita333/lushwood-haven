import { FC } from 'react';
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
  LinksWrapper,
  Logo,
  Text,
  TextArea,
} from './Footer.styled';
import FooterSocialLinks from '../FooterSocialLinks';

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <Container>
        <ContentWrapper>
          <LinksWrapper>
            <Logo src="images/logo.png" alt="logo" />

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

            <FooterSocialLinks />
          </LinksWrapper>

          <FormWrapper>
            <Text>Contact Us</Text>
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
