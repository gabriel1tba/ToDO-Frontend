import { MdClose } from 'react-icons/md';

import * as S from './styles';

interface IModal {
  title: string;
  children: React.ReactNode;
  openModal: boolean;
  handleCloseModal: () => void;
}

const Modal = ({ children, title, handleCloseModal, openModal }: IModal) => {
  return openModal ? (
    <S.Overlay>
      <S.Wrapper>
        <header>
          <p>{title}</p>
          <MdClose size={20} color="#666360" onClick={handleCloseModal} />
        </header>

        <S.ModalWrapper>{children}</S.ModalWrapper>
      </S.Wrapper>
    </S.Overlay>
  ) : null;
};

export default Modal;
