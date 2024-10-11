import { FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import 'react-phone-input-2/lib/style.css';
import { OrderFormData } from '../../types';
import {
  ErrorText,
  FormContainer,
  FormGroup,
  FormGroupButtons,
  FormTitle,
  OrderFormContainer,
  PhoneNumberInput,
  RadioButton,
  RadioButtonsLabel,
  RadioGroup,
  RadioInput,
  RadioLabel,
  Select,
  SubmitButton,
} from './OrderForm.styled';

const radioButtons: ReadonlyArray<string> = ['Standard', 'Family', 'Suite'];

const roomOptions: Record<string, string[]> = {
  Standard: ['Standard Single Room', 'Standard Double Room', 'Standard Max Room'],
  Family: ['Family Double Room', 'Family Triple Room', 'Family Max Room'],
  Suite: ['Suite Single Room', 'Suite Double Room', 'Suite Max Room'],
};

const OrderForm: FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm<OrderFormData>();

  const today: Date = new Date();
  const checkInDate: Date = watch('checkInDate');
  const checkOutDate: Date = watch('checkOutDate');
  const roomType: string = watch('roomType');

  const [showCheckInError, setShowCheckInError] = useState<boolean>(false);
  const [showCheckOutError, setShowCheckOutError] = useState<boolean>(false);

  const onSubmit: SubmitHandler<OrderFormData> = (data): void => {
    console.log(data);
  };

  return (
    <FormContainer>
      <FormTitle>Room reservation</FormTitle>
      <OrderFormContainer onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => <input className="form__field" placeholder="Name" {...field} />}
          />
          <label className="form__label">Name</label>
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
            render={({ field }) => <input className="form__field" placeholder="Email" {...field} />}
          />
          <label className="form__label">Email</label>
          {errors.email?.type === 'required' && <ErrorText>This field is required</ErrorText>}
          {errors.email?.type === 'pattern' && <ErrorText>Invalid email address</ErrorText>}
        </FormGroup>

        <FormGroup>
          <Controller
            name="checkInDate"
            control={control}
            rules={{
              required: true,
              validate: value => {
                const isValid = value && value <= checkOutDate && value >= today;
                setShowCheckInError(!isValid);
                return isValid;
              },
            }}
            render={({ field }) => (
              <div>
                <DatePicker
                  selected={field.value}
                  onChange={date => setValue('checkInDate', date as Date)}
                  showTimeSelect
                  minDate={today}
                  maxDate={checkOutDate ? new Date(checkOutDate) : null}
                  timeFormat="HH:mm"
                  dateFormat="dd/MM/yyyy, HH:mm"
                />
                {showCheckInError && <ErrorText>Invalid check-in date</ErrorText>}
              </div>
            )}
          />
          <label className="form__label">Check-in Date and Time</label>
          {errors.checkInDate && <ErrorText>This field is required</ErrorText>}
        </FormGroup>

        <FormGroup>
          <Controller
            name="checkOutDate"
            control={control}
            rules={{
              required: true,
              validate: value => {
                const isValid: boolean = value && value >= checkInDate && value >= today;
                setShowCheckOutError(!isValid);
                return isValid;
              },
            }}
            render={({ field }) => (
              <div>
                <DatePicker
                  selected={field.value}
                  onChange={date => setValue('checkOutDate', date as Date)}
                  showTimeSelect
                  minDate={checkInDate ? new Date(checkInDate) : today}
                  timeFormat="HH:mm"
                  dateFormat="dd/MM/yyyy, HH:mm"
                />
                {showCheckOutError && <ErrorText>Invalid check-out date</ErrorText>}
              </div>
            )}
          />
          <label className="form__label">Check-out Date and Time</label>
          {errors.checkOutDate && <ErrorText>This field is required</ErrorText>}
        </FormGroup>

        <FormGroup>
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <PhoneNumberInput
                country={'us'}
                preferredCountries={['us', 'ua']}
                excludeCountries={['ru', 'by', 'hu', 'kp']}
                enableSearch={true}
                {...field}
              />
            )}
          />
          <label className="form__label">Phone Number</label>
          {errors.phone?.type === 'required' && <ErrorText>This field is required</ErrorText>}
          {errors.phone?.type === 'pattern' && <ErrorText>Invalid phone number</ErrorText>}
        </FormGroup>

        <FormGroupButtons>
          <RadioButtonsLabel className="form__label">Room Type</RadioButtonsLabel>
          <Controller
            name="roomType"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <RadioGroup>
                {radioButtons.map(item => (
                  <RadioButton key={item}>
                    <RadioInput type="radio" {...field} value={item} id={item.toLowerCase()} />
                    <RadioLabel htmlFor={item.toLowerCase()}>
                      <span></span>
                      {item}
                    </RadioLabel>
                  </RadioButton>
                ))}
              </RadioGroup>
            )}
          />
          {errors.roomType && <ErrorText>This field is required</ErrorText>}
        </FormGroupButtons>

        {roomType && (
          <FormGroup>
            <Controller
              name="roomName"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select {...field}>
                  {roomOptions[roomType].map(roomName => (
                    <option key={roomName} value={roomName}>
                      {roomName}
                    </option>
                  ))}
                </Select>
              )}
            />
            <label className="form__label">Room Name</label>
            {errors.roomName && <ErrorText>This field is required</ErrorText>}
          </FormGroup>
        )}

        <SubmitButton type="submit">Submit</SubmitButton>
      </OrderFormContainer>
    </FormContainer>
  );
};

export default OrderForm;
