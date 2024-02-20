import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { useEffect, useRef } from 'react';
import { IFancyboxProps } from '../types';

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

  return <div style={{ width: '100%' }} ref={containerRef}>{props.children}</div>;
}
