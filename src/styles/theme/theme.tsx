/* eslint-disable sort-keys */
import {DefaultTheme} from 'styled-components';

import {darken, desaturate, lighten, saturate, transparentize} from '~/lib';

const transitionTimeMultiplier = 1; // scaling factor for development / debugging

// Base values for deriving variations
const borderRadius = 3;
const borderWidth = 1;

export const size = 14;

const colorPrimary = 'hsl(100, 46%, 55%)';
const colorSecondary = 'hsl(248, 67%, 64%)';
const colorClickable = 'hsl(207, 67%, 64%)';
const colorText = 'hsl(201, 13%, 18%)';
const colorBackground = 'hsl(195, 2%, 89%)';
const colorBorder = 'hsl(195, 8%, 76%)';
const white = '#fff';

// Darker color variations:
// - Brightness
// + Saturation
// Hue (often) shifts towards a luminosity minimum (red, green, or blue)
// Lighter color variations:
// + Brightness
// - Saturation
// Hue (often) shifts towards a luminosity maximum
export const theme: DefaultTheme = {
  color: {
    primary: {
      default: colorPrimary,
      darker: darken(saturate(colorPrimary, 1), 9),
      darkest: darken(saturate(colorPrimary, 2), 13),
      lighter: lighten(desaturate(colorPrimary, 8), 13),
      lightest: lighten(desaturate(colorPrimary, 13), 34),
    },
    secondary: {
      default: colorSecondary,
      darker: darken(saturate(colorSecondary, 1), 5),
      darkest: darken(saturate(colorSecondary, 2), 8),
      lighter: lighten(desaturate(colorSecondary, 8), 13),
      lightest: lighten(desaturate(colorSecondary, 13), 34),
    },
    clickable: {
      // colors for clickable items (links, buttons, etc.)
      default: colorClickable,
      highlight: lighten(saturate(colorClickable, 3), 8),
      darker: darken(saturate(colorClickable, 3), 13),
    },
    text: {
      default: colorText,
      lighter: lighten(desaturate(colorText, 5), 46),
      lightest: lighten(desaturate(colorText, 5), 69),
      inverse: white,
    },
    background: {
      default: colorBackground,
      darker: darken(saturate(colorBackground, 3), 21),
      darkest: darken(saturate(colorBackground, 4), 61),
      offBlack: darken(colorBackground, 79),
      lighter: lighten(colorBackground, 2),
      lightest: lighten(desaturate(colorBackground, 1), 5),
      offWhite: lighten(desaturate(colorBackground, 8), 8),
      white,
      imageOverlay: transparentize(white, 8),
      overlay: transparentize(darken(saturate(colorBackground, 11), 92), 22),
      clickable: transparentize(lighten(saturate(colorClickable, 3), 8), 79),
    },
    border: {
      default: colorBorder,
      darker: darken(desaturate(colorBorder, 3), 16),
      lighter: lighten(colorBorder, 8),
      lightest: lighten(colorBorder, 13),
    },
    state: {
      attention: 'hsl(50, 89%, 62%)',
      danger: 'hsl(1, 76%, 58%)',
      error: 'hsl(1, 76%, 58%)',
      info: 'hsl(200, 100%, 86%)',
      success: 'hsl(102, 76%, 55%)',
    },
    gradient: {
      fancy: 'linear-gradient(90deg, #7372e5, #1faec2)',
      payoneerSignet:
        'conic-gradient( #dfd902 11%, #20dc86 16%, #20dc86 28%, #0092f4 33%, #0092f4 39%, #da54d8 44%, #da54d8 54%, #ff4800 59%, #ff4800 95%, #dfd902 100%)',
    },
    inherit: 'inherit',
    transparent: 'transparent',
  },
  border: {
    default: `${borderWidth}px solid ${colorBorder}`,
    radius: {
      default: `${borderRadius}px`,
      defaultInner: `${Math.max(borderRadius - 1, 0)}px`, // inner radii must be slightly smaller to avoid gaps
      tiny: `${Math.max(borderRadius - 2, 0)}px`,
      tinyInner: `${Math.max(borderRadius - 2 - 1, 0)}px`,
      small: `${Math.max(borderRadius - 1, 0)}px`,
      smallInner: `${Math.max(borderRadius - 1 - 1, 0)}px`,
      large: `${borderRadius * 2}px`,
      largeInner: `${Math.max(borderRadius * 2 - 1, 0)}px`,
      huge: `${borderRadius * 3}px`,
      hugeInner: `${Math.max(borderRadius * 3 - 1, 0)}px`,
      circle: '50%',
      pill: '999px',
    },
    width: {
      default: `${borderWidth}px`,
      strong: `${borderWidth * 2}px`,
      superStrong: `${borderWidth * 3}px`,
    },
  },
  boxShadow: {
    default: '1px 1px 6px 0.5px rgba(0, 0, 0, 0.21)',
    elevated: '1px 1px 14px 0.5px rgba(0, 0, 0, 0.21)',
    elevatedHigh: `0 0 ${size}px ${size / 2}px rgba(0, 0, 0, 0.21)`,
    lighter: '2px 2px 6px 0.5px rgba(0, 0, 0, 0.13)',
    separateFromBelow: '0 1px 3px rgba(0, 0, 0, 0.21)',
    separateFromLeft: '-1px 0 3px rgba(0, 0, 0, 0.21)',
  },
  font: {
    size: {
      inherit: 'inherit',
      default: `${size}px`,
      tiny: '0.714rem',
      small: '0.857rem',
      large: '1.5rem',
      huge: '2rem',
      pageTitle: '3rem',
    },
    weight: {
      normal: 400,
      bold: 600,
    },
  },
  size: {
    default: `${size}px`,
    tiny: `${size / 4}px`,
    small: `${size / 2}px`,
    large: `${size * 2}px`,
    huge: `${size * 4}px`,
    inherit: 'inherit',
  },
  transition: {
    style: {
      default: 'ease-in-out',
      dynamic: 'cubic-bezier(0.73, 0.01, 0, 1)',
      easeInOut: 'ease-in-out',
    },
    time: {
      veryFast: `${75 * transitionTimeMultiplier}ms`,
      fast: `${150 * transitionTimeMultiplier}ms`,
      medium: `${250 * transitionTimeMultiplier}ms`,
      slow: `${400 * transitionTimeMultiplier}ms`,
      verySlow: `${1000 * transitionTimeMultiplier}ms`,
    },
  },
  zIndex: {
    recessed: -1,
    base: 0,
    // elements on the base layer that need to stick out
    elevated1: 10,
    elevated2: 11,
    elevated3: 12,
    // elements that float over the base layer
    overlaid1: 100,
    overlaid2: 110,
    overlaid3: 120,
    // elements that must never be covered
    topmost1: 1000000,
    topmost2: 1000010,
    topmost3: 1000020,
  },
};
