import { FC } from 'react';
import { ServiceRoomItemProps } from '../../types';
import ImageSlider from '../ImageSlider';
import { LinkDetails, RoomPrice, RoomTitle, Item } from './ServiceRoomItem.styled';
import Tilt from 'react-parallax-tilt';
const ServiceRoomItem: FC<ServiceRoomItemProps> = ({ roomData }) => {
  const { id, type, images, perNight } = roomData;
  const userAgent = navigator.userAgent;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return (
      <Item>
        <ImageSlider images={images} />
        <RoomTitle>{type}</RoomTitle>
        <RoomPrice>
          <span>{perNight}.00$</span> / per night
        </RoomPrice>
        <LinkDetails to={`/services/rooms/${id}`}>Details</LinkDetails>
      </Item>
    );
  }

  return (
    <Tilt scale={1.1} transitionSpeed={1000}>
      <Item>
        <ImageSlider images={images} />
        <RoomTitle>{type}</RoomTitle>
        <RoomPrice>
          <span>{perNight}.00$</span> / per night
        </RoomPrice>
        <LinkDetails to={`/services/rooms/${id}`}>Details</LinkDetails>
      </Item>
    </Tilt>
  );
};
export default ServiceRoomItem;
