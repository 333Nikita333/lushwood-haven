import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { RoomType } from '../../types/types';
import { familyRoomList, standartRoomList, suiteRoomList } from '../Services/Services';
import { PriceDetails, RoomDetails, RoomTypeTitle, Wrapper } from './ServiceRoomPage.styled';
import RoomImagesSlider from '../../components/RoomImagesSlider';

const allRoomList = [...standartRoomList, ...familyRoomList, ...suiteRoomList];

const ServiceRoomPage: FC = () => {
  const { roomId } = useParams();
  const [roomData, setRoomData] = useState<RoomType | null>(null);

  useEffect(() => {
    const searchRoomData = (roomId: string) => {
      try {
        const curRoom: RoomType | undefined = allRoomList.find(
          (room: RoomType) => roomId === room.id
        );

        if (!curRoom) {
          throw new Error('Not found any room');
        }

        setRoomData(curRoom);
      } catch (error) {
        console.log(error);
        setRoomData(null);
      }
    };

    searchRoomData(roomId as string);

    return () => {
      window.scrollTo(0, 0);
    };
  }, [roomId]);

  console.log('roomData =>', roomData);

  if (!roomData) {
    return <Wrapper>Not found any room</Wrapper>;
  }

  return (
    <Wrapper>
      <RoomImagesSlider />
      <RoomDetails>
        <RoomTypeTitle>{roomData.type}</RoomTypeTitle>
        <PriceDetails>
          <ul>
            {roomData.descriptions.amenities.map((description, index) => (
              <li key={index}>{description}</li>
            ))}
          </ul>
        </PriceDetails>
      </RoomDetails>
      <Link to="/services">Go Back</Link>
    </Wrapper>
  );
};

export default ServiceRoomPage;
