import {css} from 'styled-components/macro';

export const tables = css`
  table {
    margin-bottom: 0;
    width: 100%;

    td,
    th {
      padding: 0.5em 0.75em;
    }

    thead tr {
      border-bottom: ${({theme}) => theme.border.width.default} solid ${({theme}) => theme.color.border.darker};
    }

    tfoot tr {
      border-top: ${({theme}) => theme.border.width.default} solid ${({theme}) => theme.color.border.darker};
    }
  }

  th {
    color: ${({theme}) => theme.color.text.lighter};
    font-weight: ${({theme}) => theme.font.weight.normal};
    text-align: left;
    vertical-align: bottom;
  }

  td,
  tbody th {
    padding: 0.25em;
    vertical-align: top;
  }
`;
