import { FC } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { SoundProps } from '../../types';
import { Button } from './SoundBtn.styled';

const SoundBtn: FC<SoundProps> = ({ isMuted, toggleMute }) => {
  return (
    <Button onClick={toggleMute}>
      {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
    </Button>
  );
};

export default SoundBtn;
