import {css} from 'styled-components/macro';

export const headings = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
  }

  h1 {
    font-size: ${({theme}) => theme.font.size.huge};
  }

  h2 {
    font-size: ${({theme}) => theme.font.size.large};
  }

  h3 {
    font-weight: ${({theme}) => theme.font.weight.bold};
    padding-bottom: ${({theme}) => theme.size.small};
    padding-top: ${({theme}) => theme.size.small};
  }

  h4 {
    font-weight: ${({theme}) => theme.font.weight.bold};
  }
`;
