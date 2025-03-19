import { FC } from 'react';
import { BsTelephone } from 'react-icons/bs';
import { FaFan, FaGuitar, FaSpa, FaUserShield, FaWifi } from 'react-icons/fa';
import { GiBinoculars, GiHomeGarage } from 'react-icons/gi';
import { IoIosPeople } from 'react-icons/io';
import { IoBed, IoRestaurantOutline } from 'react-icons/io5';
import {
  MdLocalBar,
  MdOutlineCleaningServices,
  MdOutlineLocalLaundryService,
  MdPool,
} from 'react-icons/md';
import { RxDimensions } from 'react-icons/rx';
import { TbAirConditioning } from 'react-icons/tb';
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

const iconMap: Record<string, JSX.Element> = {
  BsTelephone: <BsTelephone />,
  FaFan: <FaFan />,
  FaGuitar: <FaGuitar />,
  FaSpa: <FaSpa />,
  FaUserShield: <FaUserShield />,
  FaWifi: <FaWifi />,
  GiBinoculars: <GiBinoculars />,
  GiHomeGarage: <GiHomeGarage />,
  IoIosPeople: <IoIosPeople />,
  IoBed: <IoBed />,
  IoRestaurantOutline: <IoRestaurantOutline />,
  MdLocalBar: <MdLocalBar />,
  MdOutlineCleaningServices: <MdOutlineCleaningServices />,
  MdOutlineLocalLaundryService: <MdOutlineLocalLaundryService />,
  MdPool: <MdPool />,
  RxDimensions: <RxDimensions />,
  TbAirConditioning: <TbAirConditioning />,
};

const RoomDescriptionInfo: FC<ServiceRoomItemProps> = ({ roomData }) => {
  return (
    <>
      <RoomTitle>{roomData.name}</RoomTitle>

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
                  <RoomAmentitiesItem>
                    {iconMap[icon as keyof typeof iconMap] || <FaUserShield />}
                  </RoomAmentitiesItem>
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
