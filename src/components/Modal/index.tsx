import { MdClose } from 'react-icons/md';

import * as S from './styles';

interface IModal {
  handleCloseModal: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({ children, title, handleCloseModal }: IModal) => {
  return (
    <S.Overlay>
      <S.Wrapper>
        <header>
          <p>{title}</p>
          <MdClose size={20} color="#666360" onClick={handleCloseModal} />
        </header>

        <S.ModalWrapper>{children}</S.ModalWrapper>
      </S.Wrapper>
    </S.Overlay>
  );
};

export default Modal;
