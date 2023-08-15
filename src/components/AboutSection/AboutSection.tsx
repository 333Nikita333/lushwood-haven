import { FC } from 'react';
import { AboutSectionProps } from '../../types';
import {
  ContainerPortfolio,
  Gallery,
  GalleryImage,
  GalleryLeft,
  GalleryRight,
  Portfolio,
  TextBlock,
  TextBlockH,
  TextBlockP,
} from './AboutSection.styled';

const galleryItem1: string = 'images/about_images/image1.jpg';
const galleryItem2: string = 'images/about_images/image2.jpg';
const galleryItem3: string = 'images/about_images/image3.jpg';
const galleryItem4: string = 'images/about_images/image4.jpg';
const galleryItem5: string = 'images/about_images/image5.jpg';
const galleryItem6: string = 'images/about_images/image6.jpg';
const galleryItem7: string = 'images/about_images/image7.jpg';
const galleryItem8: string = 'images/about_images/image8.jpg';

const AboutSection: FC<AboutSectionProps> = ({
  galleryLeftRef,
  galleryRightRef,
}) => {
  return (
    <Portfolio>
      <ContainerPortfolio>
        <Gallery>
          <GalleryLeft ref={galleryLeftRef}>
            <TextBlock className="gallery__item">
              <TextBlockH>Feel one with nature</TextBlockH>
              <TextBlockP>
                Immerse yourself in a world of silence and freshness in our
                comfortable rooms with panoramic windows surrounded by rich
                foliage. Discover the healing power of nature and enjoy true
                relaxation
              </TextBlockP>
            </TextBlock>
            <GalleryImage
              className="gallery__item"
              src={galleryItem5}
              alt="example 5"
            />
            <TextBlock className="gallery__item">
              <TextBlockH>Forest harmony in every detail</TextBlockH>
              <TextBlockP>
                We invite you to a cozy hotel where every detail is designed for
                your enjoyment. From relaxing walks to the sound of leaves to
                exciting adventures in the caves, we have everything for an
                unforgettable holiday
              </TextBlockP>
            </TextBlock>
            <GalleryImage
              className="gallery__item"
              src={galleryItem2}
              alt="example 2"
            />
            <TextBlock className="gallery__item">
              <TextBlockH>Extreme in the heart of nature: caving</TextBlockH>
              <TextBlockP>
                Embark on a unique adventure and explore mysterious caves with
                experienced speleologists. Immerse yourself in the underworld,
                where each stone has its own history and adrenaline is in full
                swing
              </TextBlockP>
            </TextBlock>
            <GalleryImage
              className="gallery__item"
              src={galleryItem7}
              alt="example 7"
            />
          </GalleryLeft>

          <GalleryRight ref={galleryRightRef}>
            <GalleryImage
              className="gallery__item"
              src={galleryItem1}
              alt="example 1"
            />
            <TextBlock className="gallery__item">
              <TextBlockH>
                Inspiration from nature: a hotel overlooking the forest
              </TextBlockH>
              <TextBlockP>
                Spend time in cozy rooms with stunning views of the picturesque
                expanses of deciduous forest. We invite you to a unique journey
                where every moment is filled with harmony with nature
              </TextBlockP>
            </TextBlock>
            <GalleryImage
              className="gallery__item"
              src={galleryItem3}
              alt="example 3"
            />
            <GalleryImage
              className="gallery__item"
              src={galleryItem4}
              alt="example 4"
            />
            <TextBlock className="gallery__item">
              <TextBlockH>Forest hiking trips</TextBlockH>
              <TextBlockP>
                Embark on exciting journeys into the depths of the forest,
                accompanied by experienced guides. Discover the secrets of the
                wild, learn how to survive and create unforgettable memories
              </TextBlockP>
            </TextBlock>
            <GalleryImage
              className="gallery__item"
              src={galleryItem6}
              alt="example 6"
            />
            <GalleryImage
              className="gallery__item"
              src={galleryItem8}
              alt="example 8"
            />
          </GalleryRight>
        </Gallery>
      </ContainerPortfolio>
    </Portfolio>
  );
};
export default AboutSection;
