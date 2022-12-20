import { useTheme } from 'styled-components';

import Badge from 'components/Badge';

import * as S from './styles';

interface IQuantities {
  completeds: number;
  total: number;
}

interface ITasksInformationProps {
  quantities: IQuantities;
}

const TasksInformation = ({ quantities }: ITasksInformationProps) => {
  const theme = useTheme();

  return (
    <S.Wrapper>
      <div>
        <p>Tarefas criadas</p>
        <Badge
          title={quantities.total}
          color={theme.colors.gray[100]}
          background={theme.colors.gray[700]}
        />
      </div>

      <div>
        <p>Concluídas</p>
        <Badge
          title={`${quantities.completeds} de ${quantities.total} `}
          color={theme.colors.gray[100]}
          background={theme.colors.gray[700]}
        />
      </div>
    </S.Wrapper>
  );
};

export default TasksInformation;
