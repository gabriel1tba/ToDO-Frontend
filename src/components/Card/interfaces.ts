export interface ICard {
  title: string;
  color?: 'info' | 'danger';
  description?: string;
  icon: React.ElementType;
}
