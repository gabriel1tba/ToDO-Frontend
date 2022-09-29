import * as S from './styles';

export interface ICheckBox extends React.InputHTMLAttributes<HTMLInputElement> {
  border?: 'round' | 'square';
}

const CheckBox = ({ border = 'square', ...rest }: ICheckBox) => {
  return <S.Wrapper border={border} type="checkbox" {...rest} />;
};

export default CheckBox;
