import styled from 'styled-components';

export const MainHeader = styled.div`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    z-index: 100;
    width: 100%;
    height: calc(var(--index) * 10);
    background-image: url('images/home_images/ground.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    bottom: calc(var(--index) * -4.5);
  }
`;

export const Layers = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

export const LayerHeader = styled.div`
  z-index: 1;
  transform: translate3d(0, calc(var(--scrollTop) / 2), 0);
  will-change: transform;
  text-transform: uppercase;
  font-family: raleway_b;
  font-size: calc(var(--index) * 1.8);
  color: ${({ theme }) => theme.colors.text};
  text-shadow: 0 0 15px #9d822b;
`;

export const LayersCaption = styled.div`
  font-size: calc(var(--index) / 1.175);
  letter-spacing: calc(var(--index) / 3.5);
`;

export const LayersTitle = styled.div`
  font-size: calc(var(--index) * 2.65);
  letter-spacing: calc(var(--index) / 2.25);
  margin-bottom: calc(var(--index) * 3.75);
`;

export const Layer = styled.div`
  position: absolute;
  z-index: 2;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  will-change: transform;
`;

export const LayerBase = styled(Layer)`
  z-index: 0;
  transform: translate3d(0, calc(var(--scrollTop) / 1.6), 0);
`;

export const LayerMiddle = styled(Layer)`
  transform: translate3d(0, calc(var(--scrollTop) / 2.5), 0);
`;

export const LayerFront = styled(Layer)`
  transform: translate3d(0, calc(var(--scrollTop) / 5.7), 0);
`;
