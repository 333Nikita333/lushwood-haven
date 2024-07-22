import { FC } from 'react';
import { Parallax } from 'react-parallax';
import { ServiceBgParallaxContainerProps } from '../../types';

const ServiceBgParallaxContainer: FC<ServiceBgParallaxContainerProps> = ({ options, children }) => {
  const { src, alt, strength, blur } = options;

  return (
    <Parallax bgImage={src} bgImageAlt={alt} strength={strength} blur={blur}>
      {children}
    </Parallax>
  );
};

export default ServiceBgParallaxContainer;
