import  { InputHTMLAttributes, ReactNode } from 'react';
import { InputText } from './TextComponent';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
}

export const FormField = ({ label, ...rest }: FormFieldProps) => {
  return (
    <div className="p-2 text-black rounded-2xl">
      <label>{label}</label>
      <InputText {...rest} />
    </div>
  );
};
