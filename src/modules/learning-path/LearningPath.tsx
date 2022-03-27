import styled from 'styled-components/macro';

import {Box} from '~/components';

import {learningSteps} from './learningSteps';
import {LearningStep} from './LearningStep';

const ScrollContainer = styled(Box)`
  flex-wrap: wrap;
  gap: ${({theme}) => theme.size.default};
  overflow-x: hidden;
  overflow-y: scroll;
  padding: ${({theme}) => theme.size.default};
  min-width: 100%;
`;

export const LearningPath = () => {
  return (
    <div>
      <h1>LearningPath</h1>
      <ScrollContainer>
        {learningSteps.map((props, index) => (
          <LearningStep key={index} {...{...props, index}} />
        ))}
      </ScrollContainer>
    </div>
  );
};
