import { FC } from 'react';
import { IFooterButtonContactProps } from '../../types';
import { ButtonSubmit } from './FooterButtonContact.styled';

const FooterButtonContact: FC<IFooterButtonContactProps> = ({ toggleModal }) => {
  return <ButtonSubmit type="submit" onClick={toggleModal}></ButtonSubmit>;
};

export default FooterButtonContact;
