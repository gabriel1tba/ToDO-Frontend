import IModelCreation from './ModelCreation';

export interface ITodo extends IModelCreation {
  id: string;
  user_id: string;
  completed: boolean;
  title: string;
  description: string | null;
}
