import * as S from './styles';

export interface ICheckBox extends React.InputHTMLAttributes<HTMLInputElement> {
  border?: 'round' | 'square';
}

const CheckBox = ({ border = 'square', ...props }: ICheckBox) => (
  <S.Wrapper border={border} type="checkbox" {...props} />
);

export default CheckBox;
