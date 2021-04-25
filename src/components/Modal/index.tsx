import { MdClose } from 'react-icons/md';

import * as S from './styles';

interface IModal {
  handleCloseModal: () => void;
}

const Modal = ({ handleCloseModal }: IModal) => {
  return (
    <S.Overlay>
      <S.Wrapper>
        <header>
          <p>Modal</p>
          <MdClose size={25} color="#666360" onClick={handleCloseModal} />
        </header>
      </S.Wrapper>
    </S.Overlay>
  );
};

export default Modal;
