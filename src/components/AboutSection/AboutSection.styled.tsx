import styled from 'styled-components';

export const Gallery = styled.div`
  display: flex;
  padding: calc(var(--index) * 2) 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  & > * {
    display: flex;
    flex: 1;
    align-items: center;
    flex-direction: column;
    will-change: transform;
  }
  & .gallery__item {
    max-width: calc(var(--index) * 35);
    margin-bottom: var(--gallery-gap);
    max-height: 180vh;
    border-radius: 8px;

    @media screen and (min-width: 769px) and (max-width: 1280px) {
      max-width: calc(var(--index) * 28);
    }
    @media screen and (min-width: 1281px) {
      max-width: calc(var(--index) * 30);
    }
  }
  & img {
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
      rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
`;
export const TextBlock = styled.div`
  color: ${({ theme }) => theme.colors.aboutSectionText};
  position: relative;
  text-shadow: 7px 7px 3px rgba(0, 0, 0, 0.6);

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
export const TextBlockH = styled.h2`
  font-size: 2rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.colors.aboutSectionTitle};
  margin-bottom: 1.5rem;
`;
export const TextBlockP = styled.p`
  font-weight: 700;
  line-height: 1.75;
`;
export const GalleryLeft = styled.div`
  margin-top: calc(var(--gallery-gap) * 0.75);

  @media screen and (min-width: 769px) {
    margin-top: calc(var(--gallery-gap) * 1.75);
  }
`;
export const GalleryRight = styled.div`
  & .gallery-item {
    margin: 0;
    margin-top: var(--gallery-gap);
  }
`;
