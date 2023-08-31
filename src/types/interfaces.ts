import { ReactNode, RefObject } from 'react';
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
