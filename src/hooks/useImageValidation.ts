import { useEffect, useState } from 'react';
import { PhotoType, ValidationImagesType } from '../types';

const useImageValidation = (photos: PhotoType[]): ValidationImagesType => {
  const [isLoading, setIsLoading] = useState(true);
  const [validPhotos, setValidPhotos] = useState<PhotoType[]>([]);

  useEffect(() => {
    const filterValidPhotos = async () => {
      const filteredPhotos = await Promise.all(
        photos.map(async photo => {
          const img = new Image();
          img.src = photo.src;
          try {
            await img.decode();
            return photo;
          } catch (error) {
            return null;
          }
        })
      );
      setValidPhotos(filteredPhotos.filter(photo => photo !== null) as PhotoType[]);
      setIsLoading(false);
    };

    filterValidPhotos();
  }, [photos]);

  return { isLoading, validPhotos };
};

export default useImageValidation;
