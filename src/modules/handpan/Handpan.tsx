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
  mode: 'record' | 'playback';
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
    fill: ${({theme}) => transparentize(theme.color.primary.default, 34)};
    stroke: ${({theme}) => transparentize(theme.color.primary.default, 34)};
  }

  ${({mode, theme}) =>
    mode === 'record' &&
    `
      .handpan-element:hover {
        cursor: pointer;

        .playable-area {
          fill: ${transparentize(theme.color.clickable.default, 34)};
          stroke: ${transparentize(theme.color.clickable.default, 34)};
        }

        .unplayable-area {
          stroke: ${transparentize(theme.color.clickable.default, 34)};
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

  return (
    <Instrument mode={mode} className={className} style={style}>
      {HandpanPaths}
    </Instrument>
  );
};
