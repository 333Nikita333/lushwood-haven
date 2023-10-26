import { FC } from 'react';
import { ServiceRoomItemProps } from '../../types';
import {
  LinkDetails,
  RoomPrice,
  RoomTitle,
  Wrapper,
} from './ServiceRoomItem.styled';
import ImageSlider from '../ImageSlider';

const ServiceRoomItem: FC<ServiceRoomItemProps> = ({ roomData }) => {
  const { id, type, images, perNight } = roomData;

  return (
    <Wrapper>
      {/* <SliderWrapper> */}
        <ImageSlider images={images} />
      {/* </SliderWrapper> */}

      {/* <RoomImage src={image} alt={type} /> */}
      <RoomTitle>{type}</RoomTitle>
      <RoomPrice>
        <span>{perNight}.00$</span> / per night
      </RoomPrice>
      <LinkDetails to={`/services/rooms/${id}`}>Details</LinkDetails>
    </Wrapper>
  );
};
export default ServiceRoomItem;
