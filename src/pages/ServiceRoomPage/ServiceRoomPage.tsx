import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavigateButton from '../../components/NavigateButton';
import RoomDescriptionInfo from '../../components/RoomDescriptionInfo';
import RoomImagesSlider from '../../components/RoomImagesSlider';
import { RoomType } from '../../types/types';
import { familyRoomList, standartRoomList, suiteRoomList } from '../Services/Services';
import { ContentInfo, Wrapper } from './ServiceRoomPage.styled';

const allRoomList = [...standartRoomList, ...familyRoomList, ...suiteRoomList];

const ServiceRoomPage: FC = () => {
  const { roomId } = useParams();
  const [roomData, setRoomData] = useState<RoomType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const searchRoomData = async (roomId: string): Promise<void> => {
      try {
        // simulated request
        await new Promise(resolve => setTimeout(resolve, 1000));
        const curRoom = allRoomList.find((room: RoomType) => roomId === room.id);

        if (!curRoom) {
          setRoomData(null);
          throw new Error('Not found any room');
        }

        setRoomData(curRoom);
        document.title = curRoom.type || 'Room of Lushwood Haven';

        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setRoomData(null);
        setIsLoading(false);
      }
    };

    searchRoomData(roomId as string);

    return () => {
      window.scrollTo(0, 0);
    };
  }, [roomId]);

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
