import { Howl } from 'howler';
import { useEffect, useState } from 'react';
import {
  Sound,
  SoundOptionsType,
  SoundThemeType,
  UseSoundEffectType,
} from '../types';
import { homePageSounds } from '../data/videos';

const useSoundEffect = (soundTheme: SoundThemeType): UseSoundEffectType => {
  const [sound, setSound] = useState<Sound>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  useEffect(() => {
    const soundUrl: string = homePageSounds[soundTheme];

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
