import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import RoomImagesSlider from '../../components/RoomImagesSlider';
import { RoomType } from '../../types/types';
import { familyRoomList, standartRoomList, suiteRoomList } from '../Services/Services';
import {
  ContentInfo,
  RoomAmentitiesItem,
  RoomAmentitiesList,
  RoomAmentitiesTitle,
  RoomAmentitiesWrapper,
  RoomDescription,
  RoomInfo,
  RoomPriceLabel,
  RoomPriceNumber,
  RoomPriceWrapper,
  RoomServicesItem,
  RoomServicesList,
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

        <ContentInfo>
          <Link to="/services">Go Back</Link>
          <RoomInfo>
            <RoomTitle>{roomData.type}</RoomTitle>
            <RoomDescription>Description: {roomData.descriptions.text}</RoomDescription>
            <RoomServicesList>
              <RoomServicesItem>
                Max number of guests: {roomData.descriptions.people}
              </RoomServicesItem>
              <RoomServicesItem>Room size: {roomData.descriptions.size}</RoomServicesItem>
              <RoomServicesItem>Bed type: {roomData.descriptions.bedType}</RoomServicesItem>
              <RoomServicesItem>View of: {roomData.descriptions.view}</RoomServicesItem>
            </RoomServicesList>
          </RoomInfo>

          <RoomAmentitiesWrapper>
            <RoomAmentitiesList>
              {roomData.descriptions.amenities.map(({ icon, desc }, index) => (
                <RoomAmentitiesItem key={index}>
                  {icon}
                  <RoomAmentitiesTitle>{desc}</RoomAmentitiesTitle>
                </RoomAmentitiesItem>
              ))}
            </RoomAmentitiesList>
          </RoomAmentitiesWrapper>

          <RoomPriceWrapper>
            <RoomPriceLabel>Price per night</RoomPriceLabel>
            <RoomPriceNumber>{roomData.perNight}$</RoomPriceNumber>
          </RoomPriceWrapper>
        </ContentInfo>
      </Wrapper>
    );
  }
};

export default ServiceRoomPage;
