import useSWR, { SWRConfiguration } from 'swr';
import useSWRMutation, { SWRMutationConfiguration } from 'swr/mutation';
import request, { RequestConfig, RespondError } from 'utils/request';

export function useFetch<TData = unknown, TPayload = unknown>(
  url: string,
  config: RequestConfig<TPayload> = {},
  { enable = true, ...options }: SWRConfiguration<TData, RespondError> & { enable?: boolean } = {},
) {
  const key = enable ? [url, config.payload] : null;
  const fetcher = useSWR(key, () => request<TData, TPayload>(url, config), options);

  return {
    ...fetcher,
    isError: !!fetcher.error,
  };
}

export function useMutate<TData = unknown, TPayload = unknown>(
  url: string,
  config: RequestConfig<TPayload> = {},
  options: SWRMutationConfiguration<TData, RespondError> = {},
) {
  const { trigger, ...rest } = useSWRMutation(
    url,
    (url: string, { arg }: { arg: RequestConfig<TPayload> }) => request<TData, TPayload>(url, { method: 'POST', ...config, ...arg }),
    options,
  );

  return {
    ...rest,
    mutate: trigger,
    isError: !!rest.error,
  };
}
