import { FC } from 'react';
import { ServiceRoomItemProps } from '../../types';
import {
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
} from './RoomDescriptionInfo.styled';

const RoomDescriptionInfo: FC<ServiceRoomItemProps> = ({ roomData }) => {
  return (
    <>
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
    </>
  );
};

export default RoomDescriptionInfo;
