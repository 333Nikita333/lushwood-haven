import { FC } from 'react';
import { ServiceRoomItemProps } from '../../types';
import ImageSlider from '../ImageSlider';
import { LinkDetails, RoomPrice, RoomTitle, Wrapper } from './ServiceRoomItem.styled';

const ServiceRoomItem: FC<ServiceRoomItemProps> = ({ roomData }) => {
  const { id, type, images, perNight } = roomData;

  return (
    <Wrapper>
      <ImageSlider images={images} />
      <RoomTitle>{type}</RoomTitle>
      <RoomPrice>
        <span>{perNight}.00$</span> / per night
      </RoomPrice>
      <LinkDetails to={`/services/rooms/${id}`}>Details</LinkDetails>
    </Wrapper>
  );
};
export default ServiceRoomItem;
