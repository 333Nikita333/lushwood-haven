import { FC } from 'react';
import {
  LayerBase,
  LayerFront,
  LayerHeader,
  LayerMiddle,
  Layers,
  LayersCaption,
  LayersTitle,
  MainHeader,
} from './HomeHero.styled';
import { imagesHome } from '../../data/photos';

const HomeHero: FC = () => {
  return (
    <MainHeader>
      <Layers>
        <LayerHeader>
          <LayersCaption>Welcome to Us!</LayersCaption>
          <LayersTitle>Lushwood Haven</LayersTitle>
        </LayerHeader>
        <LayerBase style={{ backgroundImage: `url(${imagesHome.bgImageLayerBase})` }}></LayerBase>
        <LayerMiddle
          style={{ backgroundImage: `url(${imagesHome.bgImageLayerMiddle})` }}
        ></LayerMiddle>
        <LayerFront
          style={{ backgroundImage: `url(${imagesHome.bgImageLayerFront})` }}
        ></LayerFront>
      </Layers>
    </MainHeader>
  );
};

export default HomeHero;
