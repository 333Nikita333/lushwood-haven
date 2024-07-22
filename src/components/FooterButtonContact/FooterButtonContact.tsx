import { FC } from 'react';
import { IFooterButtonContactProps } from '../../types';
import { ButtonSubmit } from './FooterButtonContact.styled';

const FooterButtonContact: FC<IFooterButtonContactProps> = ({ toggleContactForm }) => {
  return <ButtonSubmit type="submit" onClick={toggleContactForm}></ButtonSubmit>;
};

export default FooterButtonContact;
