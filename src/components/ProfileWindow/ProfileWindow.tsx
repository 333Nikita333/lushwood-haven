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
} from './ProfileWindow.styled';

const ProfileWindow: FC = () => {
  return (
    <ProfileWpaper>
      <Title>My profile</Title>
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
        {/*! New Orders */}
        <TableContainer>
          <TableHeader>Current Bookings</TableHeader>
          <TableRow>
            <SubHeader>Room Name</SubHeader>
            <SubHeader>Room Type</SubHeader>
            <SubHeader>Check In</SubHeader>
            <SubHeader>Check Out</SubHeader>
          </TableRow>
          <BookingTable>
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
            <TableRow>
              <TableCell>Standard Family Room</TableCell>
              <TableCell>Family</TableCell>
              <TableCell>2024-05-27 17:10</TableCell>
              <TableCell>2024-05-28 13:47</TableCell>
            </TableRow>
          </BookingTable>
        </TableContainer>

        {/* Old Orders */}
        <TableContainer>
          <TableHeader>Past Bookings</TableHeader>
          <TableRow>
            <SubHeader>Room Name</SubHeader>
            <SubHeader>Room Type</SubHeader>
            <SubHeader>Check In</SubHeader>
            <SubHeader>Check Out</SubHeader>
          </TableRow>
          <BookingTable>
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
            <TableRow>
              <TableCell>Standard Family Room</TableCell>
              <TableCell>Family</TableCell>
              <TableCell>2024-05-27 17:10</TableCell>
              <TableCell>2024-05-28 13:47</TableCell>
            </TableRow>
          </BookingTable>
        </TableContainer>
      </TablesContainer>
    </ProfileWpaper>
  );
};

export default ProfileWindow;
