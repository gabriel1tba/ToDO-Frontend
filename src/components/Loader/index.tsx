import CreatePortalWrapper from 'components/CreatePortalWrapper';

import * as S from './styles';

export interface ILoader {
  isLoading?: boolean;
  alwaysOnTop?: boolean;
  size: number;
  variant?: 'white' | 'primary';
}

const Loader = ({
  isLoading = true,
  alwaysOnTop = false,
  variant = 'primary',
  size,
}: ILoader) => {
  if (!isLoading) return null;

  return alwaysOnTop ? (
    <CreatePortalWrapper divElementId="loader-root">
      <S.Overlay>
        <S.Loader size={size} variant={variant} data-testid="loader" />
      </S.Overlay>
    </CreatePortalWrapper>
  ) : (
    <S.Loader size={size} variant={variant} />
  );
};

export default Loader;
