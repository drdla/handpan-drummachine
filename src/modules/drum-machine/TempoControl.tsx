import {borderRadius} from 'polished';
import {CSSProperties, useCallback} from 'react';
import styled from 'styled-components';

import {useGlobalState} from '~/modules/global-state';

import {Box, Unit} from '~/components';

import {i18n} from '~/lib';

type TempoControlProps = {
  className?: string;
  style?: CSSProperties;
};

const StyledTempoControl = styled(Box)`
  border-color: ${({theme}) => theme.color.border.lightest};
  border-radius: ${({theme}) => theme.border.radius.large};
  border-style: solid;
  border-width: ${({theme}) => theme.border.width.default};
  height: ${({theme}) => theme.size.huge};
  padding: 2px;
`;

const StepperButton = styled(Box)`
  align-items: center;
  background: ${({theme}) => theme.color.background.white};
  border-color: ${({theme}) => theme.color.border.lightest};
  border-style: solid;
  border-width: ${({theme}) => theme.border.width.default};
  color: ${({theme}) => theme.color.clickable.default};
  cursor: pointer;
  flex: 1;
  font-size: ${({theme}) => theme.font.size.large};
  height: 100%;
  justify-content: center;
  user-select: none;
  width: ${({theme}) => theme.size.huge};

  :first-child {
    ${({theme}) => borderRadius('left', theme.border.radius.largeInner)}
  }

  :last-child {
    ${({theme}) => borderRadius('right', theme.border.radius.largeInner)}
  }

  :not(:first-child) {
    margin-left: -1px;
  }

  :hover {
    background: ${({theme}) => theme.color.background.clickable};
    border-color: ${({theme}) => theme.color.clickable.default};
    color: ${({theme}) => theme.color.clickable.default};
    z-index: ${({theme}) => theme.zIndex.elevated1};
  }
`;

const Tempo = styled(Box)`
  font-size: ${({theme}) => theme.font.size.huge};
  min-width: 4em;
  padding-left: ${({theme}) => theme.size.default};
  padding-right: ${({theme}) => theme.size.default};
  user-select: none;
`;

export const TempoControl = ({className, style}: TempoControlProps) => {
  const {changeTempo, tempo} = useGlobalState(({changeTempo, tempo}) => ({changeTempo, tempo}));

  const handleTempoIncrease = useCallback(() => changeTempo(10), [tempo]);
  const handleTempoDecrease = useCallback(() => changeTempo(-10), [tempo]);

  return (
    <StyledTempoControl className={className} style={style}>
      <Tempo justifyContent="flex-end" alignItems="center">
        <div>
          <span>{tempo}</span>
          <Unit>{i18n.t('bpm')}</Unit>
        </div>
      </Tempo>
      <Box>
        <StepperButton onClick={handleTempoIncrease}>+</StepperButton>
        <StepperButton onClick={handleTempoDecrease}>-</StepperButton>
      </Box>
    </StyledTempoControl>
  );
};
