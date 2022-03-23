import {borderRadius} from 'polished';
import {CSSProperties, memo, useCallback} from 'react';
import styled from 'styled-components/macro';

import {useGlobalState} from '~/modules/global-state';

import {Box} from '~/components';

import {i18n} from '~/lib';

type VolumeControlsProps = {
  className?: string;
  style?: CSSProperties;
};

const VolumeControl = styled.button<{volume: number}>`
  border: ${({theme}) => theme.border.default};
  cursor: pointer;
  height: ${({theme}) => theme.size.huge};
  padding-left: ${({theme}) => theme.size.default};
  padding-right: ${({theme}) => theme.size.default};

  ${({volume}) => volume === 0 && 'text-decoration: line-through;'}
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
        onClick={() => handleVolumeChange('master', volume.master === 100 ? 0 : 100)}
        volume={volume.master}
      >
        {i18n.t('Volume')}
      </VolumeControl>
      <VolumeControl onClick={() => handleVolumeChange('music', volume.music === 100 ? 0 : 100)} volume={volume.music}>
        {i18n.t('Handpan')}
      </VolumeControl>
      <VolumeControl onClick={() => handleVolumeChange('click', volume.click === 100 ? 0 : 100)} volume={volume.click}>
        {i18n.t('Click')}
      </VolumeControl>
    </Container>
  );
});
