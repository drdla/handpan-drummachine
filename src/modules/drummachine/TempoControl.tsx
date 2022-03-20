import {CSSProperties, useCallback, useState} from 'react';

import {Box, Unit} from '~/components';

import {defaultTempo} from '~/constants';
import {i18n} from '~/lib';

type TempoControlProps = {
  className?: string;
  style?: CSSProperties;
};

export const TempoControl = ({className, style}: TempoControlProps) => {
  const [tempo, setTempo] = useState(defaultTempo);

  const handleTempoIncrease = useCallback(() => setTempo(tempo + 1), [tempo]);
  const handleTempoDecrease = useCallback(() => setTempo(tempo - 1), [tempo]);

  return (
    <Box flexDirection="column" className={className} style={style}>
      <button onClick={handleTempoDecrease}>-</button>
      <div>
        <span>{tempo}</span>
        <Unit>{i18n.t('bpm')}</Unit>
      </div>
      <button onClick={handleTempoIncrease}>+</button>
    </Box>
  );
};
