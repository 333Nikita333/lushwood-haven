import { Howl } from 'howler';

export type SoundThemeType = 'forest' | 'dungeon';

export type Sound = Howl | null;

export type SoundOptionsType = {
  src: string[];
  loop: boolean;
  volume: number;
};

export type UseSoundEffectType = {
  isMuted: boolean;
  toggleMute: () => void;
};
