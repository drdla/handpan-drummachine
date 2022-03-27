import produce from 'immer';
import create, {GetState, SetState} from 'zustand';

type Modal = {
  action?: Function;
  content: string;
  title?: string;
};

type ModalStore = {
  modal?: Modal;
  show: (content: string, title: string, action: Function) => void;
  hide: () => void;
};

export const useModal = create<ModalStore>((set: SetState<ModalStore>, get: GetState<ModalStore>) => ({
  modal: undefined,
  show: (content, title = '', action = () => {}) => {
    set(
      produce((state) => {
        state.modal = {
          action,
          content,
          title,
        };
      })
    );
  },
  hide: () =>
    set(
      produce((state) => {
        state.modal = undefined;
      })
    ),
}));
