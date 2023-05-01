import Field, { FieldProps } from './field';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid';
import { HTMLProps, ReactNode, useState } from 'react';

type Props = FieldProps &
  HTMLProps<HTMLInputElement> & {
    prefix?: (params: { value: unknown; error?: string }) => ReactNode;
    postfix?: (params: { value: unknown; error?: string }) => ReactNode;
  };

export default function Input({ name, label, prefix, postfix, ...rest }: Props) {
  return (
    <Field<string | number> name={name} label={label}>
      {({ error, value = '', setValue }) => (
        <div className={`input ${error && 'error'}`}>
          {prefix ? prefix({ value, error }) : null}
          <input
            {...rest}
            id={name}
            name={name}
            value={value}
            className="flex-1 px-3"
            onChange={({ target }) => setValue(target.type === 'number' ? target.valueAsNumber : target.value)}
          />
          {postfix ? postfix({ value, error }) : null}
        </div>
      )}
    </Field>
  );
}

export function Password(props: Props) {
  const [isShow, setShow] = useState(false);
  const handleToggle = () => setShow((v) => !v);
  return (
    <Input
      {...props}
      type={isShow ? 'password' : 'text'}
      postfix={({ value }) => (
        <button
          className={`postfix cursor-pointer text-gray-500 [&>svg]:w-5 ${!value && 'hidden'}`}
          onClick={handleToggle}
          onKeyUp={handleToggle}
        >
          {isShow ? <EyeIcon /> : <EyeSlashIcon />}
        </button>
      )}
      autoComplete="off"
    />
  );
}
