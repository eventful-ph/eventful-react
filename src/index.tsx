import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import VendorScreen from './components/VendorScreen';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = createTheme({
  // components: {
  //   MuiPaper: { styleOverrides: { root: { overflow: 'visible' } } },
  // },
  typography: {
    fontFamily: 'PlusJakartaSans',
    h3: { fontSize: 28, color: '#2f2f2f', fontWeight: 700 },
  },
  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: `
  //       @font-face {
  //         font-family: 'samim';
  //         font-style: normal;
  //         font-display: swap;
  //         font-weight: 400;
  //         src: local('PlusJakartaSans'), local('PlusJakartaSans'), url('./fonts/PlusJakartaSans.ttf')}) format('truetype');
  //         unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
  //       }
  //     `,
  //   },
  // },
  palette: {
    primary: { light: '#FFD9D3', main: '#F74E37', dark: '#DF4530' },
    secondary: { light: '#FFC6D5', main: '#BF355A', dark: '#832D440' },
    info: { light: '#CDDEFF', main: '#71A0FA', dark: '#2F9546' },
    success: { light: '#E0FFD4', main: '#3CB95F', dark: '#2C5FC2' },
    warning: { light: '#FFDBC0', main: '#F99C59', dark: '#D97227' },
    error: { light: '#FFDCD4', main: '#F55858', dark: '#D42C22' },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <Header /> */}
      <VendorScreen />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
