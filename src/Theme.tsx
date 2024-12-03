import { createTheme, ThemeOptions } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme: ThemeOptions = createTheme({
  cssVariables: true,
  palette: {
    mode: 'dark',
    background: {
      default: '#1b2423',
      paper: '#1b2423',
    },
    primary: {
      main: '#1b2423',
      contrastText: '#b6a054',
    },
    secondary: {
      main: '#35441d',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#bbd4b4',
      secondary: '#e2eee0',
    },
  },
});

export default theme;
