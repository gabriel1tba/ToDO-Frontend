export interface IModal {
  title: string;
  children: React.ReactNode;
  open: boolean;
  onCloseModal: () => void;
}
