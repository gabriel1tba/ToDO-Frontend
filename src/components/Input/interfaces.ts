import { IconBaseProps } from 'react-icons';

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
  error: string | undefined;
}
