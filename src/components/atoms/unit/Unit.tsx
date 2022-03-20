import styled from 'styled-components/macro';

export const Unit = styled.span`
  color: ${({theme}) => theme.color.text.lighter};
  font-size: ${({theme}) => theme.font.size.inherit};
  font-weight: ${({theme}) => theme.font.weight.normal} !important;
  padding-left: 0.5ch;
  white-space: nowrap;
`;
