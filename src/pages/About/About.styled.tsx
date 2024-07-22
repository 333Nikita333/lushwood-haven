import styled from 'styled-components';
import { bgImageAbout } from '../../data/photos';

export const AboutWrapper = styled.main`
  overflow-x: hidden;
  color: #fafafa;
  background-image: url(${bgImageAbout});
  background-size: 200px;
  background-position: center;
  will-change: transform;
`;
