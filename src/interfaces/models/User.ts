import ModelCreation from './ModelCreation';

export interface IUser extends ModelCreation {
  id: string;
  name: string;
  email: string;
}
