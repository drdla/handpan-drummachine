import 'styled-components';

declare module 'styled-components' {
  export type ThemeSize = 'none' | 'default' | 'tiny' | 'small' | 'large' | 'huge' | 'inherit' | 'minimal';
  export type ThemeDirection = 'vertical' | 'horizontal';
  export type ThemePosition = 'before' | 'after';

  export interface DefaultTheme {
    border: {
      default: string;
      width: {
        default: string;
        strong: string;
        superStrong: string;
      };
      radius: {
        default: string;
        defaultInner: string;
        tiny: string;
        tinyInner: string;
        small: string;
        smallInner: string;
        large: string;
        largeInner: string;
        huge: string;
        hugeInner: string;
        circle: string;
        pill: string;
      };
    };

    boxShadow: {
      default: string;
      elevated: string;
      elevatedHigh: string;
      lighter: string;
      separateFromLeft: string;
      separateFromBelow: string;
    };

    color: {
      primary: {
        default: string;
        darker: string;
        darkest: string;
        lighter: string;
        lightest: string;
      };
      secondary: {
        default: string;
        darker: string;
        darkest: string;
        lighter: string;
        lightest: string;
      };
      clickable: {
        default: string;
        highlight: string;
        darker: string;
      };
      text: {
        default: string;
        lighter: string;
        lightest: string;
        inverse: string;
      };
      background: {
        default: string;
        darker: string;
        darkest: string;
        offBlack: string;
        lighter: string;
        lightest: string;
        offWhite: string;
        white: string;
        imageOverlay: string;
        overlay: string;
        clickable: string;
      };
      border: {
        default: string;
        darker: string;
        lighter: string;
        lightest: string;
      };
      state: {
        attention: string;
        danger: string;
        error: string;
        info: string;
        success: string;
      };
      gradient: {
        fancy: string;
        payoneerSignet: string;
      };
      inherit: string;
      transparent: string;
    };

    font: {
      size: {[key in ThemeSize]?: string} & {
        pageTitle: string;
      };
      weight: {
        normal: number;
        bold: number;
      };
    };

    size: {[key in ThemeSize]?: string};

    transition: {
      style: {
        default: string;
        dynamic: string;
        easeInOut: string;
      };
      time: {
        verySlow: string;
        slow: string;
        medium: string;
        fast: string;
        veryFast: string;
      };
    };

    zIndex: {
      recessed: number;
      base: number;
      overlaid1: number;
      overlaid2: number;
      overlaid3: number;
      elevated1: number;
      elevated2: number;
      elevated3: number;
      topmost1: number;
      topmost2: number;
      topmost3: number;
    };
  }
}
