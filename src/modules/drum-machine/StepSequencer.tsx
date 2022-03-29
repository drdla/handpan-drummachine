import {borderRadius} from 'polished';
import {CSSProperties, memo} from 'react';
import styled from 'styled-components/macro';

import {useGlobalState} from '~/modules/global-state';
import type {Step as StepType} from '~/modules/global-state';

import {Box} from '~/components';

import {transparentize} from '~/lib';
import {spaceBetweenSelf} from '~/styles';

import {Sound} from './Sound';

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
  background: ${({theme}) => theme.color.background.white};
  border: ${({theme}) => theme.border.default};
  color: ${({theme}) => theme.color.text.lightest};
  font-size: ${({theme}) => theme.font.size.huge};
  flex: 1;
  justify-content: center;

  & + & {
    margin-left: -${({theme}) => theme.border.width.default};
  }

  ${({separate, theme}) =>
    separate === 'true' &&
    `
      border-left-color: ${theme.color.background.darkest};
    `}

  ${({active, theme}) =>
    active === 'true' &&
    `
      background: ${theme.color.primary.lightest};
      box-shadow: 0 0 1px ${theme.size.tiny} ${transparentize(theme.color.primary.default, 55)};
      color: ${theme.color.text.default};
      z-index: ${theme.zIndex.elevated1};
    `}
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

const SoundWrapper = styled(Box)<{selected: boolean}>`
  ${spaceBetweenSelf('tiny')}

  :hover > ${Box} {
    background: ${({theme}) => theme.color.background.clickable};
    border-color: ${({theme}) => theme.color.clickable.default};
    cursor: pointer;
  }

  ${({selected, theme}) =>
    selected &&
    `
      > ${Box} {
        background: ${theme.color.primary.lightest} !important;
        border-color: ${theme.color.primary.default} !important;
      }
    `}
`;

// TODO: The name is not actually correct... what is the first step?
const isFirstBeat = (stepIndex: number, signature: string = '4/4'): boolean =>
  stepIndex % parseInt(signature.split('/')[0], 10) === 0 && stepIndex !== 0;

export const StepSequencer = ({className = '', style = {}}: StepSequencerProps) => {
  const {currentStep, selectSound, selectedSound, steps} = useGlobalState(
    ({currentStep, selectSound, selectedSound, steps}) => ({
      currentStep,
      selectSound,
      selectedSound,
      steps,
    })
  );

  const isActive = (i: number) => (currentStep === i ? 'true' : 'false');

  return (
    <Container className={className} style={style}>
      {steps.map((step: null | StepType | StepType[], i: number) => {
        const stepz = (Array.isArray(step) ? step : [step]).filter(Boolean);

        return (
          <Step key={i} separate={isFirstBeat(i, '4/4') ? 'true' : 'false'} active={isActive(i)}>
            <StepNumber>{i + 1}</StepNumber>
            <Box flexDirection="column">
              {stepz.map(
                (s, ii) =>
                  s && (
                    <SoundWrapper key={ii} onClick={() => selectSound(s.id)} selected={selectedSound === s.id}>
                      <Sound {...s} />
                    </SoundWrapper>
                  )
              )}
            </Box>
          </Step>
        );
      })}
    </Container>
  );
};
