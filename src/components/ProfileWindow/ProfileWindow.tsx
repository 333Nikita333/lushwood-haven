import { FC } from 'react';
import { ProfileWindowProps } from '../../types';
import {
  InfoBlock,
  InfoBlockItem,
  ProfileWpaper,
  TablesContainer,
  Title,
} from './ProfileWindow.styled';
import TableOrder from '../TableOrder';

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

      {newOrders && newOrders.length > 0 && oldOrders && oldOrders.length > 0 && (
        <TablesContainer>
          {newOrders.length > 0 && <TableOrder nameTable="Current Bookings" orders={newOrders} />}

          {oldOrders.length > 0 && <TableOrder nameTable="Past Bookings" orders={oldOrders} />}
        </TablesContainer>
      )}
    </ProfileWpaper>
  );
};

export default ProfileWindow;
