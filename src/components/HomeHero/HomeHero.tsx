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

const bgImageLayerBase: string = 'images/home_images/layer-base.png';
const bgImageLayerMiddle: string = 'images/home_images/layer-middle.png';
const bgImageLayerFront: string = 'images/home_images/layer-front.png';

const HomeHero: FC = () => {
  return (
    <MainHeader>
      <Layers>
        <LayerHeader>
          <LayersCaption>Welcome to Us!</LayersCaption>
          <LayersTitle>Lushwood Haven</LayersTitle>
        </LayerHeader>
        <LayerBase style={{ backgroundImage: `url(${bgImageLayerBase})` }}></LayerBase>
        <LayerMiddle style={{ backgroundImage: `url(${bgImageLayerMiddle})` }}></LayerMiddle>
        <LayerFront style={{ backgroundImage: `url(${bgImageLayerFront})` }}></LayerFront>
      </Layers>
    </MainHeader>
  );
};

export default HomeHero;
