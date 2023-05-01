import Field, { FieldProps } from './field';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import * as $Select from '@radix-ui/react-select';
import { cookOptions } from 'utils';

type Props = FieldProps & $Select.SelectProps & { options: Options; placeholder?: string };

export default function Select({ name, label, options, placeholder, ...rest }: Props) {
  const $options = cookOptions(options);
  const $default = $options[0].value;

  return (
    <Field name={name} label={label}>
      {({ value, error, setValue }) => (
        <$Select.Root {...rest} name={name} value={value} defaultValue={$default} onValueChange={setValue}>
          <$Select.Trigger className={`px-3 select justify-between [&>*]:flex [&>*]:flex-center ${error && 'error'}`}>
            <$Select.Value placeholder={placeholder} className='flex-1' />
            <$Select.Icon className="">
              <ChevronUpDownIcon className='w-5 text-gray-600' />
            </$Select.Icon>
          </$Select.Trigger>
          <$Select.Content className='bg-white border border-gray-50 shadow-lg rounded-lg p-1'>
            <$Select.Viewport>
              {$options.map(({ label, value }) => (
                <$Select.Item
                  key={value}
                  value={value}
                  className="p-2 rounded-lg flex items-center justify-between cursor-pointer duration-150 ring-2 ring-transparent ring-inset hover:bg-brand-50 focus:ring-brand-400 radix-state-checked:font-medium radix-state-checked:text-brand-600"
                >
                  <$Select.ItemText>{label}</$Select.ItemText>
                  <$Select.ItemIndicator>
                    <CheckIcon className='w-5 text-brand-400' />
                  </$Select.ItemIndicator>
                </$Select.Item>
              ))}
            </$Select.Viewport>
          </$Select.Content>
        </$Select.Root>
      )}
    </Field>
  );
}
