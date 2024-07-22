import styled from 'styled-components';
import { modalBgImage } from '../../data/photos';

export const ProfileWpaper = styled.div`
  background-color: #fff;
  color: #000;
  padding: ${({ theme }) => theme.paddings.big};
  width: calc(100vw - ${({ theme }) => theme.paddings.big} * 2);
  height: calc(100vh - ${({ theme }) => theme.paddings.big} * 2);
  border-radius: 16px;
  border: 2px solid #424141;
  background-image: url(${modalBgImage});
  background-size: cover;
  font-weight: ${({ theme }) => theme.fontWeights.secondary};

  @media screen and (max-width: 481px) {
    padding: ${({ theme }) => theme.paddings.small};
    width: calc(100vw - ${({ theme }) => theme.paddings.small} * 2);
    height: calc(100vh - ${({ theme }) => theme.paddings.small} * 2);
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.secondary};
  margin-bottom: 20px;
  text-transform: uppercase;
`;

export const InfoBlock = styled.div`
  margin-bottom: 30px;
`;

export const InfoBlockItem = styled.div`
  p {
    margin: 5px 0;
  }
`;

export const TablesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const TableContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.secondaryColor};
  max-height: 300px; /* Set the maximum height for the table */

  @media screen and (max-width: 481px) {
    font-size: 14px;
  }
`;

export const BookingTable = styled.div`
  height: 100%; /* Full height of the container */
  overflow-y: auto;
`;

export const TableHeader = styled.h3`
  font-size: 20px;
  margin: 10px;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryColor};
`;

export const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryColor};

  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const TableCell = styled.div`
  flex: 1;
  text-align: center;
`;

export const SubHeader = styled.div`
  flex: 1;
  text-align: center;
  font-weight: bold;
`;
