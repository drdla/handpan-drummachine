import {CSSProperties, memo, useCallback, useState} from 'react';
import {borderRadius} from 'polished';
import styled from 'styled-components';

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
`;

const Step = styled(Box)<StepProps>`
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
`;

const Container = styled(Box)`
  border: ${({theme}) => theme.border.default};
  border-radius: ${({theme}) => theme.border.radius.large};
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

export const StepSequencer = ({className = '', steps = [], style = {}}: StepSequencerProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const handleUpdateStep = useCallback(setActiveStep, []);

  // setInterval(() => {
  //   console.log('activeStep', activeStep);
  //   const nextStep = (activeStep + 1) % steps.length;
  //   console.log('nextStep', nextStep);
  //   handleUpdateStep(nextStep);
  // }, 1000);

  return (
    <Container className={className} style={style}>
      {steps.map((step, i) => (
        <Step key={i} separate={(i + 1) % 4 === 0 ? 'true' : 'false'} active={activeStep === i ? 'true' : 'false'}>
          <StepNumber>{i + 1}</StepNumber>
          {step}
        </Step>
      ))}
    </Container>
  );
};
