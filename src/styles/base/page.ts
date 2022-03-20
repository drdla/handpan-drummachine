import {css} from 'styled-components/macro';

export const page = css`
  /* ==========================================================================
     #PAGE
     ========================================================================== */

  /**
   * Simple page-level setup.
   *
   * 1. Set the default 'font-size' and 'line-height' for the entire project,
   *    sourced from our default variables. The 'font-size' is calculated to exist
   *    in ems, the 'line-height' is calculated to exist unitlessly.
   * 2. Ensure the page always fills the entire height of the viewport.
   */

  html {
    font-size: ${({theme}) => theme.font.size.default}; /* 1 */
    line-height: 1.5; /* 1 */
    min-height: 100%; /* 2 */
    overflow: hidden;
  }
`;
