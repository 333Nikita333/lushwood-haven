import { FC } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { Button } from './SoundBtn.styled';
import { SoundProps } from '../../types';

const SoundBtn: FC<SoundProps> = ({ isMuted, toggleMute }) => {
  return (
    <Button onClick={toggleMute}>
      {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
    </Button>
  );
};

export default SoundBtn;
