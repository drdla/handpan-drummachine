import {borderRadius} from 'polished';
import {CSSProperties, memo, useCallback} from 'react';
import styled from 'styled-components/macro';

import {useGlobalState} from '~/modules/global-state';

import {Box, Icon} from '~/components';

import {i18n} from '~/lib';

type VolumeControlsProps = {
  className?: string;
  style?: CSSProperties;
};

const VolumeControl = styled(Box)<{volume: number}>`
  align-items: center;
  border-color: ${({theme}) => theme.color.border.lightest};
  border-style: solid;
  border-width: ${({theme}) => theme.border.width.default};
  cursor: pointer;
  height: ${({theme}) => theme.size.huge};
  justify-content: center;
  padding-left: ${({theme}) => theme.size.default};
  padding-right: ${({theme}) => theme.size.default};

  ${({theme, volume}) =>
    volume === 0
      ? `
      background: ${theme.color.background.lightest};
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.21);
      color: ${theme.color.text.lighter};
    `
      : `
      background: ${theme.color.transparent};
      color: ${theme.color.text.default};
    `};

  :hover {
    background: ${({theme}) => theme.color.background.clickable};
    border-color: ${({theme}) => theme.color.clickable.default};
    color: ${({theme}) => theme.color.clickable.default};
    z-index: ${({theme}) => theme.zIndex.elevated1};
  }
`;

const Container = styled(Box)`
  ${VolumeControl} {
    border-radius: 0;

    :first-child {
      ${({theme}) => borderRadius('left', theme.border.radius.large)}
    }

    :last-child {
      ${({theme}) => borderRadius('right', theme.border.radius.large)}
    }

    :not(:first-child) {
      margin-left: -1px;
    }
  }
`;

export const VolumeControls = memo<VolumeControlsProps>(({className, style}) => {
  const {changeVolume, volume} = useGlobalState(({changeVolume, volume}) => ({changeVolume, volume}));

  const handleVolumeChange = useCallback((category, value) => changeVolume(category, value), [volume]);

  return (
    <Container className={className} style={style}>
      <VolumeControl
        title={i18n.t('Volume')}
        onClick={() => handleVolumeChange('master', volume.master === 100 ? 0 : 100)}
        volume={volume.master}
      >
        <Icon
          svgPaths={
            <g>
              <path d="M8 10.5H3v9h5l10 10V.5zm13.7 1.3c1.8 1.8 1.8 4.6 0 6.4" />
              <path d="M23.1 10.4c2.5 2.5 2.5 6.7 0 9.2" />
              <path d="M24.5 9c3.3 3.3 3.3 8.7 0 12" />
            </g>
          }
          size="large"
        />
      </VolumeControl>
      <VolumeControl
        title={i18n.t('Handpan')}
        onClick={() => handleVolumeChange('music', volume.music === 100 ? 0 : 100)}
        volume={volume.music}
      >
        <Icon
          svgPaths={
            <g>
              <path d="M10 24.8v-16l15-6.5v18.5m-15-8.5 15-6M3 26.1c.3 1.3 2.1 1.9 4 1.5 1.9-.5 3.2-1.9 2.9-3.2-.3-1.3-2.1-1.9-4-1.5-1.9.5-3.2 1.9-2.9 3.2z" />
              <path d="M18 22.1c.3 1.3 2.1 1.9 4 1.5 1.9-.5 3.2-1.9 2.9-3.2-.3-1.3-2.1-1.9-4-1.5-1.9.5-3.2 1.9-2.9 3.2z" />
            </g>
          }
          size="large"
        />
      </VolumeControl>
      <VolumeControl
        title={i18n.t('Click')}
        onClick={() => handleVolumeChange('click', volume.click === 100 ? 0 : 100)}
        volume={volume.click}
      >
        <Icon
          svgPaths={
            <g>
              <path d="M25.8 28.5H4.2L9.8.5h11zm-19.6-10h17.6m-11-18V18m4-17.5v10m-3 13h3m-11 5v1m19-1v1m-8-11V17" />
              <circle cx="19.8" cy="7.5" r="2" />
              <path d="m20.8 5.5 2-4m-8.6 17 4.6-9" />
            </g>
          }
          size="large"
        />
      </VolumeControl>
    </Container>
  );
});
