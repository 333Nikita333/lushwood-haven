import { RefObject } from 'react';
export interface SoundProps {
  isMuted: boolean;
  toggleMute: () => void;
}
export interface AboutHeroProps {
  heroSectionRef: RefObject<HTMLDivElement>;
}
export interface AboutSectionProps {
  galleryLeftRef: RefObject<HTMLDivElement>;
  galleryRightRef: RefObject<HTMLDivElement>;
}
export interface NavLinkItemProps {
  linkName: string;
}
