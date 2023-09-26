import { FC } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { ISoundProps } from '../../types';
import { Button } from './SoundBtn.styled';

const SoundBtn: FC<ISoundProps> = ({ isMuted, toggleMute }) => {
  return <Button onClick={toggleMute}>{isMuted ? <FaVolumeMute /> : <FaVolumeUp />}</Button>;
};

export default SoundBtn;
