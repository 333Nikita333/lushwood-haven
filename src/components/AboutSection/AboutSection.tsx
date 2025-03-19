import { FC } from 'react';
import { imagesAbout } from '../../data/photos';
import { IAboutSectionProps } from '../../types';
import {
  Gallery,
  GalleryLeft,
  GalleryRight,
  TextBlock,
  TextBlockH,
  TextBlockP,
} from './AboutSection.styled';

const AboutSection: FC<IAboutSectionProps> = ({ galleryLeftRef, galleryRightRef }) => {
  const {
    galleryItem1,
    galleryItem2,
    galleryItem3,
    galleryItem4,
    galleryItem5,
    galleryItem6,
    galleryItem7,
    galleryItem8,
  } = imagesAbout;

  return (
    <section>
      <div>
        <Gallery>
          <GalleryLeft ref={galleryLeftRef}>
            <TextBlock className="gallery__item">
              <TextBlockH>Feel one with nature</TextBlockH>
              <TextBlockP>
                Immerse yourself in a world of silence and freshness in our comfortable rooms with
                panoramic windows surrounded by rich foliage. Discover the healing power of nature
                and enjoy true relaxation
              </TextBlockP>
            </TextBlock>
            <img className="gallery__item" src={galleryItem5.src} alt={galleryItem5.alt} />
            <TextBlock className="gallery__item">
              <TextBlockH>Forest harmony in every detail</TextBlockH>
              <TextBlockP>
                We invite you to a cozy hotel where every detail is designed for your enjoyment.
                From relaxing walks to the sound of leaves to exciting adventures in the caves, we
                have everything for an unforgettable holiday
              </TextBlockP>
            </TextBlock>
            <img className="gallery__item" src={galleryItem2.src} alt={galleryItem2.alt} />
            <TextBlock className="gallery__item">
              <TextBlockH>Extreme in the heart of nature: caving</TextBlockH>
              <TextBlockP>
                Embark on a unique adventure and explore mysterious caves with experienced
                speleologists. Immerse yourself in the underworld, where each stone has its own
                history and adrenaline is in full swing
              </TextBlockP>
            </TextBlock>
            <img className="gallery__item" src={galleryItem7.src} alt={galleryItem7.alt} />
          </GalleryLeft>

          <GalleryRight ref={galleryRightRef}>
            <img className="gallery__item" src={galleryItem1.src} alt={galleryItem1.alt} />
            <TextBlock className="gallery__item">
              <TextBlockH>Inspiration from nature: a hotel overlooking the forest</TextBlockH>
              <TextBlockP>
                Spend time in cozy rooms with stunning views of the picturesque expanses of
                deciduous forest. We invite you to a unique journey where every moment is filled
                with harmony with nature
              </TextBlockP>
            </TextBlock>
            <img className="gallery__item" src={galleryItem3.src} alt={galleryItem3.alt} />
            <img className="gallery__item" src={galleryItem4.src} alt={galleryItem4.alt} />
            <TextBlock className="gallery__item">
              <TextBlockH>Forest hiking trips</TextBlockH>
              <TextBlockP>
                Embark on exciting journeys into the depths of the forest, accompanied by
                experienced guides. Discover the secrets of the wild, learn how to survive and
                create unforgettable memories
              </TextBlockP>
            </TextBlock>
            <img className="gallery__item" src={galleryItem6.src} alt={galleryItem6.alt} />
            <img className="gallery__item" src={galleryItem8.src} alt={galleryItem8.alt} />
          </GalleryRight>
        </Gallery>
      </div>
    </section>
  );
};

export default AboutSection;
