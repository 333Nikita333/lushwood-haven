import { FC } from 'react';
import { ServiceRoomListProps } from '../../types';
import ServiceRoomItem from '../ServiceRoomItem';
import { Wrapper } from './ServiceRoomList.styled';

const ServiceRoomList: FC<ServiceRoomListProps> = ({ roomList }) => {
  return (
    <Wrapper>
      {roomList.map((item, index) => (
        <li style={{ height: 200, width: 200, backgroundColor: 'white' }} key={index}>
          <ServiceRoomItem roomData={item} />
        </li>
      ))}
    </Wrapper>
  );
};
export default ServiceRoomList;
