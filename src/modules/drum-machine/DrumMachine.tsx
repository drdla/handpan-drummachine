import {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {Sampler} from 'tone';

import {Hand} from '~/modules/hand';
import {Handpan} from '~/modules/handpan';

import {Box, GridLayout} from '~/components';
import BaseLayout from '~/components/templates/BaseLayout';

import A1 from '~/assets/samples/A1.mp3';
import {transparentize} from '~/lib';
import {size} from '~/styles';

import {StepSequencer} from './StepSequencer';
import {TempoControl} from './TempoControl';
import {TransportButtons} from './TransportButtons';
import {VolumeControls} from './VolumeControls';

const mockActive: string[] = ['Tone6', 'Tone3'];

const Transport = styled(Box)`
  grid-column-start: 2;
  grid-column-end: span 2;
`;

const VolumeAndTempo = styled(Box)`
  justify-content: flex-end;

  > div + div {
    margin-left: ${({theme}) => theme.size.large};
  }
`;

const HandBase = styled(Hand)`
  max-height: 50%;
`;

const LeftHand = styled(HandBase).attrs(() => ({side: 'left'}))`
  /* .hand {
    stroke: ${transparentize('green', 55)};
    stroke-width: ${({theme}) => theme.size.default};
  } */
`;

const RightHand = styled(HandBase).attrs(() => ({side: 'right'}))`
  /* .hand {
    stroke: ${transparentize('red', 55)};
    stroke-width: ${({theme}) => theme.size.default};
  } */
`;

const InstrumentPreview = styled(Box)`
  grid-area: main;
  align-items: center;
  justify-content: center;

  svg {
    filter: drop-shadow(1px 1px 6px rgba(0, 0, 0, 0.34));
    max-height: 60vh;
  }
`;

const Layout = styled(GridLayout).attrs(() => ({
  columns: 4,
  rows: 3,
}))`
  grid-template-areas:
    'header header header header'
    'sidebarLeft main main sidebarRight'
    'footer footer footer footer';
  grid-template-rows: ${size * 6}px auto ${size * 12}px;
  flex: 1;
  padding: ${({theme}) => theme.size.default};
`;

export const DrumMachine = () => {
  const [isLoaded, setLoaded] = useState(false);
  const sampler = useRef(null);

  useEffect(() => {
    // https://github.com/Tonejs/Tone.js/wiki/Using-Tone.js-with-React-React-Typescript-or-Vue#react--typescript-caveats-typing-hooks-or-components-with-typescript-demo
    sampler.current = new Sampler(
      {A1},
      {
        onload: () => setLoaded(true),
      }
    ).toDestination();
  }, []);

  const handleClick = () => {
    sampler.current.triggerAttack('A1');
  };

  return (
    <BaseLayout>
      <Layout>
        <Transport flexDirection="column" alignItems="center" justifyContent="center">
          <TransportButtons />
          <button onClick={handleClick} disabled={!isLoaded}>
            start
          </button>
        </Transport>
        <VolumeAndTempo>
          <Box flexDirection="column" alignItems="center" justifyContent="center">
            <TempoControl />
          </Box>
          <Box flexDirection="column" alignItems="center" justifyContent="center">
            <VolumeControls />
          </Box>
        </VolumeAndTempo>
        <Box justifyContent="flex-end" alignItems="center" style={{gridArea: 'sidebarLeft'}}>
          <LeftHand finger="thumb" />
        </Box>
        <InstrumentPreview>
          <Handpan active={mockActive} mode="record" />
        </InstrumentPreview>
        <Box justifyContent="flex-start" alignItems="center" style={{gridArea: 'sidebarRight'}}>
          <RightHand finger="index-finger" />
        </Box>
        <Box style={{gridArea: 'footer'}}>
          <StepSequencer />
        </Box>
      </Layout>
    </BaseLayout>
  );
};
