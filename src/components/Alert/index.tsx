import Button from 'components/Button';
import * as S from './styles';

interface AlertProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const Alert = ({
  title,
  description,
  isOpen,
  onClose,
  onConfirm,
}: AlertProps) => {
  if (!isOpen) return null;

  return (
    <S.Overlay>
      <S.Wrapper>
        <h1>{title}</h1>
        <p>{description}</p>
        <div>
          <Button color="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button color="danger" onClick={onConfirm}>
            Sim, excluir
          </Button>
        </div>
      </S.Wrapper>
    </S.Overlay>
  );
};

export default Alert;
