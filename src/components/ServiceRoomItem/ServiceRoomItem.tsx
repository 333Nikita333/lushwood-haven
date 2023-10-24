import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ServiceRoomItemProps } from '../../types';
import { Wrapper } from './ServiceRoomItem.styled';

const ServiceRoomItem: FC<ServiceRoomItemProps> = ({ roomData }) => {
  const { id, type, image, perNight } = roomData;
  
  return (
    <Wrapper>
      <img src={image} alt="" />
      <p>{type}</p>
      <p>`{perNight}.00$ / per night`</p>
      <Link to={`/services/rooms/${id}`}>Details</Link>
    </Wrapper>
  );
};
export default ServiceRoomItem;
