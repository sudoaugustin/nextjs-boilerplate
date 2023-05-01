import * as Label from '@radix-ui/react-label';
import useField from 'hooks/field';
import { Dispatch, ReactNode, SetStateAction } from 'react';

type Props<T> = FieldProps & {
  children: (param: {
    value: T;
    error?: string;
    setValue: Dispatch<SetStateAction<T>>;
  }) => JSX.Element;
  className?: string;
};

export type FieldProps = { name: string; label?: ReactNode };

export default function Field<T = string>({ name, label, children, className }: Props<T>) {
  const { error, value, setValue } = useField(name);

  return (
    <fieldset className={className}>
      {label && (
        <Label.Root htmlFor={name} className="inline-block cursor-pointer text-sm text-gray-800 font-medium mb-2">
          {label}
        </Label.Root>
      )}
      {children({ error, value, setValue })}
      {error && <p className='text-sm text-error-600 mt-1'>{error}</p>}
    </fieldset>
  );
}
