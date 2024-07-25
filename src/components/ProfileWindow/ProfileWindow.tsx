import { FC } from 'react';
import {
  ProfileWpaper,
  Title,
  InfoBlock,
  BookingTable,
  TableHeader,
  TableRow,
  TableCell,
  SubHeader,
  TablesContainer,
  TableContainer,
  InfoBlockItem,
  TableWrapper,
} from './ProfileWindow.styled';

const ProfileWindow: FC = () => {
  return (
    <ProfileWpaper>
      <Title>My Profile</Title>
      <InfoBlock>
        <InfoBlockItem>
          <p>Name: Nikitos</p>
        </InfoBlockItem>
        <InfoBlockItem>
          <p>Email: nikitosfox333@gmail.com</p>
        </InfoBlockItem>
        <InfoBlockItem>
          <p>Phone: +380991234567</p>
        </InfoBlockItem>
      </InfoBlock>
      <TablesContainer>
        {/* Current Bookings */}
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
                {/* Replace the hardcoded rows with dynamic data from your backend */}
                <TableRow>
                  <TableCell>Standard Family Room</TableCell>
                  <TableCell>Family</TableCell>
                  <TableCell>2024-05-27 17:10</TableCell>
                  <TableCell>2024-05-28 13:47</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Standard Family Room</TableCell>
                  <TableCell>Family</TableCell>
                  <TableCell>2024-05-27 17:10</TableCell>
                  <TableCell>2024-05-28 13:47</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Standard Family Room</TableCell>
                  <TableCell>Family</TableCell>
                  <TableCell>2024-05-27 17:10</TableCell>
                  <TableCell>2024-05-28 13:47</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Standard Family Room</TableCell>
                  <TableCell>Family</TableCell>
                  <TableCell>2024-05-27 17:10</TableCell>
                  <TableCell>2024-05-28 13:47</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Standard Family Room</TableCell>
                  <TableCell>Family</TableCell>
                  <TableCell>2024-05-27 17:10</TableCell>
                  <TableCell>2024-05-28 13:47</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Standard Family Room</TableCell>
                  <TableCell>Family</TableCell>
                  <TableCell>2024-05-27 17:10</TableCell>
                  <TableCell>2024-05-28 13:47</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Standard Family Room</TableCell>
                  <TableCell>Family</TableCell>
                  <TableCell>2024-05-27 17:10</TableCell>
                  <TableCell>2024-05-28 13:47</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Standard Family Room</TableCell>
                  <TableCell>Family</TableCell>
                  <TableCell>2024-05-27 17:10</TableCell>
                  <TableCell>2024-05-28 13:47</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Standard Family Room</TableCell>
                  <TableCell>Family</TableCell>
                  <TableCell>2024-05-27 17:10</TableCell>
                  <TableCell>2024-05-28 13:47</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Standard Family Room</TableCell>
                  <TableCell>Family</TableCell>
                  <TableCell>2024-05-27 17:10</TableCell>
                  <TableCell>2024-05-28 13:47</TableCell>
                </TableRow>
                {/* Add more rows as needed */}
              </tbody>
            </BookingTable>
          </TableContainer>
        </TableWrapper>

        {/* Past Bookings */}
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
                {/* Replace the hardcoded rows with dynamic data from your backend */}
                <TableRow>
                  <TableCell>Standard Family Room</TableCell>
                  <TableCell>Family</TableCell>
                  <TableCell>2024-05-27 17:10</TableCell>
                  <TableCell>2024-05-28 13:47</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Standard Family Room</TableCell>
                  <TableCell>Family</TableCell>
                  <TableCell>2024-05-27 17:10</TableCell>
                  <TableCell>2024-05-28 13:47</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Standard Family Room</TableCell>
                  <TableCell>Family</TableCell>
                  <TableCell>2024-05-27 17:10</TableCell>
                  <TableCell>2024-05-28 13:47</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Standard Family Room</TableCell>
                  <TableCell>Family</TableCell>
                  <TableCell>2024-05-27 17:10</TableCell>
                  <TableCell>2024-05-28 13:47</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Standard Family Room</TableCell>
                  <TableCell>Family</TableCell>
                  <TableCell>2024-05-27 17:10</TableCell>
                  <TableCell>2024-05-28 13:47</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Standard Family Room</TableCell>
                  <TableCell>Family</TableCell>
                  <TableCell>2024-05-27 17:10</TableCell>
                  <TableCell>2024-05-28 13:47</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Standard Family Room</TableCell>
                  <TableCell>Family</TableCell>
                  <TableCell>2024-05-27 17:10</TableCell>
                  <TableCell>2024-05-28 13:47</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Standard Family Room</TableCell>
                  <TableCell>Family</TableCell>
                  <TableCell>2024-05-27 17:10</TableCell>
                  <TableCell>2024-05-28 13:47</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Standard Family Room</TableCell>
                  <TableCell>Family</TableCell>
                  <TableCell>2024-05-27 17:10</TableCell>
                  <TableCell>2024-05-28 13:47</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Standard Family Room</TableCell>
                  <TableCell>Family</TableCell>
                  <TableCell>2024-05-27 17:10</TableCell>
                  <TableCell>2024-05-28 13:47</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Standard Family Room</TableCell>
                  <TableCell>Family</TableCell>
                  <TableCell>2024-05-27 17:10</TableCell>
                  <TableCell>2024-05-28 13:47</TableCell>
                </TableRow>
                {/* Add more rows as needed */}
              </tbody>
            </BookingTable>
          </TableContainer>
        </TableWrapper>
      </TablesContainer>
    </ProfileWpaper>
  );
};

export default ProfileWindow;
