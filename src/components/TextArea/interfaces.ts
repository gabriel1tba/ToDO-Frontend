export interface ITextArea
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error: string | undefined;
}
