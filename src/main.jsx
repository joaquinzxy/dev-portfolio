import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import {mode} from "@chakra-ui/theme-tools";

import global_en from './translations/en/global.json';
import global_es from './translations/es/global.json';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18n.init({
    interpolation: { escapeValue: false },
    lng: 'en',
    resources: {
        en: {
        global: global_en
        },
        es: {
        global: global_es
        }
    }
});

const theme = extendTheme({
  styles: {
    fonts: {
      heading: `'Px-Grotesk', sans-serif`,
      body: `'Nunito', sans-serif`
    },
    global: (props) => ({
      body: {
        bg: mode('white', 'grey.900')(props),
      },
    })
  }
 });


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <I18nextProvider i18n={i18n}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
    </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
