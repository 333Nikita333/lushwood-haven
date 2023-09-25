import { Howl } from 'howler';

export type SoundThemeType = 'forest' | 'dungeon';

export type Sound = Howl | null;

export type SoundFileTypes = {
  forest: string;
  dungeon: string;
};
export type SoundOptionsType = {
  src: string[];
  loop: boolean;
  volume: number;
};

export type UseSoundEffectType = {
  isMuted: boolean;
  toggleMute: () => void;
};

export type LinkName = 'Home' | 'About' | 'Search' | 'Gallery';

export type OrderFormData = {
  checkInDate: Date;
  checkOutDate: Date;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  roomType: string;
};
export type ContactFormData = {
  email: string;
  name: string;
  message: string;
};
