import { FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { OrderFormData } from '../../types';
import {
  Button,
  ErrorText,
  FormContainer,
  FormGroup,
  OrderFormContainer,
  RadioButton,
  RadioGroup,
  RadioInput,
  RadioLabel,
} from './OrderForm.styled';

const radioButtons: ReadonlyArray<string> = ['Standart', 'Family', 'Suite'];

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

  const [showCheckInError, setShowCheckInError] = useState<boolean>(false);
  const [showCheckOutError, setShowCheckOutError] = useState<boolean>(false);

  const onSubmit: SubmitHandler<OrderFormData> = (data): void => {
    console.log(data);
  };

  return (
    <FormContainer>
      <OrderFormContainer onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <input
                className="form__field"
                placeholder="First Name"
                {...field}
              />
            )}
          />
          <label className="form__label">First Name</label>
          {errors.firstName && <ErrorText>This field is required</ErrorText>}
        </FormGroup>

        <FormGroup>
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <input
                className="form__field"
                placeholder="Last Name"
                {...field}
              />
            )}
          />
          <label className="form__label">Last Name</label>
          {errors.lastName && <ErrorText>This field is required</ErrorText>}
        </FormGroup>

        <FormGroup>
          <Controller
            name="phoneNumber"
            control={control}
            defaultValue=""
            rules={{ required: true, pattern: /^\+[0-9]+$/ }}
            render={({ field }) => (
              <input
                className="form__field"
                placeholder="Phone Number"
                {...field}
              />
            )}
          />
          <label className="form__label">Phone Number</label>
          {errors.phoneNumber?.type === 'required' && (
            <ErrorText>This field is required</ErrorText>
          )}
          {errors.phoneNumber?.type === 'pattern' && (
            <ErrorText>Invalid phone number</ErrorText>
          )}
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
            render={({ field }) => (
              <input className="form__field" placeholder="Email" {...field} />
            )}
          />
          <label className="form__label">Email</label>
          {errors.email?.type === 'required' && (
            <ErrorText>This field is required</ErrorText>
          )}
          {errors.email?.type === 'pattern' && (
            <ErrorText>Invalid email address</ErrorText>
          )}
        </FormGroup>

        <FormGroup>
          <Controller
            name="checkInDate"
            control={control}
            rules={{
              required: true,
              validate: value => {
                const isValid =
                  value && value <= checkOutDate && value >= today;
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
                {showCheckInError && (
                  <ErrorText>Invalid check-in date</ErrorText>
                )}
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
                const isValid: boolean =
                  value && value >= checkInDate && value >= today;
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
                {showCheckOutError && (
                  <ErrorText>Invalid check-out date</ErrorText>
                )}
              </div>
            )}
          />
          <label className="form__label">Check-out Date and Time</label>
          {errors.checkOutDate && <ErrorText>This field is required</ErrorText>}
        </FormGroup>

        <FormGroup>
          <Controller
            name="roomType"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <RadioGroup>
                {radioButtons.map(item => (
                  <RadioButton key={item}>
                    <RadioInput
                      type="radio"
                      {...field}
                      value={item.toLowerCase()}
                      id={item.toLowerCase()}
                    />
                    <RadioLabel htmlFor={item.toLowerCase()}>
                      <span></span>
                      {item}
                    </RadioLabel>
                  </RadioButton>
                ))}
              </RadioGroup>
            )}
          />
          <label className="form__label">Room Type</label>
          {errors.roomType && <ErrorText>This field is required</ErrorText>}
        </FormGroup>
        <Button type="submit">Submit</Button>
      </OrderFormContainer>
    </FormContainer>
  );
};

export default OrderForm;
