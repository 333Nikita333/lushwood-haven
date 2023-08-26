import { FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { OrderFormData } from '../../types';

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => <input {...field} />}
        />
        {errors.firstName && <span>This field is required</span>}
      </div>
      <div>
        <label>Last Name</label>
        <Controller
          name="lastName"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => <input {...field} />}
        />
        {errors.lastName && <span>This field is required</span>}
      </div>
      <div>
        <label>Phone Number</label>
        <Controller
          name="phoneNumber"
          control={control}
          defaultValue=""
          rules={{ required: true, pattern: /^\+[0-9]+$/ }}
          render={({ field }) => <input {...field} />}
        />
        {errors.phoneNumber?.type === 'required' && (
          <span>This field is required</span>
        )}
        {errors.phoneNumber?.type === 'pattern' && (
          <span>Invalid phone number</span>
        )}
      </div>
      <div>
        <label>Email</label>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          }}
          render={({ field }) => <input {...field} />}
        />
        {errors.email?.type === 'required' && (
          <span>This field is required</span>
        )}
        {errors.email?.type === 'pattern' && <span>Invalid email address</span>}
      </div>
      <div>
        <label>Check-in Date and Time</label>
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
              {showCheckInError && <span>Invalid check-in date</span>}
            </div>
          )}
        />
        {errors.checkInDate && <span>This field is required</span>}
      </div>
      <div>
        <label>Check-out Date and Time</label>
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
              {showCheckOutError && <span>Invalid check-out date</span>}
            </div>
          )}
        />
        {errors.checkOutDate && <span>This field is required</span>}
      </div>
      <div>
        <label>Room Type</label>
        <Controller
          name="roomType"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <select {...field}>
              <option value="standard">Standard</option>
              <option value="suite">Family</option>
              <option value="deluxe">Deluxe</option>
            </select>
          )}
        />
        {errors.roomType && <span>This field is required</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default OrderForm;
