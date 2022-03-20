import {ThemeSize, css} from 'styled-components/macro';

import {darken, lighten} from '~/lib';

import {truncateText} from './truncateText';

export const visualZHeight = '1.5px';

type Props = {
  danger?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  size?: ThemeSize;
};

export const button = css<Props>`
  /*
   * 1 - Add shadow at bottom of button to create spatial depth and make button stand out
   * 2 - Always vertically center buttons with other elements
   * 3 - Prevent ridiculous looking buttons by setting a minimal width
   */

  ${truncateText};

  appearance: none;
  background: ${({theme}) => theme.color.clickable.default};
  border-radius: ${({theme}) => theme.border.radius.large};
  border: 0;
  box-shadow: inset -1px -${visualZHeight} 0 hsla(0, 0%, 0%, 0.23); /* 1 */
  color: ${({theme}) => theme.color.text.inverse};
  cursor: pointer;
  display: inline-block;
  font-weight: ${({theme}) => theme.font.weight.normal};
  min-width: ${({size}) => {
    switch (size) {
      case 'huge':
        return '10em';

      case 'large':
        return '8em';

      default:
        return '6em';
    }
  }}; /* 3 */
  padding: ${({theme}) => theme.size.small} 1em;
  text-align: center;
  text-shadow: 0 -1px 0 ${({theme}) => theme.color.clickable.darker};
  transition: background, color ${({theme}) => theme.transition.time.slow};
  user-select: none;
  vertical-align: middle; /* 2 */

  :hover {
    ${({disabled, theme}) =>
      !disabled &&
      `
        background: ${theme.color.clickable.highlight};
        color: ${theme.color.text.inverse};
      `};
  }

  :active,
  :focus {
    outline: none !important;
  }

  /*
   * Visually push button down to surface by
   * 1 - Removing shadow that creates 3d effect -> appears flat
   * 2 - Reducing padding-bottom of button, which was filled with the inset shadow
   * 3 - Translating down vertically by its visual height to preserve position of lower edge of button
   */

  :active {
    ${({disabled, theme}) =>
      !disabled &&
      `
        box-shadow: inset 0 0 0 1px hsla(0, 0%, 0%, 0.08); /* 1 */
        padding-bottom: calc(${theme.size.small} - ${visualZHeight}); /* 2 */
        transform: translateY(${visualZHeight}); /* 3 */
    `};
  }

  ${({danger, disabled, theme}) =>
    danger &&
    !disabled &&
    `
      background: ${theme.color.state.danger};
      border-color: ${darken(theme.color.state.danger, 21)};
      text-shadow: 0 -1px 0 ${darken(theme.color.state.danger, 21)};

      :hover {
        background: ${lighten(theme.color.state.danger, 8)}
      }
  `};

  ${({disabled, theme}) =>
    disabled &&
    `
      background: ${theme.color.background.default};
      border-color: ${theme.color.transparent} ${darken(theme.color.background.default, 21)} ${darken(
      theme.color.background.default,
      21
    )};

      cursor: not-allowed;
      text-shadow: 0 -1px 0 hsla(0, 0%, 0%, 0.13);
  `};

  ${({fullWidth}) => (fullWidth ? 'width: 100%;' : '')};

  ${({disabled, size, theme}) =>
    size === 'small' &&
    `
      padding: ${theme.size.tiny} ${theme.size.small};

      :active {
        ${
          !disabled &&
          `
          padding-bottom: calc(${theme.size.tiny} - ${visualZHeight}); /* 3 */
        `
        }
      }
  `};

  ${({disabled, size, theme}) =>
    size === 'large' &&
    `
      font-size: ${theme.font.size.large};
      padding: ${theme.size.default};

      :active {
        ${
          !disabled &&
          `
          padding-bottom: calc(${theme.size.default} - ${visualZHeight}); /* 3 */
        `
        }
      }
  `};

  ${({disabled, size, theme}) =>
    size === 'huge' &&
    `
      font-size: ${theme.font.size.large};
      padding: ${theme.size.default} ${theme.size.large};

      :active {
        ${
          !disabled &&
          `
          padding-bottom: calc(${theme.size.default} - ${visualZHeight}); /* 3 */
        `
        }
      }
  `};
`;
