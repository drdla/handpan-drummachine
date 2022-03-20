import {ThemeSize} from 'styled-components';
import styled from 'styled-components/macro';

type GridLayoutProps = {
  columns: number;
  gap?: ThemeSize | ThemeSize[];
  rows?: number;
};

export const GridLayout = styled.div<GridLayoutProps>`
  /*
   * 1 - Set explicit minimum column width to prevent grid blowout,
   *     see https://css-tricks.com/preventing-a-grid-blowout/
   */

  display: grid;
  grid-gap: ${({gap, theme}) => {
    if (!gap) {
      return theme.size.default;
    }

    if (Array.isArray(gap)) {
      return gap.map((it) => theme.size[it]).join(' ');
    }

    return theme.size[gap];
  }};
  grid-template-columns: ${({columns}) => `repeat(${columns}, minmax(0, 1fr))`}; /* 1 */
  grid-template-rows: ${({rows}) => rows || 'auto'};
  width: 100%;
`;
