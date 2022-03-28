import {borderRadius} from 'polished';
import styled from 'styled-components/macro';

import {Box} from '~/components';

import {LearningStep} from './LearningStep';
import {learningSteps} from './learningSteps';

const Label = styled.h3`
  /*
   * 1 - Rotate label and align it vertically centered at left edge.
   */

  color: ${({theme}) => theme.color.text.inverse};
  font-weight: ${({theme}) => theme.font.weight.normal};
  left: 0; /* 1 */
  position: absolute;
  text-align: center; /* 1 */
  text-shadow: 0 0 3px rgb(0 0 0 / 34%);
  top: 50%; /* 1 */
  transform: rotate(270deg) translate(0, calc(-4.5em - 50%)); /* 1 */
  transform-origin: top center; /* 1 */
  width: 14em; /* 1 */
`;

const Lane = styled(Box)`
  align-items: center;
  flex: 1;
  gap: ${({theme}) => theme.size.huge};
  padding: ${({theme}) => theme.size.default} ${({theme}) => theme.size.default} ${({theme}) => theme.size.default}
    calc(${({theme}) => theme.size.default} * 5.5);

  :nth-child(1) {
    background: hsl(210deg 3% 62%); // linear-gradient(90deg, hsl(201deg 83% 72%) 10%, hsl(256deg 80% 72%) 80%);
    ${({theme}) => borderRadius('top', theme.border.radius.large)}
  }
  :nth-child(2) {
    background: hsl(70deg 18% 67%); // linear-gradient(90deg, hsl(139deg 40% 63%) 10%, hsl(167deg 31% 54%) 80%);
  }
  :nth-child(3) {
    background: hsl(41deg 96% 51%); // linear-gradient(90deg, hsl(54deg 84% 55%) 10%, hsl(34deg 100% 50%) 80%);
    ${({theme}) => borderRadius('bottom', theme.border.radius.large)}
  }
`;

const ScrollContainer = styled(Box)`
  flex-direction: column;
  gap: ${({theme}) => theme.border.width.strong};
  height: 100vh;
  padding-bottom: ${({theme}) => theme.size.large};
  padding-top: ${({theme}) => theme.size.large};
`;

export const LearningPath = () => (
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
        <Label>Harmonien & Melodien</Label>
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
