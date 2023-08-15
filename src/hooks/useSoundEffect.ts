import { Howl } from 'howler';
import { useEffect, useState } from 'react';
import {
  Sound,
  SoundFileTypes,
  SoundOptionsType,
  SoundThemeType,
  UseSoundEffectType,
} from '../types';

const soundFiles: SoundFileTypes = {
  forest: 'sounds/Forest.mp3',
  dungeon: 'sounds/Dungeon.mp3',
};

const useSoundEffect = (soundTheme: SoundThemeType): UseSoundEffectType => {
  const [sound, setSound] = useState<Sound>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  useEffect(() => {
    const soundUrl: string = soundFiles[soundTheme];

    const options: SoundOptionsType = {
      src: [soundUrl],
      loop: true,
      volume: 0.5,
    };
    const newSound: Sound = new Howl(options);
    setSound(newSound);

    return () => {
      newSound.unload();
    };
  }, [soundTheme]);

  useEffect(() => {
    if (sound) {
      if (!isMuted) {
        sound.play();
      } else {
        sound.pause();
      }
    }
  }, [sound, isMuted]);

  const toggleMute = (): void => {
    setIsMuted(prevMuted => !prevMuted);
  };

  return { isMuted, toggleMute };
};

export default useSoundEffect;
