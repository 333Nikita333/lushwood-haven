import { FC } from 'react';
import Tilt from 'react-parallax-tilt';
import { ServiceRoomItemProps } from '../../types';
import ImageSlider from '../ImageSlider';
import { Item, LinkDetails, RoomPrice, RoomTitle } from './ServiceRoomItem.styled';

const ServiceRoomItem: FC<ServiceRoomItemProps> = ({ roomData }) => {
  const { name, images, perNight } = roomData;
  const roomNameId = name.toLowerCase().replace(/\s+/g, '-');

  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  if (isMobile) {
    return (
      <Item>
        <ImageSlider images={images} />
        <RoomTitle>{name}</RoomTitle>
        <RoomPrice>
          <span>{perNight}.00$</span> / per night
        </RoomPrice>
        <LinkDetails to={`/services/rooms/${roomNameId}`}>Details</LinkDetails>
      </Item>
    );
  }

  return (
    <Tilt scale={1.1} transitionSpeed={1000}>
      <Item>
        <ImageSlider images={images.slice(0, 3)} />
        <RoomTitle>{name}</RoomTitle>
        <RoomPrice>
          <span>{perNight}.00$</span> / per night
        </RoomPrice>
        <LinkDetails to={`/services/rooms/${roomNameId}`}>Details</LinkDetails>
      </Item>
    </Tilt>
  );
};

export default ServiceRoomItem;
