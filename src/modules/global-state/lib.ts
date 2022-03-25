import type {Step} from './types';
import type {Steps} from './useGlobalState';

export const findStepIndexBySoundId = (steps: Steps, soundId: string): number | undefined => {
  let currentStep;

  steps.forEach((s, i) => {
    if (!s) {
      return;
    }

    if (Array.isArray(s)) {
      if (s.filter(({id}) => id === soundId).length) {
        currentStep = i;
      }

      return;
    }

    if ((s as Step).id === soundId) {
      currentStep = i;
    }
  });

  return currentStep;
};
