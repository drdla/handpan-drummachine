import styled from 'styled-components';

import {Hand} from '~/modules/hand';
import {Handpan} from '~/modules/handpan';

import {Box, GridLayout} from '~/components';
import BaseLayout from '~/components/templates/BaseLayout';

import {transparentize} from '~/lib';
import {size, spaceBetweenSelf} from '~/styles';

import {StepSequencer} from './StepSequencer';
import {TempoControl} from './TempoControl';
import {TransportButtons} from './TransportButtons';
import {VolumeControls} from './VolumeControls';

const mockActive: string[] = [];
const mockSteps = ['D3', null, null, null, 'E4', null, null, null, null, null, null, null, null, null, null, null];

const Transport = styled(TransportButtons)`
  grid-column-start: 2;
  grid-column-end: span 2;
  justify-content: center;
`;

const VolumeAndTempo = styled(Box)`
  justify-content: flex-end;

  > * {
    ${({theme}) => spaceBetweenSelf(theme.size.default as string, 'horizontal')}
  }
`;

const HandBase = styled(Hand)`
  max-height: 50%;
`;

const LeftHand = styled(HandBase).attrs(() => ({side: 'left'}))`
  stroke: ${transparentize('green', 55)};
  stroke-width: ${({theme}) => theme.size.default};
`;

const RightHand = styled(HandBase).attrs(() => ({side: 'right'}))`
  stroke: ${transparentize('red', 55)};
  stroke-width: ${({theme}) => theme.size.default};
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

export const Drummachine = () => (
  <BaseLayout>
    <Layout>
      <Transport />
      <VolumeAndTempo>
        <TempoControl />
        <VolumeControls />
      </VolumeAndTempo>
      <Box justifyContent="flex-end" alignItems="center" style={{gridArea: 'sidebarLeft'}}>
        <LeftHand />
      </Box>
      <InstrumentPreview>
        <Handpan active={mockActive} />
      </InstrumentPreview>
      <Box justifyContent="flex-start" alignItems="center" style={{gridArea: 'sidebarRight'}}>
        <RightHand />
      </Box>
      <Box style={{gridArea: 'footer'}}>
        <StepSequencer steps={mockSteps} />
      </Box>
    </Layout>
  </BaseLayout>
);
