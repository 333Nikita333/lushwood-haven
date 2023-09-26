import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { ContactFormData } from '../../types';
import {
  ErrorText,
  FormContainer,
  FormGroup,
  Heading,
  Input,
  SendButton,
  TextArea,
} from './FooterContactForm.styled';

const FooterContactForm: FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit: SubmitHandler<ContactFormData> = (data): void => {
    console.log(data);
  };

  return (
    <FormContainer>
      <Heading>Do you have any questions? Contact us</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => <Input placeholder="Name" {...field} />}
          />
          {errors.name && <ErrorText>This field is required</ErrorText>}
        </FormGroup>
        <FormGroup>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            }}
            render={({ field }) => <Input placeholder="Email" {...field} />}
          />
          {errors.email?.type === 'required' && <ErrorText>This field is required</ErrorText>}
          {errors.email?.type === 'pattern' && <ErrorText>Invalid email address</ErrorText>}
        </FormGroup>
        <FormGroup>
          <Controller
            name="message"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextArea placeholder="Your message" rows={10} cols={30} id="message" {...field} />
            )}
          />
          {errors.message && <ErrorText>This field is required</ErrorText>}
        </FormGroup>
        <SendButton type="submit" className="send-button">
          <span>Send</span>
        </SendButton>
      </form>
    </FormContainer>
  );
};

export default FooterContactForm;
