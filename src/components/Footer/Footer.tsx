import { FC } from 'react';
import {
  FooterWrapper,
  ContentWrapper,
  LinksWrapper,
  Logo,
  LinksSite,
  LinksSiteItem,
} from './Footer.styled';
import FooterContactForm from '../FooterContactForm';
import FooterSocialLinks from '../FooterSocialLinks';

const linksSite: readonly string[] = ['Home', 'Blog', 'Pricing', 'About', 'FAQ', 'Contact'];

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <ContentWrapper>
        <LinksWrapper>
          <Logo src="images/logo.png" alt="logo" />

          <FooterSocialLinks />

          <LinksSite>
            {linksSite.map(link => (
              <LinksSiteItem key={link + new Date()}>
                <a href="#">{link}</a>
              </LinksSiteItem>
            ))}
          </LinksSite>
        </LinksWrapper>

        <FooterContactForm />
      </ContentWrapper>
      <p>&copy;2023 Mykyta Hilis | All Rights Reserved</p>
    </FooterWrapper>
  );
};

export default Footer;
