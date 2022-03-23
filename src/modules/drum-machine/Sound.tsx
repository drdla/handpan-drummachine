import {memo} from 'react';

import styled from 'styled-components/macro';
import {Box} from '~/components';
import {Hand} from '~/modules/hand';

import type {Step} from '~/modules/global-state';

type SoundProps = Step;

const Tone = styled.div`
  color: ${({theme}) => theme.color.text.default};
  font-size: ${({theme}) => theme.font.size.default};
  line-height: 1;
  padding-left: ${({theme}) => theme.size.small};
  white-space: nowrap;
`;

const Stroke = styled.div`
  color: ${({theme}) => theme.color.text.lighter};
  font-size: ${({theme}) => theme.font.size.default};
  line-height: 1;
  padding-left: ${({theme}) => theme.size.small};
  white-space: nowrap;
`;

const Wrapper = styled(Box)`
  background: ${({theme}) => theme.color.background.imageOverlay};
  border: ${({theme}) => theme.border.default};
  border-color: ${({theme}) => theme.color.border.lightest};
  border-radius: ${({theme}) => theme.border.radius.default};
  padding: ${({theme}) => theme.size.tiny} ${({theme}) => theme.size.small};

  .hand-shape {
    height: ${({theme}) => theme.size.large};

    .hand {
      fill: ${({theme}) => theme.color.background.white};
      stroke: ${({theme}) => theme.color.text.default};
      stroke-width: 6px;
    }
  }

  :hover {
    background: ${({theme}) => theme.color.background.clickable};
    border-color: ${({theme}) => theme.color.clickable.default};
  }
`;

const abbr = {
  'full stroke': 'full',
  'downstroke': 'down',
  'upstroke': 'up',
  'tap': 'tap',
};

export const Sound = memo(({tone, technique, velocity}: SoundProps) => (
  <Wrapper>
    <Hand side={technique?.hand} finger={technique?.finger} asIcon />
    <Box flexDirection="column" justifyContent="center">
      <Tone>{tone}</Tone>
      <Stroke>{abbr?.[technique?.stroke]}</Stroke>
    </Box>
  </Wrapper>
));
