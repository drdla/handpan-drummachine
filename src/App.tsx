/// <reference types="styled-components/cssprop" />

import {memo} from 'react';
import {ThemeProvider} from 'styled-components/macro';

import {Learning} from '~/modules/learning';

import {GlobalStyles, theme} from '~/styles';

const App = memo(() => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Learning />
  </ThemeProvider>
));

export default App;
