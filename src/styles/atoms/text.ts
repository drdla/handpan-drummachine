import {css} from 'styled-components/macro';

export const text = css`
  /*
   * Default text styles for various elements.
   */

  body {
    color: ${({theme}) => theme.color.text.default};
    font-family: Open Sans, Arial, sans-serif;
    font-style: normal;
    font-weight: ${({theme}) => theme.font.weight.normal};
  }

  p {
    margin: 0 0 1em;
  }

  strong {
    font-weight: ${({theme}) => theme.font.weight.bold};
  }

  em {
    font-style: italic;
  }

  dfn {
    color: ${({theme}) => theme.color.text.lighter};
    font-style: italic;
  }

  cite {
    font-style: normal;
  }

  sub,
  sup {
    font-size: 0.66em; /* stylelint-disable-line */
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sup {
    top: -0.4em;
  }

  sub {
    bottom: -0.33em;
  }
`;
