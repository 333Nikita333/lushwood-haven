import styled from 'styled-components';

export const TableWrapper = styled.div``;
export const TableHeader = styled.h3`
  margin: 10px;
  font-size: 20px;
  text-align: center;
  text-shadow: 7px 7px 5px rgba(0, 0, 0, 0.6);
`;
export const TableContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-height: 400px;
  overflow-y: scroll;
  border-radius: 15px;
  border: 3px solid ${({ theme }) => theme.colors.secondaryColor};
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  @media screen and (max-width: 481px) {
    font-size: 14px;
  }
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
      padding: 5px 0;
    }
  }
`;

export const TableRow = styled.tr`
  display: table-row;

  &:hover button {
    opacity: 1;
  }
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
