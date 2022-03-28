import {Link} from 'react-router-dom';
import styled from 'styled-components/macro';

import type {LearningStep as LearningStepType} from './learningSteps';

const Step = styled(Link)`
  background: ${({theme}) => theme.color.background.imageOverlay};
  border-radius: ${({theme}) => theme.border.radius.large};
  box-shadow: ${({theme}) => theme.boxShadow.separateFromBelow};
  display: flex;
  flex: 0 20%;
  padding: 0;
  color: ${({theme}) => theme.color.text.default};
  flex-direction: column;
  justify-content: center;
  padding: ${({theme}) => theme.size.default};

  h2 {
    margin-bottom: ${({theme}) => theme.size.small};
    text-align: center;
  }
`;

type Props = LearningStepType;

export const LearningStep = ({details, id, title}: Props) => (
  <Step to={`/practice/${id}`}>
    <h2>{title}</h2>
    <span>{details}</span>
  </Step>
);
