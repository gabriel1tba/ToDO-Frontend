export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  color?: 'primary' | 'blue' | 'warning' | 'danger' | 'success';
  icon?: JSX.Element;
  size?: 'large' | 'normal';
}
