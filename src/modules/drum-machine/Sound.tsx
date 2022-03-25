import {memo} from 'react';
import styled from 'styled-components/macro';

import type {Step} from '~/modules/global-state';
import {Hand} from '~/modules/hand';

import {Box} from '~/components';

type SoundProps = Step;

const Tone = styled.div`
  color: ${({theme}) => theme.color.text.default};
  font-size: ${({theme}) => theme.font.size.default};
  line-height: 1;
  white-space: nowrap;
`;

const Stroke = styled.div`
  color: ${({theme}) => theme.color.text.lighter};
  font-size: ${({theme}) => theme.font.size.default};
  line-height: 1;
  white-space: nowrap;
`;

const Wrapper = styled(Box)`
  background: ${({theme}) => theme.color.background.imageOverlay};
  border: ${({theme}) => theme.border.default};
  border-color: ${({theme}) => theme.color.border.lightest};
  border-radius: ${({theme}) => theme.border.radius.default};
  padding: ${({theme}) => theme.size.tiny} ${({theme}) => theme.size.small};
  width: 100%;

  .hand-shape {
    height: ${({theme}) => theme.size.large};

    .hand {
      fill: ${({theme}) => theme.color.background.white};
      stroke: ${({theme}) => theme.color.text.default};
      stroke-width: 6px;
    }
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
    {technique?.hand === 'left' && <Hand side="left" fingers={[technique?.finger]} canSelect={false} asIcon />}
    <Box
      flexDirection="column"
      justifyContent="center"
      style={{[`padding${technique?.hand === 'left' ? 'Left' : 'Right'}`]: '7px'}}
    >
      <Tone>{tone}</Tone>
      <Stroke>{technique?.stroke && abbr?.[technique.stroke]}</Stroke>
    </Box>
    {technique?.hand === 'right' && <Hand side="right" fingers={[technique?.finger]} canSelect={false} asIcon />}
  </Wrapper>
));
