import { useController } from 'react-hook-form';

export default function useField<TValue>(name: string) {
  const {
    field: { ref, value, onChange },
    fieldState,
  } = useController({ name });

  return {
    ref,
    error: fieldState.error?.message,
    value: value as TValue | undefined,
    setValue: onChange,
  };
}
