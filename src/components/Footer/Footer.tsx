import { FC, useState } from 'react';
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
import FooterButtonContact from '../FooterButtonContact';
import Modal from '../Modal';

const linksSite: readonly string[] = ['Home', 'Blog', 'Pricing', 'About', 'FAQ', 'Contact', 'Stock', 'Pricing'];

const Footer: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = (): void => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <FooterWrapper>
      <ContentWrapper>
        <Logo src="images/logo.png" alt="logo" />
        <LinksWrapper>
          <LinksSite>
            {linksSite.map(link => (
              <LinksSiteItem key={link + new Date()}>
                <a href="#">{link}</a>
              </LinksSiteItem>
            ))}
          </LinksSite>
        </LinksWrapper>

        <FooterSocialLinks />

        <FooterButtonContact toggleModal={toggleModal} />
        <Modal isOpen={isModalOpen} onClose={toggleModal}>
          <FooterContactForm />
        </Modal>
      </ContentWrapper>
      <p>&copy;2023 Mykyta Hilis | All Rights Reserved</p>
    </FooterWrapper>
  );
};

export default Footer;
