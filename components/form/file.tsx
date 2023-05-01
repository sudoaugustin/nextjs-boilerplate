import Field, { FieldProps } from './field';
import { MouseEventHandler, ReactNode, useRef } from 'react';

type Props = FieldProps & {
  type?: 'image';
  multiple?: boolean;
  children: (arg: { files: File[]; setFiles: (v: File[]) => void; openFiles: MouseEventHandler<HTMLElement> }) => ReactNode;
};

export default function File({ type, name, label, children, multiple }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  const types = { image: 'image/jpeg, image/png, image/jpg' };

  return (
    <Field<File[]> name={name} label={label}>
      {({ value = [], setValue }) => (
        <>
          <input
            ref={ref}
            type="file"
            name={name}
            hidden
            accept={type && types[type]}
            multiple={multiple}
            onChange={({ target: { files } }) => {
              files && setValue((prevFiles) => (multiple ? [...prevFiles, ...Array.from(files)] : Array.from(files)));
            }}
          />
          {children({ files: value, setFiles: setValue, openFiles: () => ref?.current?.click() })}
        </>
      )}
    </Field>
  );
}

export type { Props as FileProps };
