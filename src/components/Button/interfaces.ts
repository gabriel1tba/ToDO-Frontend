export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  icon?: JSX.Element;
  size?: 'large' | 'normal';
  background: string;
}
