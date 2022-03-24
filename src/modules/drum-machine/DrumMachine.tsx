import {useEffect, useRef, useState} from 'react';
import styled from 'styled-components/macro';
import {Song, Track, Instrument, Effect} from 'reactronica';

import {Hand} from '~/modules/hand';
import {Handpan} from '~/modules/handpan';

import {Box, GridLayout} from '~/components';
import BaseLayout from '~/components/templates/BaseLayout';

import A1 from '~/assets/samples/A1.mp3';
import {percentToDecibel, transparentize} from '~/lib';
import {size} from '~/styles';

import {StepSequencer} from './StepSequencer';
import {TempoControl} from './TempoControl';
import {TransportButtons} from './TransportButtons';
import {VolumeControls} from './VolumeControls';
import {Step, useGlobalState} from '../global-state';

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
  const {currentStep, isPlaying, mode, setStepIndex, steps, tempo, volume} = useGlobalState(
    ({currentStep, isPlaying, mode, setStepIndex, steps, tempo, volume}) => ({
      currentStep,
      isPlaying,
      mode,
      setStepIndex,
      steps,
      tempo,
      volume,
    })
  );

  const mapStepData = (steps: Step[]) =>
    steps.map((s) => {
      if (s === null) {
        return null;
      }

      return {
        name: s?.tone?.replace('-', ''), // TODO: it _should_ accept midi note names, but it doesn't
        // velocity: s?.velocity,
      };
    });
  const mapFingers = (hand: 'left' | 'right') => {
    const t = steps[currentStep]?.technique;

    if (t?.hand && t?.hand === hand) {
      return t.finger;
    }
  };

  return (
    <BaseLayout>
      <Song bpm={tempo} isPlaying={isPlaying}>
        <Track
          steps={mapStepData(steps as Step[])}
          volume={percentToDecibel(volume.music) || -100}
          onStepPlay={(step, i) => {
            setStepIndex(i);
          }}
        >
          <Instrument
            type="sampler"
            samples={{
              C3: A1,
              D3: A1,
              E3: A1,
            }}
            // notes={[{name: 'C3'}]}
          />
        </Track>
      </Song>
      <Layout>
        <Transport flexDirection="column" alignItems="center" justifyContent="center">
          <TransportButtons />
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
          <LeftHand finger={mapFingers('left')} />
        </Box>
        <InstrumentPreview>
          <Handpan active={steps[currentStep] ? ['Tone1'] : undefined} mode={mode} />
        </InstrumentPreview>
        <Box justifyContent="flex-start" alignItems="center" style={{gridArea: 'sidebarRight'}}>
          <RightHand finger={mapFingers('right')} />
        </Box>
        <Box style={{gridArea: 'footer'}}>
          <StepSequencer />
        </Box>
      </Layout>
    </BaseLayout>
  );
};
