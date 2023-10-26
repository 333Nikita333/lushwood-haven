import { FC } from 'react';
import { ServiceRoomListProps } from '../../types';
import ServiceRoomItem from '../ServiceRoomItem';
import { Wrapper } from './ServiceRoomList.styled';

const ServiceRoomList: FC<ServiceRoomListProps> = ({ roomList }) => {
  return (
    <Wrapper>
      {roomList.map((item, index) => (
        <ServiceRoomItem key={index} roomData={item} />
      ))}
    </Wrapper>
  );
};
export default ServiceRoomList;
