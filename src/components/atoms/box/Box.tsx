/* eslint-disable */
import {CSSProperties, HTMLAttributes, PropsWithChildren, createElement} from 'react';
import styled from 'styled-components/macro';

// The PropTypes.number `0` with no unit is a valid CSS length, see:
//   https://www.w3.org/TR/CSS2/syndata.html#length-units
// Though it might be inappropriate/avoidable in certain contexts, if it is
// valid CSS, we should allow it.
const isTruthyOrZero = (value: string | number | undefined) => value || value === 0;

export type BoxType = 'article' | 'aside' | 'div' | 'figure' | 'footer' | 'header' | 'main' | 'nav' | 'section';

export type FlexDirection = 'column-reverse' | 'column' | 'row-reverse' | 'row';

export type AlignItems = 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';

export type JustifyContent = 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between' | 'stretch';

export type BoxProps = HTMLAttributes<BoxType> &
  PropsWithChildren<{
    alignContent?: JustifyContent;
    alignItems?: AlignItems;
    alignSelf?: AlignItems;
    dataCy?: string;
    display?: 'flex' | 'inline-flex';
    element?: BoxType;
    flex?: string | number;
    flexBasis?: string | number;
    flexDirection?: FlexDirection;
    flexGrow?: string | number;
    flexShrink?: string | number;
    flexWrap?: 'nowrap' | 'wrap-reverse' | 'wrap';
    height?: string | number;
    inline?: boolean;
    justifyContent?: JustifyContent;
    margin?: string | number;
    marginBottom?: string | number;
    marginLeft?: string | number;
    marginRight?: string | number;
    marginTop?: string | number;
    maxHeight?: string | number;
    maxWidth?: string | number;
    minHeight?: string | number;
    minWidth?: string | number;
    order?: number;
    padding?: string | number;
    paddingBottom?: string | number;
    paddingLeft?: string | number;
    paddingRight?: string | number;
    paddingTop?: string | number;
    position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky' | 'inherit';
    style?: CSSProperties;
    width?: string | number;
    dark?: boolean;
    noPad?: boolean;
  }>;

export const Box = styled(
  ({
    alignContent,
    alignItems,
    alignSelf,
    children,
    dataCy,
    element,
    flex,
    flexBasis,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap,
    height,
    justifyContent,
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    order,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    width,
    dark,
    noPad,
    ...props
  }: BoxProps) => createElement(element as BoxType, props, children)
).attrs<BoxProps>(({dataCy}) => ({
  'data-cy': dataCy,
  'display': 'flex',
  'element': 'div',
  'position': 'relative',
}))<BoxProps>`
  ${({alignContent}) => alignContent && `align-content: ${alignContent};`}
  ${({alignItems}) => alignItems && `align-items: ${alignItems};`}
  ${({alignSelf}) => alignSelf && `align-self: ${alignSelf};`}
  ${({display}) => display && `display: ${display};`}
  ${({flex}) => isTruthyOrZero(flex) && `flex: ${flex};`}
  ${({flexBasis}) => isTruthyOrZero(flexBasis) && `flex-basis: ${flexBasis};`}
  ${({flexDirection}) => flexDirection && `flex-direction: ${flexDirection};`}
  ${({flexGrow}) => isTruthyOrZero(flexGrow) && `flex-grow: ${flexGrow};`}
  ${({flexShrink}) => isTruthyOrZero(flexShrink) && `flex-shrink: ${flexShrink};`}
  ${({flexWrap}) => flexWrap && `flex-wrap: ${flexWrap};`}
  ${({height}) => isTruthyOrZero(height) && `height: ${height};`}
  ${({justifyContent}) => justifyContent && `justify-content: ${justifyContent};`}
  ${({margin}) => isTruthyOrZero(margin) && `margin: ${margin};`}
  ${({marginBottom}) => isTruthyOrZero(marginBottom) && `margin-bottom: ${marginBottom};`}
  ${({marginLeft}) => isTruthyOrZero(marginLeft) && `margin-left: ${marginLeft};`}
  ${({marginRight}) => isTruthyOrZero(marginRight) && `margin-right: ${marginRight};`}
  ${({marginTop}) => isTruthyOrZero(marginTop) && `margin-top: ${marginTop};`}
  ${({maxHeight}) => isTruthyOrZero(maxHeight) && `max-height: ${maxHeight};`}
  ${({maxWidth}) => isTruthyOrZero(maxWidth) && `max-width: ${maxWidth};`}
  ${({minHeight}) => isTruthyOrZero(minHeight) && `min-height: ${minHeight};`}
  ${({minWidth}) => isTruthyOrZero(minWidth) && `min-width: ${minWidth};`}
  ${({order}) => isTruthyOrZero(order) && `order: ${order};`}
  ${({padding}) => isTruthyOrZero(padding) && `padding: ${padding};`}
  ${({paddingBottom}) => isTruthyOrZero(paddingBottom) && `padding-bottom: ${paddingBottom};`}
  ${({paddingLeft}) => isTruthyOrZero(paddingLeft) && `padding-left: ${paddingLeft};`}
  ${({paddingRight}) => isTruthyOrZero(paddingRight) && `padding-right: ${paddingRight};`}
  ${({paddingTop}) => isTruthyOrZero(paddingTop) && `padding-top: ${paddingTop};`}
  ${({position}) => position && `position: ${position};`}
  ${({width}) => isTruthyOrZero(width) && `width: ${width};`}
`;
