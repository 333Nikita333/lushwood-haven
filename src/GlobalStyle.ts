import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

const GlobalStyle = createGlobalStyle`
  *,*:after,*:before {
	  margin: 0;
	  padding: 0;
	  box-sizing: border-box;
    -webkit-box-sizing: border-box;
	  -moz-box-sizing: border-box;
	  -ms-box-sizing: border-box;
  }
  :root {
    --index: calc(1vw + 1vh);
    --gallery-gap: calc(var(--index) * 5.5);
  }
  @font-face {
	  font-family: raleway_r;
	  src: url(fonts/raleway-regular.woff2);
  }
  @font-face {
	  font-family: raleway_b;
	  src: url(fonts/raleway-black.woff2);
	  font-weight: ${({ theme }) => theme.fontWeights.secondary};
  }
  @font-face {
    font-family: outfit_r;
    src: url(fonts/outfit-regular.woff2);
  }
  
  body {
    font-family: raleway_r, sans-serif;
    cursor: url('images/pointer-default.png'), auto;
  }
  a,
  button {
    &:hover {
      cursor: url('images/pointer-hover.png'), auto;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: outfit_r;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  img {
    max-width: 100%;
    display: block;
  }
  button,
  select {
    font: inherit;
  }
`;

export default GlobalStyle;
