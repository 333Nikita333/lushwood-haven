import { FC } from 'react';
import {
  Layers,
  LayersCaption,
  LayersHeader,
  LayersTitle,
  MainHeader,
} from './Header.styled';

const Header: FC = () => {
  return (
    <MainHeader>
      <Layers>
        <LayersHeader>
          <LayersCaption></LayersCaption>
          <LayersTitle></LayersTitle>
        </LayersHeader>
      </Layers>
    </MainHeader>
  );
};

export default Header;
