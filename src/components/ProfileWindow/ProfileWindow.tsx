import { FC } from 'react';
import { ProfileWindowProps } from '../../types';
import {
  BookingTable,
  InfoBlock,
  InfoBlockItem,
  ProfileWpaper,
  SubHeader,
  TableCell,
  TableContainer,
  TableHeader,
  TableRow,
  TablesContainer,
  TableWrapper,
  Title,
} from './ProfileWindow.styled';

const ProfileWindow: FC<ProfileWindowProps> = ({ user }) => {
  const { name, email, phone, newOrders, oldOrders } = user || {};

  return (
    <ProfileWpaper>
      <Title>My Profile</Title>
      <InfoBlock>
        <InfoBlockItem>
          <p>Name: {name}</p>
        </InfoBlockItem>
        <InfoBlockItem>
          <p>Email: {email}</p>
        </InfoBlockItem>
        <InfoBlockItem>
          <p>Phone: {phone ? phone : 'No phone'}</p>
        </InfoBlockItem>
      </InfoBlock>
      <TablesContainer>
        {newOrders && newOrders.length > 0 && (
          <TableWrapper>
            <TableHeader>Current Bookings</TableHeader>
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
                  {newOrders.map(({ roomName, roomType, dateCheckIn, dateCheckOut }, index) => (
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
        )}

        {oldOrders && oldOrders.length > 0 && (
          <TableWrapper>
            <TableHeader>Past Bookings</TableHeader>
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
                  {oldOrders.map(({ roomName, roomType, dateCheckIn, dateCheckOut }, index) => (
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
        )}
      </TablesContainer>
    </ProfileWpaper>
  );
};

export default ProfileWindow;
