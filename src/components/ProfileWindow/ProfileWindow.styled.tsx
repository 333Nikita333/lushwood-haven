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
export const TableWrapper = styled.div``;
export const TableContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-height: 400px;
  overflow-y: scroll;
  border-radius: 15px;
  border: 2px solid ${({ theme }) => theme.colors.secondaryColor};

  @media screen and (max-width: 481px) {
    font-size: 14px;
  }
`;

export const TableHeader = styled.h3`
  font-size: 20px;
  margin: 10px;
  text-align: center;
`;

export const BookingTable = styled.table`
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  height: 100%;
  overflow-y: auto;
  border-collapse: collapse;

  thead {
    position: sticky;
    top: 0;
    background: rgba(255, 255, 255, 0.9);
  }

  th,
  td {
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryColor};
    text-align: center;

    &:not(:last-child) {
      border-right: 1px solid ${({ theme }) => theme.colors.secondaryColor};
    }
  }

  tbody tr:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const TableRow = styled.tr`
  display: table-row;
`;

export const TableCell = styled.td`
  flex: 1;
  text-align: center;
`;

export const SubHeader = styled.th`
  flex: 1;
  text-align: center;
  font-weight: bold;
`;
