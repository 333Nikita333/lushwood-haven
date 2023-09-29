import { FC, useCallback } from 'react';
import Gallery, { RenderImageProps } from 'react-photo-gallery';
import 'react-imgr/dist/styles.min.css';
import { photos } from '../../data/photos';
import FancyboxWrapper from '../../utils/FancyboxWrapper';
import { GalleryWrapper, Link, Photo } from './Gallery.styled';

const GalleryPage: FC = () => {
  const renderImage = useCallback(({ photo, index }: RenderImageProps) => {
    return (
      <Link key={index} data-fancybox="gallery" data-caption={photo.alt} href={photo.src}>
        <Photo
          src={photo.src}
          alt={photo.alt}
          preloadSrc="https://i0.wp.com/css-tricks.com/wp-content/uploads/2019/10/simple-loader.gif?ssl=1"
          containerStyle={{
            width: photo.width,
            height: photo.height,
            transition: 'transform 0.2s ease-in-out',
          }}
          initialBlur={false}
          scale
        />
      </Link>
    );
  }, []);

  return (
    <GalleryWrapper>
      <FancyboxWrapper>
        <Gallery photos={photos} renderImage={renderImage} />
      </FancyboxWrapper>
    </GalleryWrapper>
  );
};

export default GalleryPage;
