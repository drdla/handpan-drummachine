import {borderRadius} from 'polished';
import {CSSProperties, memo, useCallback, useState} from 'react';
import styled from 'styled-components/macro';

import {useGlobalState} from '~/modules/global-state';
import type {Step as StepType} from '~/modules/global-state';

import {Box} from '~/components';

type SequencerStep = null | string;

type StepSequencerProps = {
  className?: string;
  steps?: SequencerStep[];
  style?: CSSProperties;
};

type StepProps = {
  active: 'true' | 'false'; // FIXME
  separate: 'true' | 'false'; // FIXME
};

const StepNumber = styled.span`
  color: ${({theme}) => theme.color.text.lighter};
  font-size: ${({theme}) => theme.font.size.small};
  position: absolute;
  top: ${({theme}) => theme.size.default};
  user-select: none;
`;

const Step = memo(styled(Box)<StepProps>`
  align-items: center;
  color: ${({theme}) => theme.color.text.lightest};
  font-size: ${({theme}) => theme.font.size.huge};
  flex: 1;
  justify-content: center;

  & + & {
    border-left: ${({theme}) => theme.border.default};
  }

  ${({active, theme}) =>
    active === 'true'
      ? `
        background: ${theme.color.background.clickable};
        color: ${theme.color.text.default};
      `
      : null}
`);

const Container = styled(Box)`
  border: ${({theme}) => theme.border.default};
  border-radius: ${({theme}) => theme.border.radius.large};
  margin-left: calc(${({theme}) => theme.size.default} * 8);
  margin-right: calc(${({theme}) => theme.size.default} * 8);
  width: 100%;

  > * {
    &:first-child {
      ${({theme}) => borderRadius('left', theme.border.radius.largeInner)}
    }

    &:last-child {
      ${({theme}) => borderRadius('right', theme.border.radius.largeInner)}
    }
  }
`;

export const StepSequencer = ({className = '', style = {}}: StepSequencerProps) => {
  const {currentStep, isPlaying, setNextStep, steps, tempo} = useGlobalState(
    ({currentStep, isPlaying, setNextStep, steps, tempo}) => ({
      currentStep,
      isPlaying,
      setNextStep,
      steps,
      tempo,
    })
  );

  if (isPlaying) {
    const stepDuration = ((tempo / 60) * 1000) / 4; // For 4/4 signature
    console.log('stepDuration', stepDuration);
    setInterval(() => {
      setNextStep();
    }, stepDuration);
  }

  return (
    <Container className={className} style={style}>
      {steps.map((step: null | StepType, i: number) => (
        <Step key={i} separate={(i + 1) % 4 === 0 ? 'true' : 'false'} active={currentStep === i ? 'true' : 'false'}>
          <StepNumber>{i + 1}</StepNumber>
          {step}
        </Step>
      ))}
    </Container>
  );
};
