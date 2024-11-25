import styled from 'styled-components';
import { modalBgImage } from '../../data/photos';

export const ProfileWpaper = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: ${({ theme }) => theme.paddings.big};
  font-weight: ${({ theme }) => theme.fontWeights.secondary};
  border-radius: 16px;
  border: 2px solid #424141;
  background-color: #fff;
  color: #000;
  background-image: url(${modalBgImage});
  background-size: cover;
  box-shadow: 3px 3px 85px 10px rgba(186, 181, 181, 1);

  @media screen and (max-width: 1199px) {
    padding: ${({ theme }) => theme.paddings.small};
    width: calc(100vw - ${({ theme }) => theme.paddings.small} * 2);
    max-height: calc(100vh - ${({ theme }) => theme.paddings.small} * 2);
  }

  @media screen and (min-width: 1200px) {
    min-width: 365px;
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.secondary};
  text-transform: uppercase;
  text-shadow: 7px 7px 5px rgba(0, 0, 0, 0.6);
`;

export const InfoBlock = styled.div``;

export const InfoBlockItem = styled.div`
  p {
    margin: 5px 0;
    text-shadow: 7px 7px 5px rgba(0, 0, 0, 0.6);
  }
`;

export const TablesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;
