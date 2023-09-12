import { FC, useEffect, useState } from 'react';
import { ScrollIndicatorWrapper } from './ScrollIndicator.styled';

const ScrollIndicator: FC = () => {
  const [scrollPerсentage, setScrollPerсentage] = useState<number>(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = (): void => {
      animationFrameId = requestAnimationFrame(() => {
        // Высота видимой области окна браузера
        const windowHeight = window.innerHeight;

        // Высота всего документа
        const documentHeight = document.body.clientHeight;

        // Текущая позиция вертикальной прокрутки
        const scrollY = window.scrollY;

        // Максимально возможная вертикальная прокрутка
        const maxScroll = documentHeight - windowHeight;

        // Вычисление процентного положения вертикальной прокрутки
        // относительно максимальной прокрутки
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

  return (
    <ScrollIndicatorWrapper
      style={{ width: `${scrollPerсentage}%` }}
    ></ScrollIndicatorWrapper>
  );
};

export default ScrollIndicator;
