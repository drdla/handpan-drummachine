import {Instrument, Song, Track} from 'reactronica';
import styled from 'styled-components/macro';

import {Step, Steps, useGlobalState} from '~/modules/global-state';
import {Finger, Hand} from '~/modules/hand';
import {Handpan} from '~/modules/handpan';

import {Box, GridLayout} from '~/components';
import BaseLayout from '~/components/templates/BaseLayout';

import A1 from '~/assets/samples/A1.mp3';
import ClickHigh from '~/assets/samples/click--high.mp3';
import ClickLow from '~/assets/samples/click--low.mp3';
import {percentToDecibel, transparentize} from '~/lib';
import {size} from '~/styles';

import {StepSequencer} from './StepSequencer';
import {TempoControl} from './TempoControl';
import {TransportButtons} from './TransportButtons';
import {VolumeControls} from './VolumeControls';

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

  const pickStepValues = (step: Step) => {
    const isQuietStroke = step?.technique?.stroke && ['tap', 'upstroke'].includes(step?.technique?.stroke);
    const velocity = (step?.velocity || 1) * (isQuietStroke ? 0.2 : 1);

    return {
      name: step?.tone,
      velocity,
    };
  };
  const mapStepData = (steps: Steps) =>
    steps.map((s) => {
      if (s === null) {
        return null;
      }

      const ss = (Array.isArray(s) ? s : [s]).filter(Boolean).map(pickStepValues);

      return ss;
    });

  const activeElements = (step: Step | Step[]) => {
    if (!step) {
      return [];
    }

    const ss = (Array.isArray(step) ? step : [step]).filter(Boolean).map((step) => step?.tone);

    return ss;
  };

  const mapFingers = (hand: 'left' | 'right'): [] | Finger[] => {
    const step = steps[currentStep] as Step | Step[];

    if (!step) {
      return [];
    }

    const cur = Array.isArray(step) ? step : [step];

    return cur
      .filter((cs) => cs?.technique?.hand === hand)
      .map((cs) => cs?.technique?.finger)
      .filter(Boolean);
  };

  return (
    <Song
      bpm={tempo}
      isPlaying={isPlaying}
      volume={percentToDecibel(volume.master) || undefined}
      isMuted={percentToDecibel(volume.master) === null}
    >
      <BaseLayout>
        <Track
          steps={mapStepData(steps as Steps)}
          volume={percentToDecibel(volume.music) || undefined}
          mute={percentToDecibel(volume.music) === null}
          onStepPlay={(_, i) => setStepIndex(i)}
        >
          <Instrument
            type="sampler"
            samples={{
              'C-4': A1,
              'D-4': A1,
              'E-4': A1,
            }}
            onLoad={() => {
              console.log('Samples loaded');
            }}
          />
        </Track>
        <Track
          steps={[
            {name: 'C-1', velocity: 0.7},
            {name: 'D-1', velocity: 0.7},
            {name: 'D-1', velocity: 0.7},
            {name: 'D-1', velocity: 0.7},
          ]}
          volume={percentToDecibel(volume.click) || undefined}
          mute={percentToDecibel(volume.click) === null}
        >
          <Instrument
            type="sampler"
            samples={{
              'C-1': ClickHigh,
              'D-1': ClickLow,
            }}
          />
        </Track>

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
            <LeftHand fingers={mapFingers('left')} />
          </Box>
          <InstrumentPreview>
            <Handpan active={activeElements(steps[currentStep] || [])} mode={mode} />
          </InstrumentPreview>
          <Box justifyContent="flex-start" alignItems="center" style={{gridArea: 'sidebarRight'}}>
            <RightHand fingers={mapFingers('right')} />
          </Box>
          <Box style={{gridArea: 'footer'}}>
            <StepSequencer />
          </Box>
        </Layout>
      </BaseLayout>
    </Song>
  );
};
