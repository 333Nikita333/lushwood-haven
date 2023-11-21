import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import RoomImagesSlider from '../../components/RoomImagesSlider';
import { RoomType } from '../../types/types';
import { familyRoomList, standartRoomList, suiteRoomList } from '../Services/Services';
import { PriceDetails, RoomDetails, RoomTypeTitle, Wrapper } from './ServiceRoomPage.styled';

const allRoomList = [...standartRoomList, ...familyRoomList, ...suiteRoomList];

const ServiceRoomPage: FC = () => {
  const { roomId } = useParams();
  const [roomData, setRoomData] = useState<RoomType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const searchRoomData = (roomId: string): void => {
      try {
        const curRoom = allRoomList.find((room: RoomType) => roomId === room.id);

        if (!curRoom) {
          throw new Error('Not found any room');
        }

        setRoomData(curRoom);
        setIsLoading(false);
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

  if (!roomData && !isLoading) {
    return <Wrapper>Not found any room</Wrapper>;
  }

  if (isLoading) {
    return <div style={{ fontSize: '32px', textAlign: 'center' }}>Loading...</div>;
  }

  if (roomData && !isLoading) {
    return (
      <Wrapper>
        <RoomImagesSlider images={roomData.images} />

        <RoomDetails>
          <Link to="/services">Go Back</Link>
          <RoomTypeTitle>{roomData.type}</RoomTypeTitle>

          <PriceDetails>
            <ul>
              {roomData.descriptions.amenities.map((description, index) => (
                <li key={index}>{description}</li>
              ))}
            </ul>
          </PriceDetails>
        </RoomDetails>
      </Wrapper>
    );
  }
};

export default ServiceRoomPage;
