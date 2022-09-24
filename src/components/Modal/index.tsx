import ReactDOM from 'react-dom';
import { MdClose } from 'react-icons/md';

import * as S from './styles';

import { IModal } from './interfaces';

const Modal = ({ title, children, open, onCloseModal }: IModal) => {
  const portalRoot = document.querySelector('#portal-modal-root') as Element;

  if (!open) return null;

  return ReactDOM.createPortal(
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
    </S.Overlay>,
    portalRoot
  );
};

export default Modal;
