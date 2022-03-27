import {useCallback, useState} from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components/macro';

import {DrumMachine} from '~/modules/drum-machine';

import {Box} from '~/components';

import {pinTopLeft} from '~/styles';

const VideoPlayer = styled(Box)<{collapsed: boolean}>`
  ${pinTopLeft}

  align-items: center;
  aspect-ratio: 16/9;
  background: ${({theme}) => theme.color.background.darkest};
  justify-content: center;
  padding: ${({collapsed, theme}) => (collapsed ? 0 : theme.size.default)};
  transform-origin: 0 0;
  transition: all ${({theme}) => theme.transition.time.medium} ${({theme}) => theme.transition.style.dynamic}
    ${({theme}) => theme.transition.time.slow};
  z-index: ${({collapsed, theme}) => (collapsed ? theme.zIndex.base : theme.zIndex.overlaid1)};
  width: 100%;

  ${({collapsed}) =>
    collapsed &&
    `
      transform: scale(10%);
      transition-delay: 0;
    `}
`;

export const Practice = () => {
  const [collapsed, toggleVideoPlayer] = useState(false);
  const handlePlayback = useCallback(
    (event: 'start' | 'stop' | 'end') => toggleVideoPlayer(['stop', 'end'].includes(event)),
    []
  );

  const videoId = '4Qp7uI-ZNl8';

  return (
    <div>
      <VideoPlayer collapsed={collapsed} onClick={() => toggleVideoPlayer(!collapsed)}>
        <YouTube
          videoId={videoId}
          id="video-player" // defaults -> null
          // className={string} // defaults -> null
          // containerClassName={string} // defaults -> ''
          // title={string} // defaults -> null
          opts={{
            height: '780',
            width: '1280',
          }}
          // onReady={func} // defaults -> noop
          onPlay={() => handlePlayback('start')}
          onPause={() => handlePlayback('stop')}
          onEnd={() => handlePlayback('end')}
          // onError={func} // defaults -> noop
          // onStateChange={func} // defaults -> noop
          // onPlaybackRateChange={func} // defaults -> noop
          // onPlaybackQualityChange={func} // defaults -> noop
        />
      </VideoPlayer>
      <DrumMachine />
    </div>
  );
};
