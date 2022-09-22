import ReactDOM from 'react-dom';

import * as S from './styles';

import { ILoading } from './interfaces';

const Loading = ({
  isLoading = true,
  onTop = false,
  color = 'main',
  size,
}: ILoading) => {
  const portalRoot = document.querySelector('#portal-loader-root') as Element;

  if (!isLoading) return null;

  return onTop ? (
    ReactDOM.createPortal(
      <S.Overlay>
        <S.Loading size={size} color={color} />
      </S.Overlay>,
      portalRoot
    )
  ) : (
    <S.Loading size={size} color={color} />
  );
};

export default Loading;
