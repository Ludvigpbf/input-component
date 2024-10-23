export interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  value?: string | number;
  className?: string;
  containerClassName?: string;
  floatingLabel?: boolean;
  placeholder?: string;
  id?: string;
  "data-id"?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  requiredColor?: string;
  requiredPosition?: string;
  fontColor?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  font?: string;
  fontSize?: string;
  borderRadius?: string;
  margin?: string;
  padding?: string;
}
