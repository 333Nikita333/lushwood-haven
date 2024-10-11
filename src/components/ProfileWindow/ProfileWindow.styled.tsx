import styled from 'styled-components';
import { modalBgImage } from '../../data/photos';

export const ProfileWpaper = styled.div`
  overflow-y: auto;
  padding: ${({ theme }) => theme.paddings.big};
  height: calc(100vh - ${({ theme }) => theme.paddings.big} * 2);
  width: calc(100vw - ${({ theme }) => theme.paddings.big} * 2);
  font-weight: ${({ theme }) => theme.fontWeights.secondary};
  border-radius: 16px;
  border: 2px solid #424141;
  background-color: #fff;
  color: #000;
  background-image: url(${modalBgImage});
  background-size: cover;
  box-shadow: 3px 3px 85px 10px rgba(186, 181, 181, 1);

  @media screen and (max-width: 481px) {
    padding: ${({ theme }) => theme.paddings.small};
    width: calc(100vw - ${({ theme }) => theme.paddings.small} * 2);
    height: calc(100vh - ${({ theme }) => theme.paddings.small} * 2);
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.fontSizes.secondary};
  text-transform: uppercase;
  text-shadow: 7px 7px 5px rgba(0, 0, 0, 0.6);
`;

export const InfoBlock = styled.div`
  margin-bottom: 30px;
`;

export const InfoBlockItem = styled.div`
  p {
    margin: 5px 0;
    text-shadow: 7px 7px 5px rgba(0, 0, 0, 0.6);
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
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  @media screen and (max-width: 481px) {
    font-size: 14px;
  }
`;

export const TableHeader = styled.h3`
  margin: 10px;
  font-size: 20px;
  text-align: center;
  text-shadow: 7px 7px 5px rgba(0, 0, 0, 0.6);
`;

export const BookingTable = styled.table`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  border-collapse: collapse;
  background-color: rgba(255, 255, 255, 0.8);

  thead {
    position: sticky;
    top: 0;
    background: rgba(255, 255, 255, 0.9);
  }

  th,
  td {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryColor};

    &:not(:last-child) {
      border-right: 1px solid ${({ theme }) => theme.colors.secondaryColor};
    }
  }

  tbody tr:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.primaryColor};
  }

  @media screen and (max-width: 480px) {
    th,
    td {
      padding: 5px;
    }
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
