import {CSSProperties, memo} from 'react';

import {Button, ButtonBar} from '~/components';

import {i18n} from '~/lib';

type VolumeControlsProps = {
  className?: string;
  style?: CSSProperties;
};

export const VolumeControls = memo<VolumeControlsProps>(({className, style}) => (
  <ButtonBar className={className} style={style}>
    <button>{i18n.t('Master')}</button>
    <button>{i18n.t('Handpan')}</button>
    <button>{i18n.t('Click')}</button>
  </ButtonBar>
));
