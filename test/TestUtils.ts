import { ApiCaller } from "../src/@types/Api";

export function noOpApiCaller(): ApiCaller {
  return async (request: any) => {
    return request;
  };
}
