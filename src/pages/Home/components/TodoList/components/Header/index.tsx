import { BiPlusCircle } from 'react-icons/bi';

import Button from 'components/Button';

import * as S from './styles';

interface IHeaderProps {
  searchTerm: string;
  onSearchTerm: (value: string) => void;
  onToggleModal: () => void;
}

const Header = ({ searchTerm, onSearchTerm, onToggleModal }: IHeaderProps) => (
  <S.Wrapper>
    <input
      value={searchTerm}
      onChange={(e) => onSearchTerm(e.target.value)}
      placeholder="Buscar..."
    />

    <Button variant="primary" icon={<BiPlusCircle />} onClick={onToggleModal}>
      Nova tarefa
    </Button>
  </S.Wrapper>
);

export default Header;
