import {CSSProperties, useCallback, useState} from 'react';
import styled from 'styled-components';

import {useGlobalState} from '~/modules/global-state';

import {Box, Unit} from '~/components';

import {i18n} from '~/lib';
import {triangle} from '~/styles';

type TempoControlProps = {
  className?: string;
  style?: CSSProperties;
};

const StepperButton = styled.button<{direction: 'up' | 'down'}>`
  background: transparent;
  border: 0;
  color: ${({theme}) => theme.color.clickable.default};
  cursor: pointer;

  :hover {
    color: ${({theme}) => theme.color.clickable.highlight};
  }

  div {
    ${({direction}) => triangle(direction, 'currentcolor', '.8em')}
    ${({direction}) => (direction === 'down' ? 'transform: translateY(10%);' : 'transform: translateY(-10%);')}
    position: relative;
  }
`;

const Tempo = styled(Box)`
  font-size: ${({theme}) => theme.font.size.huge};
  padding-left: ${({theme}) => theme.size.small};
  padding-right: ${({theme}) => theme.size.small};
  user-select: none;
`;

export const TempoControl = ({className, style}: TempoControlProps) => {
  const {changeTempo, tempo} = useGlobalState(({changeTempo, tempo}) => ({changeTempo, tempo}));

  const handleTempoIncrease = useCallback(() => changeTempo(10), [tempo]);
  const handleTempoDecrease = useCallback(() => changeTempo(-10), [tempo]);

  return (
    <Box className={className} style={style}>
      <Tempo alignItems="center">
        <div>
          <span>{tempo}</span>
          <Unit>{i18n.t('bpm')}</Unit>
        </div>
      </Tempo>
      <Box flexDirection="column">
        <StepperButton onClick={handleTempoIncrease} direction="up">
          <div />
        </StepperButton>
        <StepperButton onClick={handleTempoDecrease} direction="down">
          <div />
        </StepperButton>
      </Box>
    </Box>
  );
};
