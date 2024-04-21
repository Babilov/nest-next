export interface IInputProps {
  type?: string;
  value: string;
  setValue: (value: string) => void;
}

export interface IFormFieldProps extends IInputProps {
  name: string;
  error?: string;
}
