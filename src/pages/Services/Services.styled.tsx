import styled from 'styled-components';

export const WrapperOuter = styled.main`
  margin: 0;
  height: 100vh;
  font-size: 16px;
  color: #000;
  background: #fff;
  overflow: hidden;
`;
export const Wrapper = styled.div`
  height: 100%;
  overflow-x: hidden;
  perspective: 1px;
`;
export const ParallaxSection = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  padding: 10vh 10vh;
  overflow: hidden;
  transform-style: preserve-3d;

  & h2 {
    margin: 0 0 10px;
    text-align: center;
    font-size: 120px;
    color: #fff;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
    text-transform: uppercase;
  }
`;
export const ParallaxBg = styled.div`
  position: absolute;
  z-index: -1;
  min-height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center center;
  transform: translate3d(0, 0, -1px) scale(2);
`;
