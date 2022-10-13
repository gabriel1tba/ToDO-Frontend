import Button from 'components/Button';
import CreatePortalWrapper from 'components/CreatePortalWrapper';

import * as S from './styles';

export interface IAlert {
  title: string;
  description: string;
  isOpen: boolean;
  isLoading?: boolean;
  cancelLabel?: string;
  confirmLabel?: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const Alert = ({
  isOpen,
  isLoading,
  title,
  description,
  cancelLabel = 'Cancelar',
  confirmLabel = 'Confirmar',
  onCancel,
  onConfirm,
}: IAlert) => {
  if (!isOpen) return null;

  return (
    <CreatePortalWrapper>
      <S.Overlay>
        <S.Wrapper>
          <h1>{title}</h1>
          <p>{description}</p>
          <div>
            <Button disabled={isLoading} variant="outline" onClick={onCancel}>
              {cancelLabel}
            </Button>
            <Button loading={isLoading} variant="danger" onClick={onConfirm}>
              {confirmLabel}
            </Button>
          </div>
        </S.Wrapper>
      </S.Overlay>
    </CreatePortalWrapper>
  );
};

export default Alert;
