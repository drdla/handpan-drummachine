import {Link} from 'react-router-dom';
import styled from 'styled-components/macro';

import {Box} from '~/components';

import type {LearningStep as LearningStepType} from './learningSteps';

const Details = styled(Box)`
  color: ${({theme}) => theme.color.text.default};
  flex-direction: column;
  justify-content: center;
  padding: ${({theme}) => theme.size.default};
`;

const Number = styled(Box)`
  align-items: center;
  border-right: ${({theme}) => theme.border.default};
  color: ${({theme}) => theme.color.text.lighter};
  font-size: ${({theme}) => theme.font.size.huge};
  justify-content: center;
  padding: ${({theme}) => theme.size.default};
  width: 6rem;
`;

const Step = styled(Link)`
  background: ${({theme}) => theme.color.background.white};
  border: ${({theme}) => theme.border.default};
  border-radius: ${({theme}) => theme.border.radius.large};
  display: flex;
  padding: 0;
`;

type Props = LearningStepType & {index: number};

export const LearningStep = ({details, id, index, title}: Props) => (
  <Step to={`/practice/${id}`}>
    {/* <Number>{index + 1}</Number> */}
    <Details>
      <h2>{title}</h2>
      <span>{details}</span>
    </Details>
  </Step>
);
