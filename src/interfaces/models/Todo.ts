import ModelCreation from './ModelCreation';

export interface ITodo extends ModelCreation {
  id: string;
  user_id: string;
  completed: boolean;
  title: string;
  description: string | null;
}
