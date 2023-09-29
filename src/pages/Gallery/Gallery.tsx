import { FC, useCallback } from 'react';
import Gallery, { RenderImageProps } from 'react-photo-gallery';
import 'react-imgr/dist/styles.min.css';
import { photos } from '../../data/photos';
import useImageValidation from '../../hooks/useImageValidation';
import FancyboxWrapper from '../../utils/FancyboxWrapper';
import { GalleryWrapper, Link, Photo } from './Gallery.styled';

const GalleryPage: FC = () => {
  const { isLoading, validPhotos } = useImageValidation(photos);

  const renderImage = useCallback(
    ({ photo, index }: RenderImageProps) => {
      return (
        <Link key={index} data-fancybox="gallery" data-caption={photo.alt} href={photo.src}>
          <Photo
            src={photo.src}
            alt={photo.alt}
            preloadSrc="https://i0.wp.com/css-tricks.com/wp-content/uploads/2019/10/simple-loader.gif?ssl=1"
            containerStyle={{
              width: photo.width,
              height: photo.height,
            }}
            initialBlur={false}
            scale
          />
        </Link>
      );
    },
    [isLoading]
  );

  return (
    <GalleryWrapper>
      <FancyboxWrapper>
        {!isLoading ? (
          <Gallery photos={validPhotos} renderImage={renderImage} />
        ) : (
          <p
            style={{
              minHeight: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
              fontSize: '35px',
              fontWeight: 700,
              letterSpacing: '10px',
            }}
          >
            Loading...
          </p>
        )}
      </FancyboxWrapper>
    </GalleryWrapper>
  );
};

export default GalleryPage;
