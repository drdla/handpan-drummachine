import produce from 'immer';
import create, {GetState, SetState} from 'zustand';

import {Step} from './types';

interface GlobalStore {
  changeTempo: (amount: number) => void;
  changeVolume: (category: 'master' | 'music' | 'click', value: number) => void;
  currentStep: number;
  isPlaying: boolean;
  mode: 'record' | 'playback';
  setStepIndex: (index: number) => void;
  steps: (Step | null)[];
  tempo: number;
  updateStep: (index: number, step: Step) => void;
  togglePlayback: () => void;
  volume: {
    master: number;
    click: number;
    music: number;
  };
}

export const useGlobalState = create<GlobalStore>((set: SetState<GlobalStore>, get: GetState<GlobalStore>) => ({
  changeTempo: (amount = 1) => {
    const {tempo} = get();

    set(
      produce((state) => {
        state.tempo = Math.min(Math.max(tempo + amount, 20), 240);
      })
    );
  },
  changeVolume: (category = 'master', value = 0) => {
    const {volume} = get();
    const currentVolume = volume?.[category];

    set(
      produce((state) => {
        if (currentVolume !== undefined) {
          state.volume[category] = value;
        }
      })
    );
  },
  currentStep: 0,
  isPlaying: false,
  mode: 'record',
  setStepIndex: (i) =>
    set(
      produce((state) => {
        state.currentStep = i;
      })
    ),
  steps: [
    {
      tone: 'C-4',
      technique: {hand: 'left', finger: 'middle-finger', stroke: 'tap'},
      velocity: 1,
    },
    null,
    {
      tone: 'D-4',
      technique: {hand: 'right', finger: 'index-finger', stroke: 'full stroke'},
      velocity: 1,
    },
    {
      tone: 'D-4',
      technique: {hand: 'right', finger: 'index-finger'},
      velocity: 1,
    },
    null,
    {
      tone: 'E-4',
      technique: {hand: 'left', finger: 'thumb', stroke: 'downstroke'},
      velocity: 1,
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  tempo: 120,
  togglePlayback: () => {
    const {isPlaying} = get();

    set(
      produce((state) => {
        state.isPlaying = !isPlaying;
        state.currentStep = 0;
      })
    );
  },
  updateStep: (index, step) => {
    const {steps} = get();

    if (!Object.keys(steps).includes(`${index}`)) {
      return; // not within the range of elements of the step array
    }

    set(
      produce((state) => {
        state.steps[index] = step;
      })
    );
  },
  volume: {
    master: 100,
    music: 100,
    click: 0,
  },
}));
