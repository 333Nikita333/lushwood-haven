import { FC } from 'react';
import { Parallax } from 'react-parallax';
import { ServiceBgParallaxContainerProps } from '../../types';

const ServiceBgParallaxContainer: FC<ServiceBgParallaxContainerProps> = ({ options, children }) => {
  const { bgImagePath, bgImageDesc, strength, blur } = options;
  
  return (
    <Parallax
      bgImage={bgImagePath}
      bgImageAlt={bgImageDesc}
      strength={strength}
      blur={blur}
    >
      {children}
    </Parallax>
  );
};

export default ServiceBgParallaxContainer;
