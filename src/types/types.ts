import { Howl } from 'howler';
import { ReactNode } from 'react';

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

export type LinkName = 'Home' | 'About' | 'Search' | 'Gallery' | 'Services';

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
export type PhotoType = {
  src: string;
  alt: string;
  width: number;
  height: number;
};
export type ValidationImagesType = {
  isLoading: boolean;
  validPhotos: PhotoType[];
};
export type OptionsBgImageType = {
  bgImagePath: string;
  bgImageDesc: string;
  strength: number;
  blur?: { min: number; max: number };
};
export type RoomType = {
  id: string;
  images: string[];
  type: string;
  perNight: number;
  description: string;
  amenities: { icon: ReactNode; desc: string }[];
};
