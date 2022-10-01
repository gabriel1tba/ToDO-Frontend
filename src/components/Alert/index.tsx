import Button from 'components/Button';

import * as S from './styles';

export interface IAlert {
  title: string;
  description: string;
  isOpen: boolean;
  isLoading?: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const Alert = ({
  title,
  description,
  isOpen,
  isLoading,
  onClose,
  onConfirm,
}: IAlert) => {
  if (!isOpen) return null;

  return (
    <S.Overlay>
      <S.Wrapper>
        <h1>{title}</h1>
        <p>{description}</p>
        <div>
          <Button disabled={isLoading} color="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button loading={isLoading} color="danger" onClick={onConfirm}>
            Sim, excluir
          </Button>
        </div>
      </S.Wrapper>
    </S.Overlay>
  );
};

export default Alert;
