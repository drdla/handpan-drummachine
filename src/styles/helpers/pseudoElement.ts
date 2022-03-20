export const pseudoElement = (height: string = '1em', width: string = '1em', content: string = '" "') => `
  content: ${content};
  display: block;
  height: ${height};
  width: ${width};
`;
