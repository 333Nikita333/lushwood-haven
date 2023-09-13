const theme = {
  paddings: {
    small: '15px',
  },
  colors: {
    primary: '#ffffff',
    text: '#e7e7e0',
    aboutSectionTitle: '#f4efec', // about title
    aboutSectionText: '#cdc9c9', // about text
    bookRoomBtnBgc: '#43b72b', // book a room background color
    primaryBrown: '#8b4513',
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
