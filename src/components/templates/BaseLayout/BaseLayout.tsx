import {CSSProperties, memo} from 'react';
import {Outlet} from 'react-router-dom';
import styled from 'styled-components/macro';

import {maxWidth} from '~/styles';

const Layout = styled.div`
  ${maxWidth(1680)}

  display: flex;
  flex-direction: column;
  min-height: 100.1vh;
  overflow: scroll;
`;

type Props = {
  className?: string;
  style?: CSSProperties;
};

export const BaseLayout = memo<Props>(({className = '', style = {}}) => (
  <Layout className={className} style={style}>
    <Outlet />
  </Layout>
));
