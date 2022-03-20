/*
 * All color functions take amounts between 0 and 100 as argument.
 */

import {
  darken as darkenPolished,
  desaturate as desaturatePolished,
  lighten as lightenPolished,
  parseToRgb,
  saturate as saturatePolished,
  toColorString,
  transparentize as transparentizePolished,
} from 'polished';

export const hexColor = (color: string): string => toColorString(parseToRgb(color));

export const lighten = (color: string, amount: number): string => lightenPolished(amount / 100, hexColor(color));

export const darken = (color: string, amount: number): string => darkenPolished(amount / 100, hexColor(color));

export const saturate = (color: string, amount: number): string => saturatePolished(amount / 100, hexColor(color));

export const desaturate = (color: string, amount: number): string => desaturatePolished(amount / 100, hexColor(color));

export const transparentize = (color: string, amount: number): string =>
  transparentizePolished(amount / 100, hexColor(color));
