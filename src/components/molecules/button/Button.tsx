/*
 * Button component.
 *
 * Usage:
 * <Button text="Save" size="large" disabled={!this.isValid} onClick={() => { alert('hi'); }}/>
 *
 * <Button text="Save" inProgress={this.isLoading} onClick={() => { alert('hi'); }} fullWidth/>
 */

import {CSSProperties, MouseEventHandler, memo} from 'react';
import {ThemeSize} from 'styled-components';
import styled from 'styled-components/macro';

import {button} from '~/styles';

const StyledButton = styled.button`
  ${button}
`;

const preventDefault = (e: React.SyntheticEvent) => e?.preventDefault();

export type ButtonProps = {
  className?: string;
  danger?: boolean;
  dataCy?: string;
  disabled?: boolean;
  disabledMessage?: string;
  fullWidth?: boolean;
  icon?: string;
  inProgress?: boolean;
  size?: ThemeSize;
  text: string;
  type?: 'button' | 'reset' | 'submit';
  style?: CSSProperties;
  disabledMessageHandler?: (msg: string) => any;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onMouseDown?: MouseEventHandler<HTMLButtonElement>;
};

export const Button = memo<ButtonProps>(
  ({
    className,
    danger,
    dataCy,
    disabled,
    disabledMessage,
    disabledMessageHandler = window.alert,
    fullWidth,
    icon,
    inProgress,
    onClick,
    onMouseDown,
    size = 'default',
    style,
    text,
    type = 'button',
  }) => {
    const buttonVariantProps = {
      className,
      danger,
      disabled,
      fullWidth,
      inProgress,
      size,
      style,
      type,
    };

    if (inProgress) {
      return (
        <StyledButton {...buttonVariantProps} onClick={preventDefault} disabled>
          spinning
        </StyledButton>
      );
    }

    return (
      <StyledButton
        data-cy={dataCy}
        onClick={(e) => {
          if (disabled) {
            if (disabledMessage) {
              disabledMessageHandler(disabledMessage);
            }
            e.preventDefault();
            return;
          }

          if (onClick) {
            onClick(e);
            return;
          }
        }}
        onMouseDown={(e) => {
          if (disabled) {
            if (disabledMessage && !onClick) {
              disabledMessageHandler(disabledMessage);
            }
            e.preventDefault();
            return;
          }

          if (onMouseDown) {
            onMouseDown(e);
            return;
          }
        }}
        {...buttonVariantProps}
      >
        {text}
      </StyledButton>
    );
  }
);
