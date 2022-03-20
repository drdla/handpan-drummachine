/*
 * Split Button component for wrapping multiple buttons.
 *
 * Usage:
 * <ButtonBar>
 *   <Button text="Save" size="large" disabled={!this.isValid} onClick={() => { alert('hi'); }}/>
 *   <Button text="Save" width="full-width" isInProgress={this.isLoading} onClick={() => { alert('hi'); }}/>
 * </ButtonBar>
 */

import {borderRadius} from 'polished';
import styled from 'styled-components/macro';

type Props = {
  equalWidth?: boolean;
};

export const ButtonBar = styled.div<Props>`
  display: ${({equalWidth}) => (equalWidth ? 'flex' : 'table')};
  white-space: nowrap;

  /*
   * 1 - Remove border-radius from inner buttons
   * 2 - Keep outer border-radius on left- and rightmost buttons
   */

  button {
    border-radius: 0; /* 1 */
    ${({equalWidth}) => equalWidth && 'flex: 1'};

    :last-child {
      ${({theme}) => borderRadius('right', theme.border.radius.large)}/* 2 */
    }

    :first-child {
      ${({theme}) => borderRadius('left', theme.border.radius.large)}/* 2 */
    }
  }
`;
