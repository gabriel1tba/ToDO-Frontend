import ReactDOM from 'react-dom';

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
  const portalRoot = document.querySelector('#portal-loader-root') as Element;

  if (!isLoading) return null;

  return alwaysOnTop ? (
    ReactDOM.createPortal(
      <S.Overlay>
        <S.Loader size={size} variant={variant} data-testid="loader" />
      </S.Overlay>,
      portalRoot
    )
  ) : (
    <S.Loader size={size} variant={variant} />
  );
};

export default Loader;
