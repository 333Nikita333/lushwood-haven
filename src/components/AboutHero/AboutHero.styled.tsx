import styled from 'styled-components';

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
`;
export const HeroVideo = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const HeroImage = styled.img`
  position: absolute;
  top: 22vh;
  left: 37vw;
  width: calc(var(--index) * 36);
  will-change: transform;

  @media screen and (max-width: 480px) {
    top: 10vh;
    left: 3vw;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    top: 5vh;
    left: 25vw;
  }
`;
export const Container = styled.div`
  padding: 0 7vw;
`;
export const MainHeader = styled.div`
  height: 100vh;
  will-change: transform;
`;
export const MainTitle = styled.h1`
  position: absolute;
  width: min-content;
  font-size: calc(var(--index) * 7);
  line-height: 0.9;
  bottom: 32vh;

  font-weight: bold;
  color: #67320c;
  text-shadow: -4px 0 black, 0 4px black, 4px 0 black, 0 -4px black;
`;
