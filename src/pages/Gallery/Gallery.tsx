import { FC } from 'react';
import Gallery from 'react-photo-gallery';
import { photos } from './photos';
import { GalleryWrapper } from './Gallery.styled';
import FancyboxWrapper from '../../utils/FancyboxWrapper';
import { IRenderImageProps } from '../../types';

function renderImage({ photo, index }: IRenderImageProps) {
  return (
    <a key={index} data-fancybox="gallery" href={photo.src}>
      <img
        src={photo.src}
        alt={photo.src}
        width={photo.width}
        height={photo.height}
        style={{ margin: '2px' }}
      />
    </a>
  );
}

const GalleryPage: FC = () => {
  return (
    <GalleryWrapper>
      <FancyboxWrapper>
        <Gallery photos={photos} renderImage={renderImage} />
      </FancyboxWrapper>
    </GalleryWrapper>
  );
};

export default GalleryPage;
