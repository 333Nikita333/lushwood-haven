import { FC, useCallback, useEffect } from 'react';
import 'react-imgr/dist/styles.min.css';
import Gallery, { RenderImageProps } from 'react-photo-gallery';
import Loader from '../../components/Loader';
import { photosGallery, preloadImage } from '../../data/photos';
import useImageValidation from '../../hooks/useImageValidation';
import FancyboxWrapper from '../../utils/FancyboxWrapper';
import { GalleryWrapper, Link, Photo } from './Gallery.styled';

const GalleryPage: FC = () => {
  const { isLoading, validPhotos } = useImageValidation(photosGallery);

  useEffect(() => {
    document.title = 'Gallery';
  }, []);

  const renderImage = useCallback(
    ({ photo, index }: RenderImageProps) => {
      return (
        <Link key={index} data-fancybox="gallery" data-caption={photo.alt} href={photo.src}>
          <Photo
            src={photo.src}
            alt={photo.alt}
            preloadSrc={preloadImage}
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
        {!isLoading ? <Gallery photos={validPhotos} renderImage={renderImage} /> : <Loader />}
      </FancyboxWrapper>
    </GalleryWrapper>
  );
};

export default GalleryPage;
