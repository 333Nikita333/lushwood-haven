import { FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { OrderFormData } from '../../types';
import {
  FormContainer,
  OrderFormContainer,
  FormGroup,
  Label,
  Input,
  ErrorText,
  Select,
  Button
} from './OrderForm.styled';

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
          <Label>First Name</Label>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => <Input {...field} />}
          />
          {errors.firstName && <ErrorText>This field is required</ErrorText>}
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => <Input {...field} />}
          />
          {errors.lastName && <ErrorText>This field is required</ErrorText>}
        </FormGroup>
        <FormGroup>
          <Label>Phone Number</Label>
          <Controller
            name="phoneNumber"
            control={control}
            defaultValue=""
            rules={{ required: true, pattern: /^\+[0-9]+$/ }}
            render={({ field }) => <Input {...field} />}
          />
          {errors.phoneNumber?.type === 'required' && (
            <ErrorText>This field is required</ErrorText>
          )}
          {errors.phoneNumber?.type === 'pattern' && (
            <ErrorText>Invalid phone number</ErrorText>
          )}
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            }}
            render={({ field }) => <Input {...field} />}
          />
          {errors.email?.type === 'required' && (
            <ErrorText>This field is required</ErrorText>
          )}
          {errors.email?.type === 'pattern' && (
            <ErrorText>Invalid email address</ErrorText>
          )}
        </FormGroup>
        <FormGroup>
          <Label>Check-in Date and Time</Label>
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
                {showCheckInError && <ErrorText>Invalid check-in date</ErrorText>}
              </div>
            )}
          />
          {errors.checkInDate && <ErrorText>This field is required</ErrorText>}
        </FormGroup>
        <FormGroup>
          <Label>Check-out Date and Time</Label>
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
                {showCheckOutError && <ErrorText>Invalid check-out date</ErrorText>}
              </div>
            )}
          />
          {errors.checkOutDate && <ErrorText>This field is required</ErrorText>}
        </FormGroup>
        <FormGroup>
          <Label>Room Type</Label>
          <Controller
            name="roomType"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select {...field}>
                <option value="standard">Standard</option>
                <option value="suite">Family</option>
                <option value="deluxe">Deluxe</option>
              </Select>
            )}
          />
          {errors.roomType && <ErrorText>This field is required</ErrorText>}
        </FormGroup>
        <Button type="submit">Submit</Button>
      </OrderFormContainer>
    </FormContainer>
  );
};

export default OrderForm;
