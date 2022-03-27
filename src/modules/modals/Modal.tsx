import styled from 'styled-components';
import {useModal} from './useModal';

import {Box, Button} from '~/components';
import {transparentize} from '~/lib';

const Backdrop = styled(Box)`
  align-items: center;
  background: ${({theme}) => transparentize(theme.color.background.offBlack, 3)};
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: fixed;
  width: 100vw;
  z-index: ${({theme}) => theme.zIndex.topmost1};

  > div {
    background: ${({theme}) => theme.color.background.white};
    padding: ${({theme}) => theme.size.default};
  }
`;

export const Modal = () => {
  const {hide, modal} = useModal(({hide, modal}) => ({
    hide,
    modal,
  }));

  return modal ? (
    <Backdrop onClick={hide}>
      <div>
        <h2>{modal?.title}</h2>
        <p>{modal?.content}</p>
        {modal?.action && <Button onClick={modal.action} text="Weida geht's" />}
      </div>
    </Backdrop>
  ) : null;
};
