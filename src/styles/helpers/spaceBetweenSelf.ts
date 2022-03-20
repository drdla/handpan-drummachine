import {css} from 'styled-components/macro';

export const spaceBetweenSelf = (size: string, direction: 'vertical' | 'horizontal' = 'vertical') => {
  let margin;

  switch (direction) {
    case 'horizontal':
      margin = 'margin-left';
      break;

    case 'vertical':
    default:
      margin = 'margin-top';
  }

  return css`
    /*
     * 1 - Add space between elements of the same type
     */

    & + & {
      ${margin}: ${({theme}) => (size === 'minimal' ? '1px' : theme.size[size] || theme.size.default)}; /* 1 */
    }

    /*
     * 1 - Ignore empty elements
     */

    :empty {
      ${margin}: 0; /* 1 */
    }
  `;
};
