import { FC, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import 'react-phone-input-2/lib/style.css';
import { BookRoomData, OrderFormData } from '../../types';
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
import useStore from '../../store';

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
  } = useForm<OrderFormData>({
    mode: 'onBlur',
  });

  const today: Date = new Date();
  const dateCheckIn: Date = watch('dateCheckIn');
  const dateCheckOut: Date = watch('dateCheckOut');
  const roomType: string = watch('roomType');
  const roomName: string = watch('roomName');

  const { reserveRoom, isLoading } = useStore(state => ({
    reserveRoom: state.reserveRoom,
    isLoading: state.isLoading,
  }));

  useEffect(() => {
    if (roomType && (!roomName || !roomOptions[roomType].includes(roomName))) {
      setValue('roomName', roomOptions[roomType][0]);
    }
  }, [roomType, roomName, setValue]);

  const formatOrderRoomData = (data: OrderFormData): BookRoomData => {
    const { name, email, phone, dateCheckIn, dateCheckOut, ...rest } = data;

    const pad = (num: number) => num.toString().padStart(2, '0');
    const formatDateTime = (date: Date) =>
      `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(
        date.getHours()
      )}:${pad(date.getMinutes())}`;

    return {
      client: { name, email, phone },
      dateCheckIn: formatDateTime(dateCheckIn),
      dateCheckOut: formatDateTime(dateCheckOut),
      ...rest,
    };
  };

  const onSubmit: SubmitHandler<OrderFormData> = async (data): Promise<void> => {
    const formattedData = formatOrderRoomData(data);

    console.log('Submitted formattedData:', formattedData);

    await reserveRoom(formattedData);
  };

  return (
    <FormContainer>
      <FormTitle>Room Reservation</FormTitle>
      <OrderFormContainer onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: 'Name is required' }}
            render={({ field }) => <input className="form__field" placeholder="Name" {...field} />}
          />
          <label className="form__label">Name</label>
          {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
        </FormGroup>

        <FormGroup>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            }}
            render={({ field }) => <input className="form__field" placeholder="Email" {...field} />}
          />
          <label className="form__label">Email</label>
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        </FormGroup>

        <FormGroup>
          <Controller
            name="dateCheckIn"
            control={control}
            rules={{
              required: 'Check-in date is required',
              validate: value =>
                value && value >= today ? true : 'Check-in date must be today or later',
            }}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={date => setValue('dateCheckIn', date as Date)}
                showTimeSelect
                minDate={today}
                maxDate={dateCheckOut || null}
                timeFormat="HH:mm"
                dateFormat="dd/MM/yyyy, HH:mm"
              />
            )}
          />
          <label className="form__label">Check-in Date and Time</label>
          {errors.dateCheckIn && <ErrorText>{errors.dateCheckIn.message}</ErrorText>}
        </FormGroup>

        <FormGroup>
          <Controller
            name="dateCheckOut"
            control={control}
            rules={{
              required: 'Check-out date is required',
              validate: value =>
                value && value > dateCheckIn ? true : 'Check-out date must be after check-in date',
            }}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={date => setValue('dateCheckOut', date as Date)}
                showTimeSelect
                minDate={dateCheckIn || today}
                timeFormat="HH:mm"
                dateFormat="dd/MM/yyyy, HH:mm"
              />
            )}
          />
          <label className="form__label">Check-out Date and Time</label>
          {errors.dateCheckOut && <ErrorText>{errors.dateCheckOut.message}</ErrorText>}
        </FormGroup>

        <FormGroup>
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            rules={{
              required: 'Phone number is required',
              minLength: {
                value: 10,
                message: 'Phone number must be at least 10 digits',
              },
            }}
            render={({ field }) => (
              <PhoneNumberInput
                country={'us'}
                preferredCountries={['us', 'ua']}
                excludeCountries={['ru', 'by', 'hu', 'kp']}
                enableSearch
                {...field}
              />
            )}
          />
          <label className="form__label">Phone Number</label>
          {errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}
        </FormGroup>

        <FormGroupButtons>
          <RadioButtonsLabel className="form__label">Room Type</RadioButtonsLabel>
          <Controller
            name="roomType"
            control={control}
            rules={{ required: 'Please select a room type' }}
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
          {errors.roomType && <ErrorText>{errors.roomType.message}</ErrorText>}
        </FormGroupButtons>

        {roomType && (
          <FormGroup>
            <Controller
              name="roomName"
              control={control}
              rules={{ required: 'Please select a room name' }}
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
            {errors.roomName && <ErrorText>{errors.roomName.message}</ErrorText>}
          </FormGroup>
        )}

        <SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send'}
        </SubmitButton>
      </OrderFormContainer>
    </FormContainer>
  );
};

export default OrderForm;
