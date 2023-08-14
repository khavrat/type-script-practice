import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';

const colors = {
  brand: {
    900: "#1A365D",
    800: "#2A4365",
    700: "#2C5282",
    600: "#2B6CB0",
    500: "#3182CE",
    400: "#4299E1",
    300: "#63B3ED",
    200: "#90CDF4",
    100: "#BEE3F8",
    50: "#EBF8FF",
  },
};


const theme = extendTheme({ colors });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

