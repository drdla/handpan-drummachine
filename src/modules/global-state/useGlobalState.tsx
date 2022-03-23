import produce from 'immer';
import create, {GetState, SetState} from 'zustand';
import {Step} from './types';

interface GlobalStore {
  changeTempo: (amount: number) => void;
  changeVolume: (category: 'master' | 'music' | 'click', value: number) => void;
  currentStep: number;
  isPlaying: boolean;
  setNextStep: () => void;
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
  setNextStep: () => {
    const {currentStep, steps} = get();

    set(
      produce((state) => {
        state.currentStep = (currentStep + 1) % steps.length;
      })
    );
  },
  steps: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  tempo: 120,
  togglePlayback: () => {
    const {isPlaying} = get();

    set(
      produce((state) => {
        state.isPlaying = !isPlaying;
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
