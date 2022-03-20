import {size as polishedSize} from 'polished';
import {CSSProperties, memo} from 'react';
import styled, {ThemeSize} from 'styled-components';

import {Box} from '~/components';

import {size, spaceBetweenSelf} from '~/styles';

type TransportButtonsProps = {
  className?: string;
  style?: CSSProperties;
};

const Button = styled.button`
  ${polishedSize(size * 8)}
  ${({theme}) => spaceBetweenSelf(theme.size.default as ThemeSize, 'horizontal')}

  align-items: center;
  border-radius: ${({theme}) => theme.border.radius.circle};
  border: ${({theme}) => theme.border.default};
  justify-content: center;
  text-align: center;
`;

export const TransportButtons = memo<TransportButtonsProps>(({className, style}) => (
  <Box className={className} style={style}>
    <Button>Go to start</Button>
    <Button>Play</Button>
    <Button>Play from start</Button>
  </Box>
));
