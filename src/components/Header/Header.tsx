import { FC, useEffect } from 'react';
import {
  Copy,
  LayerBase,
  LayerFront,
  LayerMiddle,
  Layers,
  LayersCaption,
  LayerHeader,
  LayersTitle,
  MainArticle,
  MainArticleContent,
  MainArticleText,
  MainArticleTitle,
  MainHeader,
} from './Header.styled';

const bgImageLayerBase: string = 'images/layer-base.png';
const bgImageLayerMiddle: string = 'images/layer-middle.png';
const bgImageLayerFront: string = 'images/layer-front.png';
const bgImageDungeon: string = 'images/dungeon.jpg';

const Header: FC = () => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = (): void => {
    document.body.style.cssText = `--scrollTop: ${window.scrollY}px`;
  };

  return (
    <>
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

      <MainArticle style={{ backgroundImage: `url(${bgImageDungeon})` }}>
        <MainArticleContent>
          <MainArticleTitle>To be continued</MainArticleTitle>
          <MainArticleText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, incidunt veniam mollitia
            nobis voluptatem saepe quas dolore sequi inventore maiores esse dolorum sit omnis
            temporibus pariatur veritatis vitae? Corrupti, nobis?
          </MainArticleText>
        </MainArticleContent>
        <Copy>© 2023. Mykyta Hilis</Copy>
      </MainArticle>
    </>
  );
};

export default Header;
