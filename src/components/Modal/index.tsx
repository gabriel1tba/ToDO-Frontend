import { MdClose } from 'react-icons/md';

import * as S from './styles';

interface IModal {
  handleCloseModal: () => void;
}

const Modal = ({ handleCloseModal }: IModal) => {
  return (
    <S.Overlay onClick={handleCloseModal}>
      <S.Wrapper>
        <header>Editar</header>
        <MdClose size={20} onClick={handleCloseModal}></MdClose>
      </S.Wrapper>
    </S.Overlay>
  );
};

export default Modal;
