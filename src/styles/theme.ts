const theme = {
  paddings: {
    small: '15px',
    big: '30px',
  },
  colors: {
    primaryTextColor: '#ffffff',
    secondaryTextColor: '#e7e7e0',
    primaryColor: '#43b72b',
    secondaryColor: '#8b4513',
  },
  fontSizes: {
    primary: '18px',
    secondary: '24px',
  },
  fontWeights: {
    primary: 400,
    secondary: 900,
  },
};

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export default theme;
