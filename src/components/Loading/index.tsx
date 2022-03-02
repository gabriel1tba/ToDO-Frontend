import ReactDOM from 'react-dom';

import * as S from './styles';

import { ILoading } from './interfaces';

const Loading = ({ isLoading = true }: ILoading) => {
  const portalRoot = document.querySelector('#portal-loader-root') as Element;

  if (!isLoading) return null;

  return ReactDOM.createPortal(
    <S.Overlay>
      <div id="loader" />
    </S.Overlay>,
    portalRoot
  );
};

export default Loading;
