import { FieldProps } from './field';
import { CheckIcon } from '@heroicons/react/20/solid';
import * as $Checkbox from '@radix-ui/react-checkbox';
import * as Label from '@radix-ui/react-label';
import useField from 'hooks/field';

type Props = FieldProps & $Checkbox.CheckboxProps;

export default function Checkbox({ name, label, ...rest }: Props) {
  const { value, setValue } = useField(name);
  return (
    <fieldset className="flex items-center space-x-2">
      <$Checkbox.Root
        {...rest}
        id={name}
        checked={value}
        className="checkbox rounded radix-state-checked:bg-brand-600"
        onCheckedChange={(checked) => typeof checked === 'boolean' && setValue(checked)}
      >
        <$Checkbox.Indicator>
          <CheckIcon className='w-3.5 text-white' />
        </$Checkbox.Indicator>
      </$Checkbox.Root>
      <Label.Root htmlFor={name} className="cursor-pointer">
        {label}
      </Label.Root>
    </fieldset>
  );
}
