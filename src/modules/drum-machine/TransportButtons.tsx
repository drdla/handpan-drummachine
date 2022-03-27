import {size as polishedSize} from 'polished';
import {CSSProperties, memo} from 'react';
import {useKeyPressEvent} from 'react-use';
import styled from 'styled-components/macro';

import {Box} from '~/components';

import {size} from '~/styles';

import {useGlobalState} from '../global-state';

type TransportButtonsProps = {
  className?: string;
  style?: CSSProperties;
};

const Button = styled(Box)<{disabled: boolean}>`
  ${polishedSize(size * 6)}

  align-items: center;
  border-radius: ${({theme}) => theme.border.radius.circle};
  border: ${({theme}) => theme.border.width.strong} solid
    ${({disabled, theme}) => (disabled ? theme.color.text.lighter : theme.color.clickable.default)};
  color: ${({disabled, theme}) => (disabled ? theme.color.text.lighter : theme.color.clickable.default)};
  cursor: ${({disabled}) => (disabled ? 'not-allowed' : 'pointer')};
  justify-content: center;
  text-align: center;

  ${({disabled, theme}) =>
    !disabled &&
    `
      :hover {
        border-color: ${theme.color.clickable.highlight};
        color: ${theme.color.clickable.highlight};
      }
  `};

  svg {
    display: inline-block;
    fill: currentColor;
    height: ${({theme}) => theme.size.huge};
  }
`;

const spacebar = ' ';

export const TransportButtons = memo<TransportButtonsProps>(({className, style}) => {
  const {isReady, isPlaying, togglePlayback} = useGlobalState(({isReady, isPlaying, togglePlayback}) => ({
    isReady,
    isPlaying,
    togglePlayback,
  }));
  useKeyPressEvent(spacebar, () => isReady && togglePlayback());
  useKeyPressEvent('ArrowRight', () => console.log('Go to next step'));
  useKeyPressEvent('ArrowLeft', () => console.log('Go to previous step'));

  return (
    <Box className={className} style={style}>
      <Button onClick={() => isReady && togglePlayback()} disabled={!isReady}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
          {isPlaying ? (
            <path d="M24,25H6c-0.6,0-1-0.4-1-1V6c0-0.6,0.4-1,1-1h18c0.6,0,1,0.4,1,1v18C25,24.6,24.6,25,24,25z" />
          ) : (
            <path d="M26.5,15.8l-16.4,13c-0.6,0.5-1.6,0.1-1.6-0.8V2c0-0.8,1-1.3,1.6-0.8l16.4,13C27,14.6,27,15.4,26.5,15.8z" />
          )}
        </svg>
      </Button>
    </Box>
  );
});
