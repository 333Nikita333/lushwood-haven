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
} from './Hero.styled';

const bgImageLayerBase: string = 'images/layer-base.png';
const bgImageLayerMiddle: string = 'images/layer-middle.png';
const bgImageLayerFront: string = 'images/layer-front.png';

const Hero: FC = () => {
  return (
    <MainHeader>
      <Layers>
        <LayerHeader>
          <LayersCaption>Welcome to Parallax!</LayersCaption>
          <LayersTitle>Fairy Forest</LayersTitle>
        </LayerHeader>
        <LayerBase
          style={{ backgroundImage: `url(${bgImageLayerBase})` }}
        ></LayerBase>
        <LayerMiddle
          style={{ backgroundImage: `url(${bgImageLayerMiddle})` }}
        ></LayerMiddle>
        <LayerFront
          style={{ backgroundImage: `url(${bgImageLayerFront})` }}
        ></LayerFront>
      </Layers>
    </MainHeader>
  );
};

export default Hero;
