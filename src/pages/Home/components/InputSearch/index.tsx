import * as S from './styles';

interface IInputSearchProps {
  searchTerm: string;
  onSearchTerm: (value: string) => void;
}

const InputSearch = ({ searchTerm, onSearchTerm }: IInputSearchProps) => (
  <S.Wrapper
    value={searchTerm}
    onChange={(e) => onSearchTerm(e.target.value)}
    placeholder="Buscar..."
  />
);

export default InputSearch;
