import {createGlobalStyle} from 'styled-components/macro';

import {headings, images, inputs, tables, text} from './atoms';
import {boxSizing, links, normalize, page, placeholders, reset, shared} from './base';

export const GlobalStyles = createGlobalStyle`
  // Base
  ${boxSizing}
  ${links}
  ${normalize}
  ${page}
  ${placeholders}
  ${reset}
  ${shared}

  // Atoms
  ${headings}
  ${images}
  ${inputs}
  ${tables}
  ${text}
`;
