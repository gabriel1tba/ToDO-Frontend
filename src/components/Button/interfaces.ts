export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  color?: 'primary' | 'info' | 'warning' | 'danger' | 'success' | 'outline';
  icon?: JSX.Element;
  size?: 'large' | 'normal';
}
