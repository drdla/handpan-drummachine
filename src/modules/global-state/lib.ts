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

export const findSelectedSound = (steps: Steps, selectedSound: string | null): null | Step => {
  if (!selectedSound) {
    console.error('No sound selected.');
    return null;
  }

  const currentStep = findStepIndexBySoundId(steps, selectedSound);

  if (currentStep === undefined || currentStep === null) {
    return null;
  }

  const step = steps[currentStep];
  const sound = (Array.isArray(step) ? step : [step]).filter(Boolean).filter((s) => s?.id === selectedSound)[0];

  return sound;
};
