import { ReactNode, RefObject } from 'react';
import { ComponentOptionsType as FancyboxOptionsType } from '@fancyapps/ui/types/Fancybox/options';
import { PhotoType } from '.';
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
  isOpen: boolean;
  onClose: () => void;
}
export interface IBookRoomButtonProps {
  toggleModal: () => void;
}
export interface IFooterButtonContactProps extends IBookRoomButtonProps {}
export interface IFancyboxProps {
  children?: ReactNode;
  delegate?: string;
  options?: Partial<FancyboxOptionsType>;
}
export interface IRenderImageProps {
  photo: PhotoType;
  index: number;
}
