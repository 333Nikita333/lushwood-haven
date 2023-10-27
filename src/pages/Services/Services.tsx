import { FC } from 'react';
import ServiceBgParallaxContainer from '../../components/ServiceBgParallaxContainer';
import ServiceRoomList from '../../components/ServiceRoomList';
import { InfoWrapper, WrapperOuter } from './Services.styled';
import ServiceMainInfo from '../../components/ServiceMainInfo';

const oneOptions = {
  bgImagePath: 'images/services_images/page1.png',
  bgImageDesc: 'wood',
  strength: 500,
};
const twoOptions = {
  bgImagePath: 'images/services_images/page2.png',
  bgImageDesc: 'hotel',
  strength: 500,
};
const threeOptions = {
  bgImagePath: 'images/services_images/page3.png',
  bgImageDesc: 'sauna',
  strength: 500,
};

export const standartRoomList = [
  {
    id: 'standart-single',
    images: [
      'images/services_images/page1.png',
      'images/services_images/page2.png',
      'images/services_images/page3.png',
    ],
    type: 'Standard Single Room',
    perNight: 119,
    descriptions: {
      people: 1 - 2,
      amenities: ['free wi-fi', 'in-room safety', 'laundry', 'telephone'],
      view: 'Beach',
      bedType: 'queen bed',
      size: '20m&sup2',
    },
  },
  {
    id: 'standart-double',
    images: [
      'images/services_images/page1.png',
      'images/services_images/page2.png',
      'images/services_images/page3.png',
    ],
    type: 'Standard Double Room',
    perNight: 159,
    descriptions: {
      people: 1 - 3,
      amenities: ['free wi-fi', 'in-room safety', 'laundry', 'telephone', 'minibar'],
      view: 'Beach',
      bedType: 'queen bed',
      size: '25m&sup2',
    },
  },
  {
    id: 'standart-max',
    images: [
      'images/services_images/page1.png',
      'images/services_images/page2.png',
      'images/services_images/page3.png',
    ],
    type: 'Standard Max Room',
    perNight: 179,
    descriptions: {
      people: 1 - 3,
      amenities: ['free wi-fi', 'in-room safety', 'laundry', 'telephone', 'minibar', 'mini-bar'],
      view: 'Beach',
      bedType: 'queen bed',
      size: '35m&sup2',
    },
  },
];
export const familyRoomList = [
  {
    id: 'family-double',
    images: [
      'images/services_images/page1.png',
      'images/services_images/page2.png',
      'images/services_images/page3.png',
    ],
    type: 'Family Double Room',
    perNight: 169,
    descriptions: {
      people: 3 - 4,
      amenities: ['air-conditioning', 'free wi-fi', 'in-room safety', 'laundry', 'telephone'],
      view: 'Beach',
      bedType: 'queen bed',
      size: '25m&sup2',
    },
  },
  {
    id: 'family-triple',
    images: [
      'images/services_images/page1.png',
      'images/services_images/page2.png',
      'images/services_images/page3.png',
    ],
    type: 'Family Triple Room',
    perNight: 189,
    descriptions: {
      people: 3 - 6,
      amenities: [
        'air-conditioning',
        'free wi-fi',
        'hairdryer',
        'in-room safety',
        'laundry',
        'telephone',
      ],
      view: 'Forest',
      bedType: 'queen bed',
      size: '40m&sup2',
    },
  },
  {
    id: 'family-max',
    images: [
      'images/services_images/page1.png',
      'images/services_images/page2.png',
      'images/services_images/page3.png',
    ],
    type: 'Family Max Room',
    perNight: 189,
    descriptions: {
      people: 3 - 6,
      amenities: [
        'air-conditioning',
        'free wi-fi',
        'hairdryer',
        'in-room safety',
        'laundry',
        'telephone',
      ],
      view: 'Forest',
      bedType: 'queen bed',
      size: '40m&sup2',
    },
  },
];
export const suiteRoomList = [
  {
    id: 'suite-single',
    images: [
      'images/services_images/page1.png',
      'images/services_images/page2.png',
      'images/services_images/page3.png',
    ],
    type: 'Suite Single Room',
    perNight: 215,
    descriptions: {
      people: 1 - 2,
      amenities: [
        'air-conditioning',
        'free wi-fi',
        'hairdryer',
        'in-room safety',
        'laundry',
        'minibar',
        'telephone',
      ],
      view: 'Waterfall',
      bedType: 'queen bed',
      size: '40m&sup2',
    },
  },
  {
    id: 'suite-double',
    images: [
      'images/services_images/page1.png',
      'images/services_images/page2.png',
      'images/services_images/page3.png',
    ],
    type: 'Suite Double Room',
    perNight: 235,
    descriptions: {
      people: 1 - 3,
      amenities: [
        'air-conditioning',
        'free wi-fi',
        'hairdryer',
        'in-room safety',
        'laundry',
        'minibar',
        'telephone',
      ],
      view: 'Waterfall',
      bedType: 'queen bed',
      size: '40m&sup2',
    },
  },
];

const Services: FC = () => {
  return (
    <WrapperOuter>
      <ServiceBgParallaxContainer options={oneOptions}>
        <div style={{ marginTop: '85px' }}>
          <ServiceRoomList roomList={standartRoomList} />
        </div>
      </ServiceBgParallaxContainer>

      <InfoWrapper>
        <ServiceMainInfo />
      </InfoWrapper>

      <ServiceBgParallaxContainer options={twoOptions}>
        <ServiceRoomList roomList={familyRoomList} />
      </ServiceBgParallaxContainer>

      <InfoWrapper>
        <ServiceMainInfo />
      </InfoWrapper>

      <ServiceBgParallaxContainer options={threeOptions}>
        <ServiceRoomList roomList={suiteRoomList} />
      </ServiceBgParallaxContainer>
    </WrapperOuter>
  );
};
export default Services;
