import * as S from './styles';

interface IModal {
  handleCloseModal: () => void;
}

const Modal = ({ handleCloseModal }: IModal) => {
  return (
    <S.Overlay>
      <S.Container>
        <header>Editar</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level</p>

        <button onClick={handleCloseModal}>
          <img src="/icons/close.svg" alt="Icone de fechar" />
        </button>
      </S.Container>
    </S.Overlay>
  );
};

export default Modal;
