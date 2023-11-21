import { FC } from 'react';
import Tilt from 'react-parallax-tilt';
import { ServiceRoomItemProps } from '../../types';
import ImageSlider from '../ImageSlider';
import { Item, LinkDetails, RoomPrice, RoomTitle } from './ServiceRoomItem.styled';

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
        <ImageSlider images={images.slice(0, 3)} />
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
