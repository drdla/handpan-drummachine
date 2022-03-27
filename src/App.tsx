/// <reference types="styled-components/cssprop" />

import {memo} from 'react';
import {ThemeProvider} from 'styled-components/macro';

import {Modal} from '~/modules/modals';
import {Router} from '~/modules/router';

import {GlobalStyles, theme} from '~/styles';

const App = memo(() => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Modal />
    <Router />
  </ThemeProvider>
));

export default App;
