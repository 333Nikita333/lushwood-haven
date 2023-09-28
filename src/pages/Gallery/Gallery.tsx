import { FC, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Image from 'react-imgr';
import 'react-imgr/dist/styles.min.css';
import FancyboxWrapper from '../../utils/FancyboxWrapper';
import { IRenderImageProps } from '../../types';
import { photos } from './photos';
import { GalleryWrapper } from './Gallery.styled';

const GalleryPage: FC = () => {
  const renderImage = useCallback(({ photo, index }: IRenderImageProps) => {
    return (
      <a key={index} data-fancybox="gallery" href={photo.src}>
        <Image
          src={photo.src}
          alt="photo from gallery"
          preloadSrc="https://i0.wp.com/css-tricks.com/wp-content/uploads/2019/10/simple-loader.gif?ssl=1"
          containerStyle={{
            width: photo.width,
            height: photo.height,
            margin: '2px',
          }}
          initialBlur={false}
          scale={true}
        />
      </a>
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
// const GalleryPage: FC = () => {
//   const renderImage = useCallback(({ photo, index }: IRenderImageProps) => {
//     return (
//       <a key={index} data-fancybox="gallery" href={photo.src}>
//         <img
//           src={photo.src}
//           alt={photo.src}
//           width={photo.width}
//           height={photo.height}
//           style={{ margin: '2px' }}
//         />
//       </a>
//     );
//   }, []);

//   return (
//     <GalleryWrapper>
//       <FancyboxWrapper>
//         <Gallery photos={photos} renderImage={renderImage} />
//       </FancyboxWrapper>
//     </GalleryWrapper>
//   );
// };

// export default GalleryPage;
