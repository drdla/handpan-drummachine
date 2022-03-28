import styled from 'styled-components';

import {Box, Button} from '~/components';

import {transparentize} from '~/lib';

import {useModal} from './useModal';

const Backdrop = styled(Box)`
  align-items: center;
  background: ${({theme}) => transparentize(theme.color.background.offBlack, 3)};
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: fixed;
  width: 100vw;
  z-index: ${({theme}) => theme.zIndex.topmost1};
`;

const ModalTitle = styled.h2`
  padding-bottom: ${({theme}) => theme.size.default};
  padding-top: ${({theme}) => theme.size.default};
  text-align: center;
`;

const ModalBody = styled.div`
  min-height: 12em;

  p:last-child {
    margin-bottom: 0;
  }
`;

const ModalActions = styled.div`
  padding-top: ${({theme}) => theme.size.default};
`;

const Card = styled.div`
  background: ${({theme}) => theme.color.background.white};
  box-shadow: ${({theme}) => theme.boxShadow.elevated};
  border-radius: ${({theme}) => theme.border.radius.default};
  min-width: 34em;
  padding: ${({theme}) => theme.size.default};
`;

export const Modal = () => {
  const {hide, modal} = useModal(({hide, modal}) => ({
    hide,
    modal,
  }));

  const handleAction = (e) => {
    e.preventDefault();
    modal?.action && modal.action();
    hide();
  };

  return modal ? (
    <Backdrop onClick={hide}>
      <Card onMouseDown={(e) => e.stopPropagation()} onClick={(e) => e.stopPropagation()}>
        {modal?.title && <ModalTitle>{modal.title}</ModalTitle>}
        {modal?.content && <ModalBody>{modal.content}</ModalBody>}
        {modal?.action && (
          <ModalActions>
            <Button onClick={handleAction} text="Weida geht's" size="large" fullWidth />
          </ModalActions>
        )}
      </Card>
    </Backdrop>
  ) : null;
};
