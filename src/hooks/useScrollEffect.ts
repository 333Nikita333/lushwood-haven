import { useState, useEffect } from 'react';

const useScrollEffect = (
  isModalFormOpen: boolean,
  isWindowProfileOpen: boolean,
  isMobileMenuOpen: boolean,
  isAuthFormOpen: boolean
) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(window.scrollY);

  useEffect(() => {
    const handleScroll = (): void => {
      if (isModalFormOpen || isWindowProfileOpen || isMobileMenuOpen || isAuthFormOpen) return;

      const currentScrollPos: number = window.scrollY;
      const isScrollingUp: boolean = currentScrollPos < prevScrollPos;

      setIsHeaderVisible(isScrollingUp);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, isModalFormOpen, isWindowProfileOpen, isMobileMenuOpen, isAuthFormOpen]);

  return isHeaderVisible;
};

export default useScrollEffect;
