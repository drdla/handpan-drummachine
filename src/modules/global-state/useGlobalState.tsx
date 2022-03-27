import produce from 'immer';
import merge from 'lodash/merge';
import create, {GetState, SetState} from 'zustand';

import {findStepIndexBySoundId} from './lib';
import {MidiNote, Step} from './types';

export type Steps = (Step | Step[] | null)[];

interface GlobalStore {
  changeTempo: (amount: number) => void;
  changeVolume: (category: 'master' | 'music' | 'click', value: number) => void;
  currentStep: number;
  isReady: boolean;
  isPlaying: boolean;
  mode: 'record' | 'playback';
  selectSound: (stepIndex: number, id: string) => void;
  selectedSound: string | null;
  setReadyState: () => void;
  setStepIndex: (index: number) => void;
  steps: Steps;
  tempo: number;
  updateStep: (data: Partial<Step>) => void;
  togglePlayback: () => void;
  volume: {
    click: number;
    master: number;
    music: number;
  };
}

export const useGlobalState = create<GlobalStore>((set: SetState<GlobalStore>, get: GetState<GlobalStore>) => ({
  changeTempo: (amount = 1) => {
    const {tempo} = get();

    set(
      produce((state) => {
        state.tempo = Math.min(Math.max(tempo + amount, 20), 400);
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
  currentStep: -1,
  isReady: false,
  isPlaying: false,
  mode: 'record',
  selectSound: (stepIndex, id) => {
    const {mode, selectedSound} = get();

    if (mode === 'playback') {
      return;
    }

    set(
      produce((state) => {
        state.selectedSound = id !== selectedSound ? id : null;
      })
    );
  },
  selectedSound: null,
  setReadyState: () => {
    const {isReady} = get();

    set(
      produce((state) => {
        state.isReady = !isReady;
      })
    );
  },
  setStepIndex: (i) =>
    set(
      produce((state) => {
        state.currentStep = i;
      })
    ),
  steps: [
    {
      id: 'ccd65bd6-0e4a-48b3-aef9-3fc77e9c9e63',
      tone: 'A-3' as MidiNote,
      technique: {hand: 'right', finger: 'thumb'},
      velocity: 1,
    },
    {
      id: '1582814c-bf8f-4689-b5fa-2c52d5661cd9',
      tone: 'C-4' as MidiNote,
      technique: {hand: 'left', finger: 'thumb'},
      velocity: 1,
    },
    {
      id: 'cb43bf53-04a3-48eb-93a4-0176d8277ea7',
      tone: 'D-4' as MidiNote,
      technique: {hand: 'right', finger: 'index-finger'},
      velocity: 1,
    },
    {
      id: 'b5c8fa78-4eb9-4dd9-b098-244bb425c79a',
      tone: 'E-4' as MidiNote,
      technique: {hand: 'left', finger: 'index-finger'},
      velocity: 1,
    },
    {
      id: 'c1d71115-b74f-4587-8132-bbf9bd0d8db9',
      tone: 'F-4' as MidiNote,
      technique: {hand: 'right', finger: 'index-finger'},
      velocity: 1,
    },
    {
      id: 'c1r71115-b74f-4587-8132-bbf9bd0d8db9',
      tone: 'G-4' as MidiNote,
      technique: {hand: 'left', finger: 'index-finger'},
      velocity: 1,
    },
    {
      id: 'c1r71115-b74f-2587-8132-bbf9bd0d8db9',
      tone: 'A-4' as MidiNote,
      technique: {hand: 'right', finger: 'index-finger'},
      velocity: 1,
    },
    {
      id: 'c1r71225-b74f-2587-8132-bbf9bd0d8db9',
      tone: 'C-5' as MidiNote,
      technique: {hand: 'left', finger: 'index-finger'},
      velocity: 1,
    },
    {
      id: 'ccd65bd6-0e4a-48b3-aef9-3fc77e9c9e43',
      tone: 'A-3' as MidiNote,
      technique: {hand: 'right', finger: 'thumb'},
      velocity: 1,
    },
    {
      id: '1582814c-bf8f-4689-b5fa-2c52d56a1cd9',
      tone: 'C-4' as MidiNote,
      technique: {hand: 'left', finger: 'thumb'},
      velocity: 1,
    },
    {
      id: 'cb43bf53-04a3-48eb-93a4-0176d8237ea7',
      tone: 'D-4' as MidiNote,
      technique: {hand: 'right', finger: 'index-finger'},
      velocity: 1,
    },
    {
      id: 'b5c8fa78-4eb9-4dd9-b098-244bb42sc79a',
      tone: 'E-4' as MidiNote,
      technique: {hand: 'left', finger: 'index-finger'},
      velocity: 1,
    },
    {
      id: 'c1d71115-b74f-4587-8132-bbf9bd0dtdb9',
      tone: 'F-4' as MidiNote,
      technique: {hand: 'right', finger: 'index-finger'},
      velocity: 1,
    },
    {
      id: 'c1r71115-b74f-4587-8132-bbf9bd0d1db9',
      tone: 'G-4' as MidiNote,
      technique: {hand: 'left', finger: 'index-finger'},
      velocity: 1,
    },
    {
      id: 'c1r71112-b74f-2587-8132-bbf9bd0d8db9',
      tone: 'A-4' as MidiNote,
      technique: {hand: 'right', finger: 'index-finger'},
      velocity: 1,
    },
    {
      id: 'c1r71225-b74f-2587-8132-bbf9bd0d8db9',
      tone: 'C-5' as MidiNote,
      technique: {hand: 'left', finger: 'index-finger'},
      velocity: 1,
    },
  ],
  tempo: 120,
  togglePlayback: () => {
    const {isPlaying} = get();

    set(
      produce((state) => {
        state.isPlaying = !isPlaying;
        state.currentStep = -1;
      })
    );
  },
  updateStep: (partialStepData) => {
    const {selectedSound, steps} = get();

    if (!selectedSound) {
      console.error('No sound selected');
      return;
    }

    const currentStep = findStepIndexBySoundId(steps, selectedSound);
    if (!currentStep) {
      console.error('Sound not found within steps array.'); // TODO: just ADD that item!
      return;
    }

    const step = steps[currentStep];
    const sound = (Array.isArray(step) ? step : [step]).filter(Boolean).filter((s) => s?.id === selectedSound)[0];
    const newSound = {...sound, ...partialStepData} as Step; // FIXME: use a smarter property merging approach; stroke would get lost with the current approach!

    let newStep: Step | Step[] = newSound;
    if (Array.isArray(step)) {
      // const indexWithinStep = step.findIndex((s) => s?.id === selectedSound);
      newStep = [...step.filter((s) => s?.id !== selectedSound), newSound]; // FIXME: this appends; it _should_ replace though! -> [...step.splice(indexWithinStep, 1, newSound)];
    }

    set(
      produce((state) => {
        state.steps[currentStep] = newStep;
      })
    );
  },
  volume: {
    click: 0,
    master: 100,
    music: 100,
  },
}));
