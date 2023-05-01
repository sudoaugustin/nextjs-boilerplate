import Field, { FieldProps } from './field';
import * as Label from '@radix-ui/react-label';
import * as $Radio from '@radix-ui/react-radio-group';
import { cookOptions } from 'utils';

type Props = FieldProps & $Radio.RadioGroupProps & { options: Options };

export default function Radio({ name, label, options, orientation = 'horizontal', ...rest }: Props) {
  return (
    <Field name={name} label={label}>
      {({ value, setValue }) => (
        <$Radio.Root
          {...rest}
          name={name}
          value={value}
          className={`flex ${orientation === 'horizontal' ? 'space-x-4' : 'space-y-4 flex-col'}`}
          orientation={orientation}
          onValueChange={setValue}
        >
          {cookOptions(options).map(({ label, value }) => (
            <div key={value} className='inline-flex items-center space-x-1.5'>
              <$Radio.Item id={value} value={value} className='radio rounded-full radix-state-checked:border-[5px]' />
              <Label.Root htmlFor={value} className="cursor-pointer">
                {label}
              </Label.Root>
            </div>
          ))}
        </$Radio.Root>
      )}
    </Field>
  );
}
