import CreatePortalWrapper from 'components/CreatePortalWrapper';
import { MdClose } from 'react-icons/md';

import * as S from './styles';

export interface IModal {
  title: string;
  children: React.ReactNode;
  open: boolean;
  onCloseModal: () => void;
}

const Modal = ({ title, children, open, onCloseModal }: IModal) => {
  if (!open) return null;

  return (
    <CreatePortalWrapper divElementId="modal-root">
      <S.Overlay>
        <S.Wrapper>
          <header>
            <h1>{title}</h1>
            <button onClick={onCloseModal}>
              <MdClose size={30} />
            </button>
          </header>

          <S.ModalWrapper>{children}</S.ModalWrapper>
        </S.Wrapper>
      </S.Overlay>
    </CreatePortalWrapper>
  );
};

export default Modal;
