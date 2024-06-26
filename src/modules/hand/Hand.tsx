import {CSSProperties} from 'react';
import styled, {DefaultTheme} from 'styled-components';

import {transparentize} from '~/lib';

import {Finger, fingersList} from './types';

const RightHandPaths = ({onClick}: {onClick: Function}) => (
  <>
    <path
      className="hand"
      d="M33.2,132.7l-16.8-22.3c-6.7-11-4.8-20.6,3.5-27.7
	c8.9-7.6,20.8-5.1,28,3.4c2.2,2.7,9.3,11.5,18.5,22.8c15.3,18.9,36.5,45.2,51.1,63.1c3.3,4.2,7.6-0.4,6.1-3.1L78.1,85.4L65.2,61.7
	c-5.9-10.9-1-21,9.3-26.6c10.4-5.7,22-2.5,27.6,7.9c1.6,2.8,6.4,12.1,12.9,24.5c12.7,24.3,31.7,60.7,44.4,84.8
	c1.2,2,2.8,2.3,4.5,1.7c1.7-0.7,2.7-1.8,2-3.9l-24.6-84.3l-7.6-26.1c-3.1-10.6,2.9-21,13.5-24.1c10.9-3.2,21.4,2.9,24.4,13l8.1,26.5
	L205,138c0.8,2.8,2.2,3,3.7,2.8c2.9-1.1,2.7-2.2,2.7-3.8l1.1-49.4l0.5-23.7c0.1-11.8,8.3-20.5,17.4-20.7c11.3-0.3,18.2,7.7,19,18.5
	c0.5,7.3,1.2,16.5,1.8,26.2c1.7,25.2,3.5,52.7,3.5,52.7c1.5,22.8,7.6,38.4,14.8,53.6c7.1,15.2,15.5,30.1,20.4,50.7
	c2.8,11.5,3,23,11.6,37.8l8.1,13.9c8.4,14.3,7.9,29.9,1.9,42.9c-6,13.1-17,24-30.1,31.6c-12.9,7.6-27.9,11.8-42.3,10.6
	c-14.3-1.3-27.9-8.5-36.3-22.8l-16.6-28.4c-2.6-4.3-7.9-10.1-14.1-12.1c-9.1-2.9-16.8-2-26.1-2.3c-20.8-0.5-41.3-9.1-62.3-18.5
	c-14.3-6.4-28.9-13.1-43.9-17.8c-12.2-3.4-19.8-11.1-20.2-20.1c-0.3-9,7.5-18.1,18.1-21.4c8.5-2.5,16.5-3.4,24-3.2
	c14.3,0.4,26.9,4.7,37.7,8.8c2.3,0.9,5.6,1.3,6.7-0.1c-1.2-10.8-4.1-19.5-13.9-32.5L33.2,132.7z"
    />
    <path
      className="finger little-finger"
      onClick={() => onClick('little-finger')}
      d="M212.5,87.6l0.5-23.7c0.1-11.8,8.3-20.5,17.4-20.7c11.3-0.3,18.2,7.7,19,18.5c0.5,7.3,1.2,16.5,1.8,26.2
	c-5.7,3.1-12.2,4.9-19.2,4.9C224.9,92.8,218.2,90.9,212.5,87.6z"
    />
    <path
      className="finger ring-finger"
      onClick={() => onClick('ring-finger')}
      d="M151.3,67.1c-3.4,0-6.8-0.4-10-1.3l-7.6-26.1c-3.1-10.6,2.9-21,13.5-24.1c10.9-3.2,21.4,2.9,24.4,13
	l8.1,26.5C172.5,62.5,162.4,67.1,151.3,67.1z"
    />
    <path
      className="finger middle-finger"
      onClick={() => onClick('middle-finger')}
      d="M74.5,35.1c10.4-5.7,22-2.5,27.6,7.9c1.6,2.8,6.4,12.1,12.9,24.5c-7.1,10.8-19.3,18-33.3,18
	c-1.2,0-2.5-0.1-3.7-0.2L65.2,61.7C59.3,50.8,64.2,40.7,74.5,35.1z"
    />
    <path
      className="finger index-finger"
      onClick={() => onClick('index-finger')}
      d="M19.9,82.7c8.9-7.6,20.8-5.1,28,3.4c2.2,2.7,9.3,11.5,18.5,22.8c-5.7,13.1-18.3,22.6-33.2,23.8
	l-16.8-22.3C9.7,99.4,11.6,89.8,19.9,82.7z"
    />
    <path
      className="finger thumb"
      onClick={() => onClick('thumb')}
      d="M91.8,273.6c0,9-3,17.3-8.1,24c-14.3-6.4-28.9-13.1-43.9-17.8c-12.2-3.4-19.8-11.1-20.2-20.1
	c-0.3-9,7.5-18.1,18.1-21.4c8.5-2.5,16.5-3.4,24-3.2C79,239.4,91.8,255,91.8,273.6z"
    />
  </>
);

const LeftHandPaths = ({onClick}: {onClick: Function}) => (
  <>
    <path
      className="hand"
      d="M295.1,132.7l16.8-22.3c6.7-11,4.8-20.6-3.5-27.7
	c-8.9-7.6-20.8-5.1-28,3.4c-2.2,2.7-9.3,11.5-18.5,22.8c-15.3,18.9-36.5,45.2-51.1,63.1c-3.3,4.2-7.6-0.4-6.1-3.1l45.5-83.5
	l12.9-23.7c5.9-10.9,1-21-9.3-26.6c-10.4-5.7-22-2.5-27.6,7.9c-1.6,2.8-6.4,12.1-12.9,24.5c-12.7,24.3-31.7,60.7-44.4,84.8
	c-1.2,2-2.8,2.3-4.5,1.7c-1.7-0.7-2.7-1.8-2-3.9L187,65.8l7.6-26.1c3.1-10.6-2.9-21-13.5-24.1c-10.9-3.2-21.4,2.9-24.4,13l-8.1,26.5
	L123.3,138c-0.8,2.8-2.2,3-3.7,2.8c-2.9-1.1-2.7-2.2-2.7-3.8l-1.1-49.4l-0.5-23.7c-0.1-11.8-8.3-20.5-17.4-20.7
	c-11.3-0.3-18.2,7.7-19,18.5c-0.5,7.3-1.2,16.5-1.8,26.2c-1.7,25.2-3.5,52.7-3.5,52.7c-1.5,22.8-7.6,38.4-14.8,53.6
	c-7.1,15.2-15.5,30.1-20.4,50.7c-2.8,11.5-3,23-11.6,37.8l-8.1,13.9c-8.4,14.3-7.9,29.9-1.9,42.9c6,13.1,17,24,30.1,31.6
	c12.9,7.6,27.9,11.8,42.3,10.6c14.3-1.3,27.9-8.5,36.3-22.8l16.6-28.4c2.6-4.3,7.9-10.1,14.1-12.1c9.1-2.9,16.8-2,26.1-2.3
	c20.8-0.5,41.3-9.1,62.3-18.5c14.3-6.4,28.9-13.1,43.9-17.8c12.2-3.4,19.8-11.1,20.2-20.1c0.3-9-7.5-18.1-18.1-21.4
	c-8.5-2.5-16.5-3.4-24-3.2c-14.3,0.4-26.9,4.7-37.7,8.8c-2.3,0.9-5.6,1.3-6.7-0.1c1.2-10.8,4.1-19.5,13.9-32.5L295.1,132.7z"
    />
    <path
      className="finger little-finger"
      onClick={() => onClick('little-finger')}
      d="M115.8,87.6l-0.5-23.7
	c-0.1-11.8-8.3-20.5-17.4-20.7c-11.3-0.3-18.2,7.7-19,18.5c-0.5,7.3-1.2,16.5-1.8,26.2c5.7,3.1,12.2,4.9,19.2,4.9
	C103.4,92.8,110,90.9,115.8,87.6z"
    />
    <path
      className="finger ring-finger"
      onClick={() => onClick('ring-finger')}
      d="M177,67.1c3.4,0,6.8-0.4,10-1.3l7.6-26.1
	c3.1-10.6-2.9-21-13.5-24.1c-10.9-3.2-21.4,2.9-24.4,13l-8.1,26.5C155.8,62.5,165.9,67.1,177,67.1z"
    />
    <path
      className="finger middle-finger"
      onClick={() => onClick('middle-finger')}
      d="M253.8,35.1c-10.4-5.7-22-2.5-27.6,7.9
	c-1.6,2.8-6.4,12.1-12.9,24.5c7.1,10.8,19.3,18,33.3,18c1.2,0,2.5-0.1,3.7-0.2l12.9-23.7C269,50.8,264.1,40.7,253.8,35.1z"
    />
    <path
      className="finger index-finger"
      onClick={() => onClick('index-finger')}
      d="M308.4,82.7c-8.9-7.6-20.8-5.1-28,3.4
	c-2.2,2.7-9.3,11.5-18.5,22.8c5.7,13.1,18.3,22.6,33.2,23.8l16.8-22.3C318.6,99.4,316.7,89.8,308.4,82.7z"
    />
    <path
      className="finger thumb"
      onClick={() => onClick('thumb')}
      d="M236.5,273.6c0,9,3,17.3,8.1,24
	c14.3-6.4,28.9-13.1,43.9-17.8c12.2-3.4,19.8-11.1,20.2-20.1c0.3-9-7.5-18.1-18.1-21.4c-8.5-2.5-16.5-3.4-24-3.2
	C249.3,239.4,236.5,255,236.5,273.6z"
    />
  </>
);

type HandProps = {
  asIcon?: boolean;
  canSelect: boolean;
  className?: string;
  fingers: Finger[];
  onClick?: Function;
  side?: 'left' | 'right';
  style?: CSSProperties;
};

const fingerColor = (highlight: boolean = false, asIcon: boolean = false, theme: DefaultTheme): string => {
  if (!highlight) {
    return theme.color.transparent;
  }

  if (asIcon) {
    return theme.color.text.default;
  }

  return theme.color.primary.default;
};

const HandShape = styled.svg.attrs(() => ({
  className: 'hand-shape' as string,
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 328 400',
}))<Omit<HandProps, 'side'>>`
  .hand {
    fill: ${({theme}) => theme.color.background.default};
  }

  ${({canSelect, theme}) =>
    canSelect &&
    `
      /*
       * 1 - Make all clickable elements discoverable by highlighting them.
       */

      .hand:hover ~ .finger {
        fill: ${transparentize(theme.color.clickable.highlight, 79)}; /* 1 */
      }

      .finger {
        :hover {
          cursor: pointer;
          fill: ${transparentize(theme.color.clickable.highlight, 34)};
          stroke: ${transparentize(theme.color.clickable.default, 34)};
        }
      }
    `}

  ${({asIcon, fingers, theme}) =>
    fingersList.map(
      (f) => `
        .${f} {
          fill: ${fingerColor(fingers.includes(f), asIcon, theme)};
        }
      `
    )}
`;

export const Hand = ({
  asIcon = false,
  className = '',
  canSelect = false,
  fingers = [],
  onClick = () => {},
  side = 'right',
  style = {},
}: HandProps) => (
  <HandShape fingers={fingers} className={className} style={style} asIcon={asIcon} canSelect={canSelect}>
    {side === 'left' ? (
      <LeftHandPaths onClick={canSelect ? onClick : () => {}} />
    ) : (
      <RightHandPaths onClick={canSelect ? onClick : () => {}} />
    )}
  </HandShape>
);
