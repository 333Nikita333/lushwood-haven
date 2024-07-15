import LocomotiveScroll from 'locomotive-scroll';
import { createContext, FC, useContext, useEffect, useState } from 'react';
import { ScrollContextProps, ScrollProviderProps } from '../types';

export const ScrollProvider: FC<ScrollProviderProps> = ({ children }) => {
  const [locomotiveScroll, setLocomotiveScroll] = useState<LocomotiveScroll | null>(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      lenisOptions: {
        lerp: 0.08,
        duration: 0.1,
      },
      autoResize: true,
    });

    setLocomotiveScroll(scroll);

    return () => {
      scroll.destroy();
    };
  }, []);

  const toggleScroll = (enable: boolean): void => {
    if (locomotiveScroll) {
      if (enable) {
        locomotiveScroll.start();
      } else {
        locomotiveScroll.stop();
      }
    }
  };

  return <ScrollContext.Provider value={{ toggleScroll }}>{children}</ScrollContext.Provider>;
};

const ScrollContext = createContext<ScrollContextProps | null>(null);

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};
