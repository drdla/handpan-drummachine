import {CSSProperties, ReactNode} from 'react';
import styled from 'styled-components';

import {transparentize} from '~/lib';

import {SelaAmaraD} from './variants';

type HandpanVariant = 'SelaAmaraD';

export type activeHandpanElements = {
  active?: string[];
};

type HandpanProps = {
  className?: string;
  mode?: 'playback' | 'record';
  variant?: HandpanVariant;
  style?: CSSProperties;
} & activeHandpanElements;

const Instrument = styled(({mode, ...rest}) => <svg {...rest} />).attrs(({className, style}) => ({
  className,
  style,
  viewBox: '0 0 681.1 681.1',
  xmlns: 'http://www.w3.org/2000/svg',
}))`
  fill: ${({theme}) => theme.color.background.darkest};
  stroke: ${({theme}) => transparentize(theme.color.border.default, 74)};
  stroke-width: ${({theme}) => theme.border.width.strong};

  .handpan-element.active .playable-area {
    fill: ${({theme}) => theme.color.primary.default};
    stroke: ${({theme}) => theme.color.primary.default};
  }

  ${({mode, theme}) =>
    mode === 'record' &&
    `
      .handpan-element:hover {
        cursor: pointer;

        .playable-area {
          fill: ${theme.color.clickable.default};
          stroke: ${theme.color.clickable.default};
        }

        .unplayable-area {
          stroke: ${theme.color.clickable.default};
        }
      }
    `}
`;

export const Handpan = ({
  active = [],
  className = '',
  mode = 'playback',
  variant = 'SelaAmaraD',
  style = {},
}: HandpanProps) => {
  let HandpanPaths: ReactNode;

  switch (variant) {
    case 'SelaAmaraD':
    default:
      HandpanPaths = <SelaAmaraD active={active} />;
  }

  return <Instrument mode={mode}>{HandpanPaths}</Instrument>;
};
