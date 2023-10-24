import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './ServiceRoomPage.styled';
import { standartRoomList, familyRoomList, suiteRoomList } from '../Services/Services';
import { RoomType } from '../../types/types';

const allRoomList = [...standartRoomList, ...familyRoomList, ...suiteRoomList];

const ServiceRoomPage: FC = () => {
  const { roomId } = useParams();

  const roomData = allRoomList.find((room: RoomType) => roomId === room.id);

  console.log(roomData);
  
  if (!roomData) {
    return <Container>Not found any room</Container>;
  }

  return <Container>Room Page - {roomId}</Container>;
};

export default ServiceRoomPage;

{
  /* <ImageWrapper>
        <img src="/public/images/services_images/page3.png" alt="" />
      </ImageWrapper>

      <DescriptionWrapper>
        <RoomDetails>
          <RoomTypeTitle>Standard Single Room</RoomTypeTitle>
          <p>
            Standard Single Rooms are designed in open-concept living area and have many facilities.
          </p>
        </RoomDetails>

        <PriceDetails>
          <p>
            <span>112$</span> / per night
          </p>
          <a href="">View Details</a>
        </PriceDetails>
      </DescriptionWrapper> */
}
