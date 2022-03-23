import {Finger} from '~/modules/hand';

export type Stroke = 'downstroke' | 'upstroke' | 'full stroke' | 'tap';

export type Step = {
  tone: string;
  technique: {
    hand: 'left' | 'right';
    finger: Finger;
    stroke: Stroke;
  };
  velocity: number;
};
