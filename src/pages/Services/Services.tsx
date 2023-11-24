import { FC } from 'react';
import { FaGuitar, FaSpa, FaUserShield, FaWifi, FaFan } from 'react-icons/fa';
import { BsTelephone } from 'react-icons/bs';
import { GiHomeGarage } from 'react-icons/gi';
import { IoRestaurantOutline } from 'react-icons/io5';
import {
  MdLocalBar,
  MdOutlineCleaningServices,
  MdPool,
  MdOutlineLocalLaundryService,
} from 'react-icons/md';
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
    descriptions: {
      people: '1 - 2',
      amenities: [
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
      view: 'Beach',
      bedType: 'Queen bed',
      size: '20m²',
      text: 'A cozy room with a queen bed, suitable for 1-2 people. Enjoy amenities like free Wi-Fi, in-room safety, laundry, and telephone. The room offers a view of the beach and has a size of 20 square meters.',
    },
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
    descriptions: {
      people: '1 - 3',
      amenities: [
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
      view: 'Beach',
      bedType: 'Queen bed',
      size: '25m²',
      text: 'A comfortable room with a queen bed, suitable for 1-3 people. Enjoy amenities like free Wi-Fi, in-room safety, laundry, telephone, and minibar. The room offers a view of the beach and has a size of 25 square meters.',
    },
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
    descriptions: {
      people: '1 - 3',
      amenities: [
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
      view: 'Beach',
      bedType: 'Queen bed',
      size: '35m²',
      text: 'A spacious room with a queen bed, suitable for 1-3 people. Enjoy amenities like free Wi-Fi, in-room safety, laundry, telephone, minibar, and mini-bar. The room offers a view of the beach and has a size of 35 square meters.',
    },
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
    descriptions: {
      people: '3 - 4',
      amenities: [
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
      view: 'Beach',
      bedType: 'Queen bed',
      size: '25m²',
      text: 'A spacious family room with a queen bed, suitable for 3-4 people. Enjoy amenities like air-conditioning, free Wi-Fi, in-room safety, laundry, and telephone. The room offers a view of the beach and has a size of 25 square meters.',
    },
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
    descriptions: {
      people: '3 - 6',
      amenities: [
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
      view: 'Forest',
      bedType: 'Queen bed',
      size: '40m²',
      text: 'A spacious family room with a queen bed, suitable for 3-6 people. Enjoy amenities like air-conditioning, free Wi-Fi, hairdryer, in-room safety, laundry, and telephone. The room offers a view of the forest and has a size of 40 square meters.',
    },
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
    descriptions: {
      people: '3 - 6',
      amenities: [
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
      view: 'Forest',
      bedType: 'Queen bed',
      size: '40m²',
      text: 'A spacious family room with a queen bed, suitable for 3-6 people. Enjoy amenities like air-conditioning, free Wi-Fi, hairdryer, in-room safety, laundry, and telephone. The room offers a view of the forest and has a size of 40 square meters.',
    },
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
    descriptions: {
      people: '1 - 2',
      amenities: [
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
      view: 'Waterfall',
      bedType: 'Queen bed',
      size: '40m²',
      text: 'A luxurious suite for one or two guests. This suite offers amenities such as air-conditioning, free Wi-Fi, a hairdryer, in-room safety, laundry facilities, minibar, and telephone. Enjoy the view of the waterfall from this spacious 40 square meters suite.',
    },
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
    descriptions: {
      people: '1 - 3',
      amenities: [
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
      view: 'Waterfall',
      bedType: 'Queen bed',
      size: '40m²',
      text: 'A luxurious suite for one to three guests. This suite offers amenities such as air-conditioning, free Wi-Fi, a hairdryer, in-room safety, laundry facilities, minibar, and telephone. Enjoy the view of the waterfall from this spacious 40 square meters suite.',
    },
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
