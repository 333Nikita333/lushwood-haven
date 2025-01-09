import { ComponentOptionsType as FancyboxOptionsType } from '@fancyapps/ui/types/Fancybox/options';
import LocomotiveScroll from 'locomotive-scroll';
import { ReactNode, RefObject } from 'react';
import { OptionsBgImageType, Order, RoomType, User } from '.';

export interface ISoundProps {
  isMuted: boolean;
  toggleMute: () => void;
}
export interface IAboutHeroProps {
  heroSectionRef: RefObject<HTMLDivElement>;
}
export interface IAboutSectionProps {
  galleryLeftRef: RefObject<HTMLDivElement>;
  galleryRightRef: RefObject<HTMLDivElement>;
}
export interface INavLinkItemProps {
  linkName: string;
}
export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
export interface IMobileMenuProps {
  isMobileMenuOpen: boolean;
  onClose: () => void;
}
export interface IButtonOpenModalProps {
  toggleModalForm: () => void;
  text: string;
  icon: JSX.Element;
}
export interface IFooterButtonContactProps {
  toggleContactForm: () => void;
}
export interface IFancyboxProps {
  children?: ReactNode;
  delegate?: string;
  options?: Partial<FancyboxOptionsType>;
}
export interface ServiceBgParallaxContainerProps {
  options: OptionsBgImageType;
  children: ReactNode;
}
export interface ServiceRoomItemProps {
  roomData: RoomType;
}
export interface ServiceRoomListProps {
  roomList: RoomType[];
}
export interface SliderProps {
  images: string[];
}
export interface ServiceMainInfoProps {
  listServices: {
    icon: JSX.Element;
    name: string;
  }[];
}
export interface INavigateButtonProps {
  path: string;
  text: string;
}
export interface IRoomDescriptionInfoProps {
  type: string;
  perNight: number;
  description: string;
  amenities: { icon: ReactNode; desc: string }[];
}
export interface IScrollDownBtnProps {
  $sizex?: string;
  $sizey?: string;
}
export interface ScrollContextProps {
  locomotiveScroll: LocomotiveScroll | null;
  toggleScroll: (enable: boolean) => void;
}

export interface ScrollProviderProps {
  children: ReactNode;
}

export interface RouteProps {
  component: JSX.Element;
  redirectTo?: string;
}
export interface ProfileWindowProps {
  user: User | null;
  onSubmit: () => void;
}
export interface TableOrderProps {
  nameTable: string;
  orders: Order[];
  isCancel?: boolean;
}
