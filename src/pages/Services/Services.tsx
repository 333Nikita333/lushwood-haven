import { FC } from 'react';
import { BsTelephone } from 'react-icons/bs';
import { FaFan, FaGuitar, FaSpa, FaUserShield, FaWifi } from 'react-icons/fa';
import { GiHomeGarage } from 'react-icons/gi';
import { GrOverview } from 'react-icons/gr';
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
import ServiceBgParallaxContainer from '../../components/ServiceBgParallaxContainer';
import ServiceMainInfo from '../../components/ServiceMainInfo';
import ServiceRoomList from '../../components/ServiceRoomList';
import { InfoWrapper, WrapperOuter } from './Services.styled';

const oneOptions = {
  bgImagePath: '/images/services_images/page1.png',
  bgImageDesc: 'wood',
  strength: 500,
};
const twoOptions = {
  bgImagePath: '/images/services_images/page2.png',
  bgImageDesc: 'hotel',
  strength: 500,
};
const threeOptions = {
  bgImagePath: '/images/services_images/page3.png',
  bgImageDesc: 'sauna',
  strength: 500,
};

export const standartRoomList = [
  {
    id: 'standart-single',
    images: [
      '/images/services_images/page1.png',
      '/images/services_images/page2.png',
      '/images/services_images/page3.png',
      '/images/services_images/page1.png',
      '/images/services_images/page2.png',
      '/images/services_images/page3.png',
    ],
    type: 'Standard Single Room',
    perNight: 119,
    description:
      'A cozy room with a queen bed, suitable for 1-2 people. Enjoy amenities like free Wi-Fi, in-room safety, laundry, and telephone. The room offers a view of the beach and has a size of 20 square meters.',
    amenities: [
      {
        icon: <IoIosPeople />,
        desc: '1 - 2 Persons',
      },
      {
        icon: <GrOverview />,
        desc: 'Beach view',
      },
      {
        icon: <IoBed />,
        desc: 'Double bed',
      },
      {
        icon: <RxDimensions />,
        desc: '20m²',
      },
      {
        icon: <FaWifi />,
        desc: 'Free Wi-Fi',
      },
      {
        icon: <FaUserShield />,
        desc: 'In-room safety',
      },
      {
        icon: <MdOutlineLocalLaundryService />,
        desc: 'Laundry',
      },
      {
        icon: <BsTelephone />,
        desc: 'Telephone',
      },
    ],
  },
  {
    id: 'standart-double',
    images: [
      '/images/services_images/page1.png',
      '/images/services_images/page2.png',
      '/images/services_images/page3.png',
    ],
    type: 'Standard Double Room',
    perNight: 159,
    description:
      'A comfortable room with a queen bed, suitable for 1-3 people. Enjoy amenities like free Wi-Fi, in-room safety, laundry, telephone, and minibar. The room offers a view of the beach and has a size of 25 square meters.',
    amenities: [
      {
        icon: <IoIosPeople />,
        desc: '1 - 3 Persons',
      },
      {
        icon: <GrOverview />,
        desc: 'Beach view',
      },
      {
        icon: <IoBed />,
        desc: 'Double bed, Divan',
      },
      {
        icon: <RxDimensions />,
        desc: '25m²',
      },
      {
        icon: <FaWifi />,
        desc: 'Free Wi-Fi',
      },
      {
        icon: <FaUserShield />,
        desc: 'In-room safety',
      },
      {
        icon: <MdOutlineLocalLaundryService />,
        desc: 'Laundry',
      },
      {
        icon: <BsTelephone />,
        desc: 'Telephone',
      },
      {
        icon: <MdLocalBar />,
        desc: 'Minibar',
      },
    ],
  },
  {
    id: 'standart-max',
    images: [
      '/images/services_images/page1.png',
      '/images/services_images/page2.png',
      '/images/services_images/page3.png',
    ],
    type: 'Standard Max Room',
    perNight: 179,
    description:
      'A spacious room with a queen bed, suitable for 1-3 people. Enjoy amenities like free Wi-Fi, in-room safety, laundry, telephone, minibar, and mini-bar. The room offers a view of the beach and has a size of 35 square meters.',
    amenities: [
      {
        icon: <IoIosPeople />,
        desc: '1 - 3 Persons',
      },
      {
        icon: <GrOverview />,
        desc: 'Beach view',
      },
      {
        icon: <IoBed />,
        desc: '2 Double bed',
      },
      {
        icon: <RxDimensions />,
        desc: '35m²',
      },
      {
        icon: <FaWifi />,
        desc: 'Free Wi-Fi',
      },
      {
        icon: <FaUserShield />,
        desc: 'In-room safety',
      },
      {
        icon: <MdOutlineLocalLaundryService />,
        desc: 'Laundry',
      },
      {
        icon: <BsTelephone />,
        desc: 'Telephone',
      },
      {
        icon: <MdLocalBar />,
        desc: 'Minibar',
      },
    ],
  },
];
export const familyRoomList = [
  {
    id: 'family-double',
    images: [
      '/images/services_images/page1.png',
      '/images/services_images/page2.png',
      '/images/services_images/page3.png',
    ],
    type: 'Family Double Room',
    perNight: 169,
    description:
      'A spacious family room with a queen bed, suitable for 3-4 people. Enjoy amenities like air-conditioning, free Wi-Fi, in-room safety, laundry, and telephone. The room offers a view of the beach and has a size of 25 square meters.',
    amenities: [
      {
        icon: <IoIosPeople />,
        desc: '3 - 4 Persons',
      },
      {
        icon: <GrOverview />,
        desc: 'Beach view',
      },
      {
        icon: <IoBed />,
        desc: 'Double bed, Single bed, Divan',
      },
      {
        icon: <RxDimensions />,
        desc: '30m²',
      },
      {
        icon: <TbAirConditioning />,
        desc: 'Air-conditioning',
      },
      {
        icon: <FaWifi />,
        desc: 'Free Wi-Fi',
      },
      {
        icon: <FaUserShield />,
        desc: 'In-room safety',
      },
      {
        icon: <MdOutlineLocalLaundryService />,
        desc: 'Laundry',
      },
      {
        icon: <BsTelephone />,
        desc: 'Telephone',
      },
    ],
  },
  {
    id: 'family-triple',
    images: [
      '/images/services_images/page1.png',
      '/images/services_images/page2.png',
      '/images/services_images/page3.png',
    ],
    type: 'Family Triple Room',
    perNight: 189,
    description:
      'A spacious family room with a queen bed, suitable for 3-6 people. Enjoy amenities like air-conditioning, free Wi-Fi, hairdryer, in-room safety, laundry, and telephone. The room offers a view of the forest and has a size of 40 square meters.',
    amenities: [
      {
        icon: <IoIosPeople />,
        desc: '3 - 6 Persons',
      },
      {
        icon: <GrOverview />,
        desc: 'Forest',
      },
      {
        icon: <IoBed />,
        desc: 'Queen bed, Double bed, Divan',
      },
      {
        icon: <RxDimensions />,
        desc: '40m²',
      },
      {
        icon: <TbAirConditioning />,
        desc: 'Air-conditioning',
      },
      {
        icon: <FaWifi />,
        desc: 'Free Wi-Fi',
      },
      {
        icon: <FaFan />,
        desc: 'Hairdryer',
      },
      {
        icon: <FaUserShield />,
        desc: 'In-room safety',
      },
      {
        icon: <MdOutlineLocalLaundryService />,
        desc: 'Laundry',
      },
      {
        icon: <BsTelephone />,
        desc: 'Telephone',
      },
    ],
  },
  {
    id: 'family-max',
    images: [
      '/images/services_images/page1.png',
      '/images/services_images/page2.png',
      '/images/services_images/page3.png',
    ],
    type: 'Family Max Room',
    perNight: 189,
    description:
      'A spacious family room with a queen bed, suitable for 3-6 people. Enjoy amenities like air-conditioning, free Wi-Fi, hairdryer, in-room safety, laundry, and telephone. The room offers a view of the forest and has a size of 40 square meters.',
    amenities: [
      {
        icon: <IoIosPeople />,
        desc: '3 - 6 Persons',
      },
      {
        icon: <GrOverview />,
        desc: 'Forest',
      },
      {
        icon: <IoBed />,
        desc: '2 Queen bed, 1 Single bed',
      },
      {
        icon: <RxDimensions />,
        desc: '40m²',
      },
      {
        icon: <TbAirConditioning />,
        desc: 'Air-conditioning',
      },
      {
        icon: <FaWifi />,
        desc: 'Free Wi-Fi',
      },
      {
        icon: <FaFan />,
        desc: 'Hairdryer',
      },
      {
        icon: <FaUserShield />,
        desc: 'In-room safety',
      },
      {
        icon: <MdOutlineLocalLaundryService />,
        desc: 'Laundry',
      },
      {
        icon: <BsTelephone />,
        desc: 'Telephone',
      },
    ],
  },
];
export const suiteRoomList = [
  {
    id: 'suite-single',
    images: [
      '/images/services_images/page1.png',
      '/images/services_images/page2.png',
      '/images/services_images/page3.png',
    ],
    type: 'Suite Single Room',
    perNight: 215,
    description:
      'A luxurious suite for one or two guests. This suite offers amenities such as air-conditioning, free Wi-Fi, a hairdryer, in-room safety, laundry facilities, minibar, and telephone. Enjoy the view of the waterfall from this spacious 40 square meters suite.',
    amenities: [
      {
        icon: <IoIosPeople />,
        desc: '1 - 2 Persons',
      },
      {
        icon: <GrOverview />,
        desc: 'Waterfall',
      },
      {
        icon: <IoBed />,
        desc: 'Queen bed, "Sofa',
      },
      {
        icon: <RxDimensions />,
        desc: '40m²',
      },
      {
        icon: <TbAirConditioning />,
        desc: 'Air-conditioning',
      },
      {
        icon: <FaWifi />,
        desc: 'Free Wi-Fi',
      },
      {
        icon: <FaFan />,
        desc: 'Hairdryer',
      },
      {
        icon: <FaUserShield />,
        desc: 'In-room safety',
      },
      {
        icon: <MdOutlineLocalLaundryService />,
        desc: 'Laundry',
      },
      {
        icon: <MdLocalBar />,
        desc: 'Minibar',
      },
      {
        icon: <BsTelephone />,
        desc: 'Telephone',
      }
    ],
  },
  {
    id: 'suite-double',
    images: [
      '/images/services_images/page1.png',
      '/images/services_images/page2.png',
      '/images/services_images/page3.png',
    ],
    type: 'Suite Double Room',
    perNight: 235,
    description:
      'A luxurious suite for one to three guests. This suite offers amenities such as air-conditioning, free Wi-Fi, a hairdryer, in-room safety, laundry facilities, minibar, and telephone. Enjoy the view of the waterfall from this spacious 40 square meters suite.',
    amenities: [
      {
        icon: <IoIosPeople />,
        desc: '1 - 3 Persons',
      },
      {
        icon: <GrOverview />,
        desc: 'Waterfall',
      },
      {
        icon: <IoBed />,
        desc: '2 Queen bed',
      },
      {
        icon: <RxDimensions />,
        desc: '40m²',
      },
      {
        icon: <TbAirConditioning />,
        desc: 'Air-conditioning',
      },
      {
        icon: <FaWifi />,
        desc: 'Free Wi-Fi',
      },
      {
        icon: <FaFan />,
        desc: 'Hairdryer',
      },
      {
        icon: <FaUserShield />,
        desc: 'In-room safety',
      },
      {
        icon: <MdOutlineLocalLaundryService />,
        desc: 'Laundry',
      },
      {
        icon: <MdLocalBar />,
        desc: 'Minibar',
      },
      {
        icon: <BsTelephone />,
        desc: 'Telephone',
      },
    ],
  },
];

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
  return (
    <WrapperOuter>
      <ServiceBgParallaxContainer options={oneOptions}>
        <ServiceRoomList roomList={standartRoomList} />
      </ServiceBgParallaxContainer>

      <InfoWrapper>
        <ServiceMainInfo listServices={listServicesOne} />
      </InfoWrapper>

      <ServiceBgParallaxContainer options={twoOptions}>
        <ServiceRoomList roomList={familyRoomList} />
      </ServiceBgParallaxContainer>

      <InfoWrapper>
        <ServiceMainInfo listServices={listServicesTwo} />
      </InfoWrapper>

      <ServiceBgParallaxContainer options={threeOptions}>
        <ServiceRoomList roomList={suiteRoomList} />
      </ServiceBgParallaxContainer>
    </WrapperOuter>
  );
};
export default Services;
