import axios, { RawAxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';

export type RespondError = { status: number | string; message: string };

export type RequestConfig<TPayload> = RawAxiosRequestConfig & {
  type?: 'csv' | 'multipart';
  token?: string;
  payload?: TPayload;
  headers?: RawAxiosRequestHeaders;
};

export default async function request<TData = unknown, TPayload = unknown>(url: string, config?: RequestConfig<TPayload>) {
  const formData = typeof window !== 'undefined' && new FormData();
  const { type, token, payload, method = 'POST', headers = {}, ...rest } = config || {};

  switch (type) {
    case 'csv':
      rest.responseType = 'blob';
      headers['Accept'] = 'application/csv';
      break;

    case 'multipart':
      headers['Content-Type'] = 'multipart/form-data';
      if (formData && payload) {
        Object.entries(payload).forEach(([name, value]) => {
          formData.append(name, value as string | Blob);
        });
      }
      break;

    default:
      headers['Content-Type'] = 'application/json';
  }

  return axios<TData>({
    url,
    method,
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: { ...headers, Authorization: token },
    [method !== 'GET' ? 'data' : 'params']: type === 'multipart' ? formData : payload,
    ...rest,
  })
    .then(({ data }) => data)
    .catch(({ code, message, response }) => Promise.reject({ status: response.status || code, message: response.message || message }));
}
