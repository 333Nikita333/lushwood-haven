import { FC } from 'react';
import { ProfileWindowProps } from '../../types';
import TableOrder from '../TableOrder';
import {
  InfoBlock,
  InfoBlockItem,
  ProfileWpaper,
  TablesContainer,
  Title,
  TitleWrapper,
} from './ProfileWindow.styled';
import ButtonLogout from '../ButtonLogout';
import { FiLogOut } from 'react-icons/fi';

const ProfileWindow: FC<ProfileWindowProps> = ({ onSubmit, user }) => {
  const { name, email, phone, newOrders, oldOrders } = user || {};
  const hasOrders = (newOrders && newOrders.length > 0) || (oldOrders && oldOrders.length > 0);

  return (
    <ProfileWpaper>
      <TitleWrapper>
        <Title>My Profile</Title>
        <ButtonLogout onSubmit={onSubmit} icon={<FiLogOut />} text="Logout" />
      </TitleWrapper>

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

      {hasOrders && (
        <TablesContainer>
          {newOrders && newOrders.length > 0 && (
            <TableOrder nameTable="Current Bookings" orders={newOrders} />
          )}
          {oldOrders && oldOrders.length > 0 && (
            <TableOrder nameTable="Past Bookings" orders={oldOrders} />
          )}
        </TablesContainer>
      )}
    </ProfileWpaper>
  );
};

export default ProfileWindow;
