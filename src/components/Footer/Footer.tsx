import { FC, useState } from 'react';
import { logo } from '../../data/photos';
import Modal from '../../utils/Modal';
import { useScroll } from '../../utils/ScrollContext';
import FooterButtonContact from '../FooterButtonContact';
import FooterContactForm from '../FooterContactForm';
import FooterSocialLinks from '../FooterSocialLinks';
import {
  ContentWrapper,
  FooterWrapper,
  LinksSite,
  LinksSiteItem,
  LinksWrapper,
  Logo,
} from './Footer.styled';

const linksSite: readonly string[] = [
  'Home',
  'About',
  'Blog',
  'Stock',
  'Pricing',
  'Gallery',
  'Contact',
  'FAQ',
];

const Footer: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { toggleScroll } = useScroll();

  const toggleContactForm = (): void => {
    setIsModalOpen(prevState => !prevState);
    toggleScroll(isModalOpen);
  };

  return (
    <FooterWrapper>
      <ContentWrapper>
        <Logo src={logo} alt="logo" />
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

        <FooterButtonContact toggleContactForm={toggleContactForm} />
        <Modal isOpen={isModalOpen} onClose={toggleContactForm}>
          <FooterContactForm />
        </Modal>
      </ContentWrapper>
      <p>&copy;2024 Mykyta Hilis | All Rights Reserved</p>
    </FooterWrapper>
  );
};

export default Footer;
