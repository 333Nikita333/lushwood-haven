import { FC } from 'react';
import { TableOrderProps } from '../../types';
import {
  BookingTable,
  SubHeader,
  TableCell,
  TableContainer,
  TableHeader,
  TableRow,
  TableWrapper,
} from './TableOrder.styled';

const TableOrder: FC<TableOrderProps> = ({ nameTable, orders }) => {
  return (
    <TableWrapper>
      <TableHeader>{nameTable}</TableHeader>
      <TableContainer>
        <BookingTable>
          <thead>
            <TableRow>
              <SubHeader>Room Name</SubHeader>
              <SubHeader>Room Type</SubHeader>
              <SubHeader>Check In</SubHeader>
              <SubHeader>Check Out</SubHeader>
            </TableRow>
          </thead>
          <tbody>
            {orders.map(({ roomName, roomType, dateCheckIn, dateCheckOut }, index) => (
              <TableRow key={index}>
                <TableCell>{roomName}</TableCell>
                <TableCell>{roomType}</TableCell>
                <TableCell>{dateCheckIn.toString()}</TableCell>
                <TableCell>{dateCheckOut.toString()}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </BookingTable>
      </TableContainer>
    </TableWrapper>
  );
};

export default TableOrder;
