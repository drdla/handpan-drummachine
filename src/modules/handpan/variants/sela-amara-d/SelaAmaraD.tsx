import {useCallback} from 'react';
import {MidiNote} from '~/modules/global-state';

import {activeHandpanElements} from '../../Handpan';
import {Border, Ding, Tone1, Tone2, Tone3, Tone4, Tone5, Tone6, Tone7, Tone8} from './SelaAmaraDElements';

const toneMap: {
  number: number;
  name: string;
  note: MidiNote;
}[] = [
  {
    number: 1,
    name: 'Tone1',
    note: 'A-3' as MidiNote,
  },
  {
    number: 2,
    name: 'Tone2',
    note: 'C-4' as MidiNote,
  },
  {
    number: 3,
    name: 'Tone3',
    note: 'D-4' as MidiNote,
  },
  {
    number: 4,
    name: 'Tone4',
    note: 'E-4' as MidiNote,
  },
  {
    number: 5,
    name: 'Tone5',
    note: 'F-4' as MidiNote,
  },
  {
    number: 6,
    name: 'Tone6',
    note: 'G-4' as MidiNote,
  },
  {
    number: 7,
    name: 'Tone7',
    note: 'A-4' as MidiNote,
  },
  {
    number: 8,
    name: 'Tone8',
    note: 'C-5' as MidiNote,
  },
  {
    number: 9,
    name: 'Ding',
    note: 'D-3' as MidiNote,
  },
];

export const SelaAmaraD = ({active = [], onClick = () => {}}: activeHandpanElements & {onClick: Function}) => {
  const isActive = (name: string) => {
    const element = toneMap.find((t) => t.name === name);
    const note = element?.note || '';

    return active.includes(note);
  };

  const handleClick = useCallback((element) => onClick(toneMap.find(({name}) => name === element)?.note), [onClick]);

  return (
    <>
      <Border />
      <Ding active={isActive('Ding')} onClick={handleClick} />
      <Tone1 active={isActive('Tone1')} onClick={handleClick} />
      <Tone2 active={isActive('Tone2')} onClick={handleClick} />
      <Tone3 active={isActive('Tone3')} onClick={handleClick} />
      <Tone4 active={isActive('Tone4')} onClick={handleClick} />
      <Tone5 active={isActive('Tone5')} onClick={handleClick} />
      <Tone6 active={isActive('Tone6')} onClick={handleClick} />
      <Tone7 active={isActive('Tone7')} onClick={handleClick} />
      <Tone8 active={isActive('Tone8')} onClick={handleClick} />
    </>
  );
};
