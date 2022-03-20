/// <reference types="styled-components/cssprop" />

import {memo} from 'react';
import {ThemeProvider} from 'styled-components/macro';

import {Drummachine} from '~/modules/drummachine';

import {GlobalStyles, theme} from '~/styles';

const App = memo(() => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Drummachine />
  </ThemeProvider>
));

export default App;
