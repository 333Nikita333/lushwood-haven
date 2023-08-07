import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

const GlobalStyle = createGlobalStyle`
  :root {
    --index: calc(1vw + 1vh);
    --text: #e7e7e0;
  }

  @font-face {
	  font-family: raleway_f;
	  src: url(fonts/raleway-regular.woff2);
  }
  @font-face {
	  font-family: raleway_b;
	  src: url(fonts/raleway-black.woff2);
	  font-weight: 900;
  }
  
  * {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
  
  body {
    background-color: #010101;
    font-family: raleway_f, sans-serif;
    line-height: 1.55;
    cursor: url('images/pointer-default.png'), auto;
  }
  
  a,
  button {
    &:hover {
      cursor: url('images/pointer-hover.png'), auto;
    }
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
