import ReactDOM from 'react-dom';
import { MdClose } from 'react-icons/md';

import * as S from './styles';

interface IModal {
  title: string;
  children: React.ReactNode;
  openModal: boolean;
  handleCloseModal: () => void;
}

const Modal = ({ title, children, openModal, handleCloseModal }: IModal) => {
  const portalRoot = document.querySelector('#portal-modal-root') as Element;

  if (!openModal) return null;

  return ReactDOM.createPortal(
    <S.Overlay>
      <S.Wrapper>
        <header>
          <p>{title}</p>
          <MdClose size={20} color="#666360" onClick={handleCloseModal} />
        </header>

        <S.ModalWrapper>{children}</S.ModalWrapper>
      </S.Wrapper>
    </S.Overlay>,
    portalRoot,
  );
};

export default Modal;
