import ReactDOM from 'react-dom';

import * as S from './styles';

export interface ILoader {
  isLoading?: boolean;
  alwaysOnTop?: boolean;
  size: number;
  color?: 'white' | 'primary';
}

const Loader = ({
  isLoading = true,
  alwaysOnTop = false,
  color = 'primary',
  size,
}: ILoader) => {
  const portalRoot = document.querySelector('#portal-loader-root') as Element;

  if (!isLoading) return null;

  return alwaysOnTop ? (
    ReactDOM.createPortal(
      <S.Overlay>
        <S.Loader size={size} color={color} data-testid="loader" />
      </S.Overlay>,
      portalRoot
    )
  ) : (
    <S.Loader size={size} color={color} />
  );
};

export default Loader;
