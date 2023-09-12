import { FC, useEffect, useState } from 'react';
import { ScrollIndicatorWrapper } from './ScrollIndicator.styled';

const ScrollIndicator: FC = () => {
  const [scrollPerсentage, setScrollPerсentage] = useState<number>(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = (): void => {
      animationFrameId = requestAnimationFrame(() => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.clientHeight;
        const scrollY = window.scrollY;
        const maxScroll = documentHeight - windowHeight;
        const percentage = (scrollY / maxScroll) * 100;
        setScrollPerсentage(percentage);
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <ScrollIndicatorWrapper style={{ width: `${scrollPerсentage}%` }} />;
};

export default ScrollIndicator;
