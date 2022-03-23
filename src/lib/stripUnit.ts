import {stripUnit as stripUnitPolished} from 'polished';

export const stripUnit = (value: string | number | undefined) =>
  value === undefined ? 0 : Number(stripUnitPolished(value));
