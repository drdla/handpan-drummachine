import {css} from 'styled-components/macro';

export const links = css`
  a {
    color: ${({theme}) => theme.color.clickable.default};
    padding: ${({theme}) => theme.size.small} ${({theme}) => theme.size.default};

    &,
    :hover,
    :focus,
    :active {
      cursor: pointer;
      text-decoration: none;
    }

    :hover,
    :focus,
    :active {
      color: ${({theme}) => theme.color.clickable.highlight};
    }

    > * {
      display: inline-block;
      vertical-align: middle;
    }

    svg {
      fill: currentColor;
      height: 24px;
      margin-right: ${({theme}) => theme.size.small};
      width: 24px;
    }
  }
`;
