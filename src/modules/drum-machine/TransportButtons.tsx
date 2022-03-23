import {size as polishedSize} from 'polished';
import {CSSProperties, memo, useCallback, useState} from 'react';
import styled, {ThemeSize} from 'styled-components';

import {Box} from '~/components';

import {size} from '~/styles';

import {useGlobalState} from '../global-state';

type TransportButtonsProps = {
  className?: string;
  style?: CSSProperties;
};

const Button = styled(Box)`
  ${polishedSize(size * 6)}

  align-items: center;
  border-radius: ${({theme}) => theme.border.radius.circle};
  border: ${({theme}) => theme.border.width.strong} solid ${({theme}) => theme.color.clickable.default};
  color: ${({theme}) => theme.color.clickable.default};
  cursor: pointer;
  justify-content: center;
  text-align: center;

  :hover {
    border-color: ${({theme}) => theme.color.clickable.highlight};
    color: ${({theme}) => theme.color.clickable.highlight};
  }

  svg {
    display: inline-block;
    fill: currentColor;
    height: ${({theme}) => theme.size.huge};
  }
`;

export const TransportButtons = memo<TransportButtonsProps>(({className, style}) => {
  const {isPlaying, togglePlayback} = useGlobalState(({isPlaying, togglePlayback}) => ({isPlaying, togglePlayback}));

  return (
    <Box className={className} style={style}>
      <Button onClick={togglePlayback}>
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
