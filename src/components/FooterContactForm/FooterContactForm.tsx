import { FC } from 'react';
import { FormContainer, Heading, Input, SendButton, TextArea } from './FooterContactForm.styled';

const FooterContactForm: FC = () => {
  return (
    <FormContainer>
      <form>
        <Heading>Do you have any questions? Contact us</Heading>
        <Input placeholder="Name" type="text" />
        <Input placeholder="Email" id="mail" type="email" />
        <TextArea placeholder="Your message" rows={10} cols={30} id="message" name="message" />
        <SendButton type="submit" className="send-button">
          <span>Send</span>
        </SendButton>
      </form>
    </FormContainer>
  );
};

export default FooterContactForm;
