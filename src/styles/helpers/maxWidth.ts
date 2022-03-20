import {centerMX} from '../mixins/center';

const defaultWidth = '1280px';

export const maxWidth = (width: string | number = defaultWidth, center: boolean = true): string => {
  const mw = typeof width === 'number' ? `${width}px` : width;

  return `
    ${center && centerMX}
    max-width: ${mw};
    width: 100%;
  `;
};
