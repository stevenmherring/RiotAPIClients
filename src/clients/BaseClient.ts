import { ApiCaller, Game, Region } from "../@types/Api";
import { getApiUrl } from "../utils/ApiUtils";

export class BaseClient {
  protected readonly caller: ApiCaller;
  protected readonly apiURL: string;
  protected readonly apiKey: string | undefined;
  protected readonly callerConfig: any;
  protected callerParams: {};

  constructor(readonly params: BaseClientParams) {
    this.caller = params.caller;
    this.callerConfig = params.callerConfig ?? {};
    this.apiURL = getApiUrl(params.region, params.game);
    this.apiKey = params.apiKey || process.env.RIOT_API_KEY;

    if (!this.apiKey) {
      throw new Error("No API KEY Provided. Can not initialize API Client");
    }

    this.callerParams = { url: this.apiURL, config: this.callerConfig };

    console.debug("Base API Client initialized!");
  }
}

export interface BaseClientParams extends BaseClientOptions {
  caller: ApiCaller;
  region: Region;
  game: Game;
}

export interface BaseClientOptions {
  apiKey?: string;
  callerConfig?: any;
}
