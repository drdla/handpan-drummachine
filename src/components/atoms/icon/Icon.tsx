import {size as sizeHelper} from 'polished';
import {memo} from 'react';
import styled from 'styled-components/macro';

type StyledIconProps = Omit<
  React.SVGAttributes<SVGSVGElement> & {
    size?: 'default' | 'large';
    style?: React.CSSProperties;
  },
  'role' | 'viewBox'
>;

const StyledIcon = styled.svg.attrs(() => ({
  role: 'img',
  viewBox: '0 0 30 30',
}))<StyledIconProps>`
  ${({size, theme}) => {
    switch (size) {
      case 'large':
        return sizeHelper(theme.size.large as string);

      case 'default':
      default:
        return sizeHelper(21);
    }
  }}
  display: inline-block;
  fill: ${({theme}) => theme.color.transparent};
  position: relative;
  stroke: currentColor;
  stroke-width: ${({theme}) => theme.border.width.default};
  vertical-align: middle;
`;

type IconProps = StyledIconProps & {
  svgPaths: JSX.Element;
};

export const Icon = memo<IconProps>(({svgPaths, ...rest}) => <StyledIcon {...rest}>{svgPaths}</StyledIcon>);
