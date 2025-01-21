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
  dateCheckIn: Date;
  dateCheckOut: Date;
};

export type BookRoomData = {
  client: Omit<User, 'newOrders' | 'oldOrders'>;
  roomName: string;
  roomType: string;
  dateCheckIn: string;
  dateCheckOut: string;
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
export type FormAuthData = {
  name: string;
  email: string;
  password: string;
};
export type Order = {
  id: string;
  roomName: string;
  roomType: string;
  dateCheckIn: string;
  dateCheckOut: string;
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
  reserveRoom: (data: BookRoomData) => Promise<void>;
  cancelOrder: (orderId: string) => Promise<void>;
  getRoomsData: () => Promise<Room[] | void>;
  getRoomData: (roomName: string) => Promise<Room | void>;
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
export type BookingResponse = {
  success: boolean;
  data: {
    id: string;
    roomName: string;
    roomType: string;
    dateCheckIn: string;
    dateCheckOut: string;
  };
  message: string;
};
export type Room = {
  id: string;
  name: string;
  images: string[];
  type: string;
  perNight: number;
  description: string;
  amenities: { icon: ReactNode; desc: string }[];
};
export type RoomsResponse = {
  success: boolean;
  data: Room[];
  message: string;
};
export type RoomResponse = {
  success: boolean;
  data: Room;
  message: string;
};
