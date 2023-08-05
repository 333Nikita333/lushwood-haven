import { FC } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { HeaderProps } from '../../types/interfaces';
import { IconWrapper } from './SoundBtn.styled';

const SoundBtn: FC<HeaderProps> = ({ isMuted, toggleMute }) => {
  return (
    <IconWrapper onClick={toggleMute}>
      {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
    </IconWrapper>
  );
};

export default SoundBtn;
