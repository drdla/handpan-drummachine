import {borderRadius} from 'polished';
import {CSSProperties, memo} from 'react';
import styled from 'styled-components/macro';

import {useGlobalState} from '~/modules/global-state';
import type {Step as StepType} from '~/modules/global-state';

import {Box} from '~/components';
import {Sound} from './Sound';

import {transparentize} from '~/lib';

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
  border: ${({theme}) => theme.border.default};
  color: ${({theme}) => theme.color.text.lightest};
  font-size: ${({theme}) => theme.font.size.huge};
  flex: 1;
  justify-content: center;

  & + & {
    margin-left: -${({theme}) => theme.border.width.default};
  }

  ${({active, theme}) =>
    active === 'true' &&
    `
        background: ${theme.color.primary.lightest};
        box-shadow: 0 0 1px ${theme.size.tiny} ${transparentize(theme.color.primary.default, 55)};
        color: ${theme.color.text.default};
      `}

  :hover {
    background: ${({theme}) => theme.color.background.clickable};
    border-color: ${({theme}) => theme.color.clickable.default};
    color: ${({theme}) => theme.color.text.default};
    cursor: pointer;
    z-index: ${({theme}) => theme.zIndex.elevated1};
  }
`);

const Container = styled(Box)`
  border-radius: ${({theme}) => theme.border.radius.large};
  margin-left: ${({theme}) => theme.size.huge};
  margin-right: ${({theme}) => theme.size.huge};
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
  const {currentStep, isPlaying, steps} = useGlobalState(({currentStep, isPlaying, steps}) => ({
    currentStep,
    isPlaying,
    steps,
  }));

  const isActive = (i: number) => (isPlaying && currentStep === i ? 'true' : 'false');

  return (
    <Container className={className} style={style}>
      {steps.map((step: null | StepType, i: number) => (
        <Step key={i} separate={(i + 1) % 4 === 0 ? 'true' : 'false'} active={isActive(i)}>
          <StepNumber>{i + 1}</StepNumber>
          {step && <Sound {...step} />}
        </Step>
      ))}
    </Container>
  );
};
