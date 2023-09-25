import { FC } from 'react';
import { ButtonSubmit } from './FooterButtonContact.styled';

interface IFooterButtonContactProps {
  toggleModal: () => void;
}
const FooterButtonContact: FC<IFooterButtonContactProps> = ({ toggleModal }) => {
  return <ButtonSubmit type="submit" onClick={toggleModal}></ButtonSubmit>;
};

export default FooterButtonContact;
