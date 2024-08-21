import { Platform } from 'react-native';
const theme = {
    colors: {  
      textPrimary: '#24292e',
      textSecondary: '#586069',
      primary: '#0366d6',
      white: 'white',
    },
    background: {
        primary: 'white',
        black: 'black',
        blueLike: '#0366d6',
        mainComponentBackground: 'maroon', //'#e1e4e8',
        textBackgroundDark: 'maroon',
        textBackgroundLight: 'yellow'
    },
    fontSizes: {
      body: 14,
      subheading: 16,
    },
    fonts: {
      default: 'System',
      main: Platform.OS === 'android'? 'Roboto' : 'Arial',
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
  };
  
  export default theme;