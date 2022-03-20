import {CSSProperties, PropsWithChildren, memo} from 'react';
import styled from 'styled-components/macro';

import {maxWidth} from '~/styles';

const Layout = styled.div`
  ${maxWidth(1680)}

  display: flex;
  flex-direction: column;
  min-height: 100.1vh;
  overflow: scroll;
`;

type Props = PropsWithChildren<{
  className?: string;
  style?: CSSProperties;
}>;

export const BaseLayout = memo<Props>(({children, className = '', style = {}}) => (
  <Layout className={className} style={style}>
    {children}
  </Layout>
));
