import Field, { FieldProps } from './field';
import { HTMLProps } from 'react';

type Props = FieldProps & HTMLProps<HTMLTextAreaElement>;

export default function Textarea({ name, label, ...rest }: Props) {
  return (
    <Field name={name} label={label}>
      {({ value, error, setValue }) => (
        <textarea
          {...rest}
          value={value}
          className={`textarea p-3 min-h-[5rem] max-h-60 ${error && 'error'}`}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
    </Field>
  );
}
