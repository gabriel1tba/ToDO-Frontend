export interface ITextArea
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  error: string | undefined;
}
