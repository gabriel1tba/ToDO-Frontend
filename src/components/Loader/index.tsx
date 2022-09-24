import ReactDOM from 'react-dom';

import * as S from './styles';

import { ILoader } from './interfaces';

const Loader = ({
  isLoading = true,
  alwaysOnTop = false,
  color = 'main',
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
