import { Method } from 'axios'
import type { AxiosResponseHeaders } from 'axios'

export type RequestOptions<Data = string | object> = {
    method: Method;
    baseURL: string;
    url?: string;
    params?: Record<string,string | readonly string[]>;
    headers?: AxiosResponseHeaders | Record<string,string>;
    data?: Data;
    timeout?: number
}

export type Id = {
  _id: string
}

export interface RequestParams<T> {
  data?: T,
  token?: string,
}