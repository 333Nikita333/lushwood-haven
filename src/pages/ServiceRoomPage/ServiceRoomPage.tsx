import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import RoomImagesSlider from '../../components/RoomImagesSlider';
import { RoomType } from '../../types/types';
import { familyRoomList, standartRoomList, suiteRoomList } from '../Services/Services';
import {
  ContentInfo,
  MainInfo,
  RoomAmentitieTitle,
  RoomAmentitiesItem,
  RoomAmentitiesRow,
  RoomAmentitiesTable,
  RoomAmentitiesTitle,
  RoomAmentitiesWrapper,
  RoomDescription,
  RoomDescriptionTitle,
  RoomInfo,
  RoomPriceLabel,
  RoomPriceNumber,
  RoomPriceWrapper,
  RoomTitle,
  Wrapper,
} from './ServiceRoomPage.styled';

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
        document.title = curRoom.type || 'Room of Lushwood Haven';

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

  if (!roomData && !isLoading) {
    return <Wrapper>Not found any room</Wrapper>;
  }

  if (isLoading && roomData) {
    return (
      <Wrapper>
        <div style={{ fontSize: '32px', textAlign: 'center' }}>Loading...</div>
      </Wrapper>
    );
  }

  if (roomData && !isLoading) {
    return (
      <Wrapper>
        <RoomImagesSlider images={roomData.images} />

        <ContentInfo>
          <Link to="/services">Go Back</Link>
          <RoomTitle>{roomData.type}</RoomTitle>
          <MainInfo>
            <RoomInfo>
              <RoomDescriptionTitle>Description</RoomDescriptionTitle>
              <RoomDescription>{roomData.description}</RoomDescription>
            </RoomInfo>

            <RoomAmentitiesWrapper>
              <RoomAmentitiesTitle>Amenities</RoomAmentitiesTitle>
              <RoomAmentitiesTable>
                <tbody>
                  {roomData.amenities.map(({ icon, desc }, index) => (
                    <RoomAmentitiesRow key={index}>
                      <RoomAmentitiesItem>{icon}</RoomAmentitiesItem>
                      <RoomAmentitiesItem>
                        <RoomAmentitieTitle>{desc}</RoomAmentitieTitle>
                      </RoomAmentitiesItem>
                    </RoomAmentitiesRow>
                  ))}
                </tbody>
              </RoomAmentitiesTable>
            </RoomAmentitiesWrapper>

            <RoomPriceWrapper>
              <RoomPriceLabel>Price per night</RoomPriceLabel>
              <RoomPriceNumber>{roomData.perNight}$</RoomPriceNumber>
            </RoomPriceWrapper>
          </MainInfo>
        </ContentInfo>
      </Wrapper>
    );
  }
};

export default ServiceRoomPage;
