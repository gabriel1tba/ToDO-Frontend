import { IconBaseProps } from 'react-icons';

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  error: string | undefined;
}
