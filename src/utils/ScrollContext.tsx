import LocomotiveScroll from 'locomotive-scroll';
import { createContext, FC, useContext, useEffect, useState } from 'react';
import { ScrollContextProps, ScrollProviderProps } from '../types';

const ScrollContext = createContext<ScrollContextProps | null>(null);

export const ScrollProvider: FC<ScrollProviderProps> = ({ children }) => {
  const [locomotiveScroll, setLocomotiveScroll] = useState<LocomotiveScroll | null>(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      lenisOptions: {
        lerp: 0.08,
        duration: 0.1,
      },
    });

    setLocomotiveScroll(scroll);

    return () => {
      scroll.destroy();
      setLocomotiveScroll(null);
    };
  }, []);

  const toggleScroll = (enable: boolean): void => {
    if (!enable && locomotiveScroll) {
      locomotiveScroll.destroy();
      setLocomotiveScroll(null);
    }
    if (enable) {
      const newScroll = new LocomotiveScroll({
        lenisOptions: {
          lerp: 0.08,
          duration: 0.1,
        },
      });
      setLocomotiveScroll(newScroll);
    }
  };

  return (
    <ScrollContext.Provider value={{ locomotiveScroll, toggleScroll }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};