export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  color?: 'primary' | 'warning' | 'danger' | 'orange';
  icon?: JSX.Element;
  size?: 'large' | 'normal';
}
