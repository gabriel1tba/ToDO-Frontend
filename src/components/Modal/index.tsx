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
          <p>{title}</p>
          <button onClick={onCloseModal}>
            <MdClose size={30} color="#666360" />
          </button>
        </header>

        <S.ModalWrapper>{children}</S.ModalWrapper>
      </S.Wrapper>
    </S.Overlay>,
    portalRoot
  );
};

export default Modal;
