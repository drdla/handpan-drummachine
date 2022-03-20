export const aspectRatio = (ratio: string = '1/1'): string => {
  const [width, height] = ratio.split('/').map(parseFloat);

  return `
    height: 0 !important;
    padding-bottom: ${(1 / (width / height)) * 100}%;
  `;
};
