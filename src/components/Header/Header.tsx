import { FC, useEffect } from 'react';
import {
  LayerBase,
  LayerFront,
  LayerHeader,
  LayerMiddle,
  Layers,
  LayersCaption,
  LayersTitle,
  MainHeader,
} from './Header.styled';

const bgImageLayerBase: string = 'images/layer-base.png';
const bgImageLayerMiddle: string = 'images/layer-middle.png';
const bgImageLayerFront: string = 'images/layer-front.png';

const Header: FC = () => {
  useEffect(() => {
    const handleScroll = (): void => {
      document.body.style.cssText += `--scrollTop: ${window.scrollY}px`;
      console.log(window.scrollY)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <MainHeader>
      <Layers>
        <LayerHeader>
          <LayersCaption>Welcome to Parallax!</LayersCaption>
          <LayersTitle>Fairy Forest</LayersTitle>
        </LayerHeader>
        <LayerBase style={{ backgroundImage: `url(${bgImageLayerBase})` }}></LayerBase>
        <LayerMiddle style={{ backgroundImage: `url(${bgImageLayerMiddle})` }}></LayerMiddle>
        <LayerFront style={{ backgroundImage: `url(${bgImageLayerFront})` }}></LayerFront>
      </Layers>
    </MainHeader>
  );
};

export default Header;
