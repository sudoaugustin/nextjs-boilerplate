import { yupResolver } from '@hookform/resolvers/yup';
import { HTMLAttributes, ReactNode } from 'react';
import { DefaultValues, FieldValues, FormProvider, Path, SubmitHandler, UseFormReturn, UseFormSetValue, useForm } from 'react-hook-form';
import request, { RespondError } from 'utils/request';
import { SchemaOf } from 'yup';

type Props<TValues extends FieldValues,> = Omit<HTMLAttributes<HTMLFormElement>, 'onError' | 'onSubmit' | 'onSuccess'> & {
  url?: string;
  schema: SchemaOf<TValues>;
  initial?: DefaultValues<TValues>;
  reshape?: (values: TValues) => unknown;
  children: ReactNode | ((arg: UseFormReturn<TValues>) => ReactNode);
  onError: (
    options: RespondError & {
      values: TValues;
      setValue: UseFormSetValue<TValues>;
      setError: (name: never, msg: string) => void;
    },
  ) => void;
  onSubmit: SubmitHandler<TValues>;
  onSuccess: <TData>(arg: { data: TData; values: TValues }) => void;
};

export default function Form<TValues extends FieldValues>({
  url,
  schema,
  initial,
  reshape,
  children,
  onError,
  onSubmit,
  onSuccess,
  ...rest
}: Props<TValues>) {
  const form = useForm<TValues>({ resolver: yupResolver(schema), defaultValues: initial });

  const handleSubmit: SubmitHandler<TValues> = (values) => {
    if (url) {
      return request(url, { type: 'multipart', payload: reshape ? reshape(values) : values })
        .then((data) => onSuccess?.({ data, values }))
        .catch((error) => {
          onError?.({
            ...error,
            values,
            setValue: form.setValue,
            setError: (name, message) => form.setError(name, { type: 'validate', message }),
          });
        });
    }
  };

  return (
    <FormProvider {...form}>
      <form {...rest} onSubmit={form.handleSubmit(onSubmit || handleSubmit)}>
        {typeof children === 'function' ? children(form) : children}
      </form>
    </FormProvider>
  );
}
