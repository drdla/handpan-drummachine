/*
 * Inputs.
 *
 * A lot of form styles were taken from https://github.com/ireade/formhack
 * in so far as they are not already part of
 * https://github.com/necolas/normalize.css/blob/master/normalize.css
 */

import {css} from 'styled-components/macro';

const common = css<{large?: boolean; long?: boolean}>`
  input {
    border: ${({theme}) => theme.border.default};
    caret-color: ${({theme}) => theme.color.primary.default};
    display: inline-block;
    font: inherit;
    position: relative;

    /*
     * 1 - Prevent spacing at bottom related to 'display: inline-block;'
     */
    :not([type='range']) {
      vertical-align: top; /* 1 */
    }

    :hover,
    :active,
    :focus {
      border-color: ${({theme}) => theme.color.clickable.highlight};
      outline: none;
    }

    &[disabled] {
      cursor: not-allowed;
    }
  }

  ${({long}) =>
    long &&
    `
    input:not([type]),
    input[type='text'],
    input[type='search'],
    input[type='email'],
    input[type='password'],
    input[type='url'],
    input[type='tel'] {
      max-width: none;
    }
  `};

  ${({large}) =>
    large &&
    `
    font-size: ${({theme}) => theme.font.size.large};
  `};
`;

const standardHeightInputs = css`
  /*
   * Inputs with standard height.
   *
   * 1 - Most reliable way to set line-height for all browsers,
   *     see discussion at http://joshnh.com/weblog/line-height-doesnt-work-as-expected-on-inputs/
   * 2 - Remove clear input link in IE; make sure space reserved for link is also removed
   * 3 - Hide 'show password' link in IE; this should be handled uniformly for all browsers
   * 4 - Fix input placeholder vertical alignment in FF and Edge
   */

  input[type='text'],
  input[type='email'],
  input[type='password'],
  input[type='search'],
  input[type='color'],
  input[type='date'],
  input[type='datetime-local'],
  input[type='month'],
  input[type='number'],
  input[type='tel'],
  input[type='time'],
  input[type='url'],
  input[type='week'],
  input[list] {
    appearance: none;
    height: 2em; /* 1 */

    ::-ms-clear {
      display: none; /* 2 */
      height: 0; /* 2 */
      width: 0; /* 2 */
    }

    ::-ms-reveal {
      display: none; /* 3 */
    }

    ::-ms-input-placeholder {
      line-height: 1; /* 4 */
    }

    ::-moz-placeholder {
      line-height: 1; /* 4 */
    }
  }

  /*
   * Hide webkit search input elements.
   * See https://stackoverflow.com/questions/9421551/how-do-i-remove-all-default-webkit-search-field-styling
   */
  input[type='search'] {
    ::-webkit-search-decoration,
    ::-webkit-search-cancel-button,
    ::-webkit-search-results-button,
    ::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }
  }
`;

const standardWidthInputs = css`
  /*
   * Inputs with standard width.
   */

  input:not([type]),
  input[list],
  input[type='color'],
  input[type='date'],
  input[type='datetime-local'],
  input[type='email'],
  input[type='file'],
  input[type='month'],
  input[type='number'],
  input[type='password'],
  input[type='search'],
  input[type='tel'],
  input[type='text'],
  input[type='time'],
  input[type='url'],
  input[type='week'] {
    background: ${({theme}) => theme.color.background.imageOverlay};
    border-radius: ${({theme}) => theme.border.radius.default};
    box-shadow: none;
    max-width: 19em;
    padding: 0.5em;
    transition: border-color ${({theme}) => theme.transition.time.fast} ease-in-out;
    width: 100%;
  }
`;

const textInput = css`
  input[type='text'][disabled] {
    background: ${({theme}) => theme.color.transparent};
    border-color: ${({theme}) => theme.color.transparent};
    cursor: text;
    padding-left: 0;
    padding-right: 0;

    :hover,
    :focus,
    :active {
      border-color: ${({theme}) => theme.color.transparent};
    }
  }
`;

const searchInput = css`
  /*
   * 1 - Align text with rounding of input
   */

  input[type='search'] {
    border: 0;
    border-radius: ${({theme}) => theme.border.radius.pill};
    box-sizing: border-box !important;
    padding-left: calc(${({theme}) => theme.size.default} * 1.25); /* 1 */
    padding-right: calc(${({theme}) => theme.size.default} * 1.25); /* 1 */
  }
`;

const checkboxRadio = css`
  /*
   * 1 - Checkboxes and radiobuttons have their labels on the right,
   *     so add one character width of margin there
   */

  input[type='checkbox'],
  input[type='radio'] {
    display: inline-block;
    margin-right: 1ch; /* 1 */
    vertical-align: middle;
  }
`;

export const inputs = css`
  ${common};
  ${standardHeightInputs};
  ${standardWidthInputs};
  ${checkboxRadio};
  ${searchInput};
  ${textInput};
`;
