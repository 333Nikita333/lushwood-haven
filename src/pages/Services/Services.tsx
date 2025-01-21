import { FC, useEffect, useState } from 'react';
import { FaGuitar, FaSpa, FaUserShield, FaWifi } from 'react-icons/fa';
import { GiHomeGarage } from 'react-icons/gi';
import { IoRestaurantOutline } from 'react-icons/io5';
import { MdLocalBar, MdOutlineCleaningServices, MdPool } from 'react-icons/md';
import { TbAirConditioning } from 'react-icons/tb';
import ServiceBgParallaxContainer from '../../components/ServiceBgParallaxContainer';
import ServiceMainInfo from '../../components/ServiceMainInfo';
import ServiceRoomList from '../../components/ServiceRoomList';
import { servicesRoomBg } from '../../data/photos';
import useStore from '../../store';
import { Room } from '../../types';
import { InfoWrapper, WrapperOuter } from './Services.styled';

const listServicesOne = [
  {
    icon: <FaWifi />,
    name: 'Free Wi-Fi',
  },
  {
    icon: <IoRestaurantOutline />,
    name: 'Restaurant',
  },
  {
    icon: <MdLocalBar />,
    name: 'Bar',
  },
  {
    icon: <FaSpa />,
    name: 'Spa and wellness services',
  },
  {
    icon: <TbAirConditioning />,
    name: 'Air conditioning',
  },
];
const listServicesTwo = [
  {
    icon: <MdOutlineCleaningServices />,
    name: 'Room service',
  },
  {
    icon: <FaGuitar />,
    name: 'Entertainment activities',
  },
  {
    icon: <MdPool />,
    name: 'Swimming pools',
  },
  {
    icon: <GiHomeGarage />,
    name: 'Parking',
  },
  {
    icon: <FaUserShield />,
    name: 'Security',
  },
];

const Services: FC = () => {
  const { topPage, middlePage, bottomPage } = servicesRoomBg;
  const { getRoomsData } = useStore(state => ({
    isLoading: state.isLoading,
    getRoomsData: state.getRoomsData,
  }));
  const [rooms, setRooms] = useState<Room[] | null>(null);

  const getRoomsInfo = async (): Promise<void> => {
    const data = await getRoomsData();

    if (data) {
      setRooms(data);
    }
  };

  useEffect(() => {
    document.title = 'Services';
    getRoomsInfo();
  }, []);

  const getArrayRoomsByType = (roomType: string): Room[] => {
    return rooms?.filter(room => room.type === roomType) || [];
  };

  return (
    <WrapperOuter>
      <ServiceBgParallaxContainer options={topPage}>
        <ServiceRoomList roomList={getArrayRoomsByType('Standard')} />
      </ServiceBgParallaxContainer>

      <InfoWrapper>
        <ServiceMainInfo listServices={listServicesOne} />
      </InfoWrapper>

      <ServiceBgParallaxContainer options={middlePage}>
        <ServiceRoomList roomList={getArrayRoomsByType('Family')} />
      </ServiceBgParallaxContainer>

      <InfoWrapper>
        <ServiceMainInfo listServices={listServicesTwo} />
      </InfoWrapper>

      <ServiceBgParallaxContainer options={bottomPage}>
        <ServiceRoomList roomList={getArrayRoomsByType('Suite')} />
      </ServiceBgParallaxContainer>
    </WrapperOuter>
  );
};

export default Services;
