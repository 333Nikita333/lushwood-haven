import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavigateButton from '../../components/NavigateButton';
import RoomDescriptionInfo from '../../components/RoomDescriptionInfo';
import RoomImagesSlider from '../../components/RoomImagesSlider';
import useStore from '../../store';
import { Room } from '../../types';
import { ContentInfo, Wrapper } from './ServiceRoomPage.styled';

const ServiceRoomPage: FC = () => {
  const { roomNameId } = useParams();
  const [roomData, setRoomData] = useState<Room | null>(null);
  const { isLoading, getRoomData } = useStore(state => ({
    isLoading: state.isLoading,
    getRoomData: state.getRoomData,
  }));

  useEffect(() => {
    const fetchRoomDetails = async (): Promise<void> => {
      const room = await getRoomData(roomNameId as string);

      if (!room) {
        setRoomData(null);
        throw new Error('Room not found');
      }
      setRoomData(room);

      document.title = room.name || 'Room of Lushwood Haven';
    };

    if (roomNameId) {
      fetchRoomDetails();
    }

    return () => {
      window.scrollTo(0, 0);
    };
  }, [roomNameId, getRoomData]);

  return (
    <Wrapper>
      {isLoading && (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '52px',
            textAlign: 'center',
            padding: '20px',
            width: '100%',
          }}
        >
          Loading...
        </div>
      )}

      {!roomData && !isLoading && <Wrapper>Not found any room</Wrapper>}

      {roomData && !isLoading && (
        <>
          <RoomImagesSlider images={roomData.images} />

          <ContentInfo>
            <NavigateButton path="/services" text="Go Back" />

            <RoomDescriptionInfo roomData={roomData} />
          </ContentInfo>
        </>
      )}
    </Wrapper>
  );
};

export default ServiceRoomPage;
