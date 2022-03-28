import styled from 'styled-components/macro';

import {Box} from '~/components';

import {LearningStep} from './LearningStep';
import {learningSteps} from './learningSteps';

const Label = styled.h3`
  /*
   * 1 - Rotate label and align it vertically centered at left edge.
   */

  left: 0; /* 1 */
  position: absolute;
  text-align: center; /* 1 */
  top: 50%; /* 1 */
  transform: rotate(270deg) translate(0, calc(-3em - 50%)); /* 1 */
  transform-origin: top center; /* 1 */
  width: 10em; /* 1 */
`;

const Lane = styled(Box)`
  align-items: center;
  flex: 1;
  gap: ${({theme}) => theme.size.default};
  padding: ${({theme}) => theme.size.default} ${({theme}) => theme.size.default} ${({theme}) => theme.size.default}
    calc(${({theme}) => theme.size.default} * 5.5);

  :nth-child(1) {
    background: hsl(55, 1%, 89%);
  }
  :nth-child(2) {
    background: hsl(55, 58%, 91%);
  }
  :nth-child(3) {
    background: hsl(0, 58%, 91%);
  }
`;

const ScrollContainer = styled(Box)`
  flex-direction: column;
  gap: ${({theme}) => theme.border.width.strong};
  height: 100vh;
  padding-bottom: ${({theme}) => theme.size.large};
  padding-top: ${({theme}) => theme.size.large};
`;

export const LearningPath = () => {
  return (
    <div>
      <ScrollContainer>
        <Lane>
          <Label>Spieltechnik</Label>
          {learningSteps
            .filter(({category}) => category === 'technique')
            .map((props, index) => (
              <LearningStep key={index} {...{...props, index}} />
            ))}
        </Lane>
        <Lane>
          <Label>
            Harmonien
            <br />& Melodien
          </Label>
          {learningSteps
            .filter(({category}) => category === 'harmony')
            .map((props, index) => (
              <LearningStep key={index} {...{...props, index}} />
            ))}
        </Lane>
        <Lane>
          <Label>Rhythmen</Label>
          {learningSteps
            .filter(({category}) => category === 'rhythm')
            .map((props, index) => (
              <LearningStep key={index} {...{...props, index}} />
            ))}
        </Lane>
      </ScrollContainer>
    </div>
  );
};
