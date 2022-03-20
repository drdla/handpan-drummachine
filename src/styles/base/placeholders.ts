import {css} from 'styled-components/macro';

export const placeholders = css`
  /*
   * HTML5 placeholders.
   *
   * Grouping the rules for multiple browsers breaks, so we have to keep them separate
   */

  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    /*
     * 1 - Accidentally selecting the placeholder text when clicking on something else looks broken
     */

    color: ${({theme}) => theme.color.text.lighter};
    font-weight: 400 !important; /* stylelint-disable-line declaration-no-important */
    user-select: none; /* 1 */ /* stylelint-disable-line plugin/no-unsupported-browser-features */
  }

  input::-moz-placeholder,
  textarea::-moz-placeholder {
    /*
     * 1 - Accidentally selecting the placeholder text when clicking on something else looks broken
     * 2 - Required for Firefox
     */

    color: ${({theme}) => theme.color.text.lighter};
    font-weight: 400 !important; /* stylelint-disable-line declaration-no-important */
    opacity: 1; /* 2 */
    user-select: none; /* 1 */ /* stylelint-disable-line plugin/no-unsupported-browser-features */
  }

  input:-ms-input-placeholder,
  textarea:-ms-input-placeholder {
    /*
     * 1 - Accidentally selecting the placeholder text when clicking on something else looks broken
     */

    color: ${({theme}) => theme.color.text.lighter};
    font-weight: 400 !important; /* stylelint-disable-line declaration-no-important */
    user-select: none; /* 1 */ /* stylelint-disable-line plugin/no-unsupported-browser-features */
  }
`;
