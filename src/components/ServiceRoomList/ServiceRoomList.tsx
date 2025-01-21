import { FC } from 'react';
import { ServiceRoomListProps } from '../../types';
import ServiceRoomItem from '../ServiceRoomItem';
import { Wrapper } from './ServiceRoomList.styled';

const ServiceRoomList: FC<ServiceRoomListProps> = ({ roomList }) => {
  return (
    <Wrapper>
      {roomList.map(item => {
        console.log(item);
        return <ServiceRoomItem key={item.id} roomData={item} />
      })}
    </Wrapper>
  );
};
export default ServiceRoomList;
