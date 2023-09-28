import { useRef, useEffect } from 'react';
import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import { IFancyboxProps } from '../types';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

export default function FancyboxWrapper(props: IFancyboxProps) {
  const containerRef = useRef(null);
  const defaultOptions = {
    Toolbar: {
      display: {
        left: ['infobar'],
        middle: ['zoomIn', 'zoomOut', 'toggle1to1', 'rotateCCW', 'rotateCW', 'flipX', 'flipY'],
        right: ['slideshow', 'fullscreen', 'thumbs', 'close'],
      },
    },
  };
  useEffect(() => {
    const container = containerRef.current;
    const delegate = props.delegate || '[data-fancybox]';
    const options = props.options || defaultOptions;

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  });

  return <div ref={containerRef}>{props.children}</div>;
}
