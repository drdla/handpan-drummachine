/// <reference types="styled-components/cssprop" />

import {memo} from 'react';
import {ThemeProvider} from 'styled-components/macro';

import {DrumMachine} from '~/modules/drum-machine';

import {GlobalStyles, theme} from '~/styles';

const App = memo(() => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <DrumMachine />
  </ThemeProvider>
));

export default App;
