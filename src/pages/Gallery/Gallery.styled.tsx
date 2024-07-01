import styled from 'styled-components';
import Image from 'react-imgr';

export const GalleryWrapper = styled.main`
  padding: 5px;
  background-image: url(images/gallery_images/bg-gallery.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
`;
export const Link = styled.a`
  & > div {
    overflow: hidden;
    margin: 2px;
    border-radius: 16px;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  }
  &:hover > div,
  &:focus > div {
    z-index: 1;
    box-shadow: 0px 0px 161px 69px rgba(66, 183, 43, 0.6);
    transform: scale(1.1);
  }
`;
export const Photo = styled(Image)``;
