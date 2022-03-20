import {activeHandpanElements} from '../../Handpan';
import {Border, Ding, Tone1, Tone2, Tone3, Tone4, Tone5, Tone6, Tone7, Tone8} from './SelaAmaraDElements';

export const SelaAmaraD = ({active = []}: activeHandpanElements) => {
  return (
    <>
      <Border />
      <Ding active={active.includes('Ding')} />
      <Tone1 active={active.includes('Tone1')} />
      <Tone2 active={active.includes('Tone2')} />
      <Tone3 active={active.includes('Tone3')} />
      <Tone4 active={active.includes('Tone4')} />
      <Tone5 active={active.includes('Tone5')} />
      <Tone6 active={active.includes('Tone6')} />
      <Tone7 active={active.includes('Tone7')} />
      <Tone8 active={active.includes('Tone8')} />
    </>
  );
};
