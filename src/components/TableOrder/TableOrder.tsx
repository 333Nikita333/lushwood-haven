import { FC } from 'react';
import { TableOrderProps } from '../../types';
import ButtonCancelOrder from '../ButtonCancelOrder';
import {
  BookingTable,
  SubHeader,
  TableCell,
  TableContainer,
  TableHeader,
  TableRow,
  TableWrapper,
} from './TableOrder.styled';
import useStore from '../../store';

const TableOrder: FC<TableOrderProps> = ({ nameTable, orders, isCancel }) => {
  const { isLoading, cancelOrder } = useStore(state => ({
    isLoading: state.isLoading,
    cancelOrder: state.cancelOrder,
  }));

  const onCancelOrder = async (orderId: string): Promise<void> => {
    console.log('Cancel order id:', orderId);

    await cancelOrder(orderId);
  };

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
              {isCancel && <SubHeader>Cancel</SubHeader>}
            </TableRow>
          </thead>
          <tbody>
            {orders.map(({ id, roomName, roomType, dateCheckIn, dateCheckOut }) => (
              <TableRow key={id}>
                <TableCell>{roomName}</TableCell>
                <TableCell>{roomType}</TableCell>
                <TableCell>{dateCheckIn.toString()}</TableCell>
                <TableCell>{dateCheckOut.toString()}</TableCell>
                {isCancel && (
                  <TableCell>
                    <ButtonCancelOrder isLoading={isLoading} onClick={() => onCancelOrder(id)} />
                  </TableCell>
                )}
              </TableRow>
            ))}
          </tbody>
        </BookingTable>
      </TableContainer>
    </TableWrapper>
  );
};

export default TableOrder;
