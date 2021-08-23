import Axios, { AxiosRequestConfig, Method } from "axios";

import { CallerParams } from "../@types/Api";

export async function axiosApiCaller(params: CallerParams) {
  const fullUrl = `${params.url}${params.endpoint}`;
  const axiosRequestConfig = new RiotRequestConfig({ ...params, url: fullUrl });
  return Axios(axiosRequestConfig).catch((error) => {
    console.log(`API Error::\nRequest=${JSON.stringify(axiosRequestConfig)}\nResponse=${JSON.stringify(error)}`);
    throw error;
  });
}

class RiotRequestConfig implements AxiosRequestConfig {
  readonly headers = {};
  readonly url: string;
  readonly method: Method;
  constructor(params: RiotRequestConfigParams) {
    this.headers = {
      "X-Riot-Token": params.apiKey,
      "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    };
    this.url = params.url;
    this.method = "GET";
  }
}

export interface RiotRequestConfigParams {
  url: string;
  apiKey: string;
}
