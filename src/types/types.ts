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
  name: string;
  email: string;
  phone?: string;
  roomName: string;
  roomType: string;
  checkInDate: Date;
  checkOutDate: Date;
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
  src: string;
  alt: string;
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
export type FormAuthData = {
  name: string;
  email: string;
  password: string;
};
export type Order = {
  roomName: string;
  roomType: string;
  dateCheckIn: Date;
  dateCheckOut: Date;
};
export type User = {
  name: string;
  email: string;
  phone?: string;
  newOrders?: Order[];
  oldOrders?: Order[];
};
export type AuthStore = {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  current: () => Promise<void>;
  logout: () => void;
};
export type AuthResponse = {
  data: {
    user: User;
    token: string;
  };
  message: string;
  success: boolean;
};
export type UserResponse = {
  data: User;
  message: string;
  success: boolean;
};
export type ErrorResponse = {
  response: {
    data: {
      name: string;
      error: {
        message: string;
        code: string;
        status: number;
      };
    };
  };
};
export type ApiError = {
  error: {
    message: string;
    code: string;
    status: number;
  };
  name: string;
};
