import * as S from './styles';

const Loading = () => (
  <S.LoadingRing>
    <div className="lds-roller">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </S.LoadingRing>
);

export default Loading;
