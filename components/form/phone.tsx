import Field, { FieldProps } from './field';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import * as Select from '@radix-ui/react-select';
import codes from 'country-calling-code';
import uniqBy from 'lodash/uniqBy';

type Props = FieldProps & {};

export default function Phone({ name, ...rest }: Props) {
  return (
    <Field name={name} {...rest}>
      {({ value = '+95-', setValue }) => {
        const [code, number] = value.split('-');
        return (
          <div className='phone'>
            <Select.Root value={code} onValueChange={(code) => setValue(`${code}-${number}`)}>
              <Select.Trigger className="w-20 pl-3 flex justify-between items-center">
                <Select.Value>{code}</Select.Value>
                <Select.Icon>
                  <ChevronDownIcon className='w-5' />
                </Select.Icon>
              </Select.Trigger>
              <Select.Content className='p-1 -ml-1 bg-white backdrop-blur-md border border-gray-50 shadow-lg rounded-lg'>
                <Select.Viewport>
                  {uniqBy(codes, 'countryCodes[0]').map(({ country, countryCodes }) => {
                    const code = `+${countryCodes[0]}`.replace('-', '');
                    return (
                      <Select.Item
                        key={code}
                        value={code}
                        className='group p-2 space-x-2 flex justify-between items-center text-sm cursor-pointer rounded-lg ring-2 ring-transparent ring-inset hover:bg-brand-50 focus:ring-brand-400 radix-state-checked:font-medium radix-state-checked:text-brand-600'
                      >
                        <Select.ItemText>{country}</Select.ItemText>
                        <span className='text-gray-400 group-radix-state-checked:text-brand-400 pl-2'>{code}</span>
                      </Select.Item>
                    );
                  })}
                </Select.Viewport>
              </Select.Content>
            </Select.Root>
            <input
              type="tel"
              name={name}
              value={number}
              className="flex-1 px-3"
              onChange={({ target }) => setValue(`${code}-${target.value}`)}
            />
          </div>
        );
      }}
    </Field>
  );
}
