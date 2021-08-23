export type ApiCaller = (params: CallerParams) => Promise<any>;

export interface CallerParams extends CallerOptions {
  url: string;
  endpoint: string;
  apiKey: string;
}

export interface CallerOptions {
  config?: any;
}

export const BaseApiUrl = "https://<region>.api.riotgames.com/<game>";

export enum Game {
  VALORANT = "val",
  LEGENDS_OF_RUNETERRA = "lor",
  LEAGUE_OF_LEGENDS = "lol",
  TEAM_FIGHT_TACTICS = "tft",
  RIOT = "riot",
}

export enum AccountRegions {
  AMERICAS = "americas",
  ASIA = "asia",
  ESPORTS = "esports",
  EUROPE = "europe",
}

export enum ValRegions {
  AP = "ap",
  BR = "br",
  ESPORTS = "esports",
  EU = "eu",
  KR = "kr",
  LATAM = "latam",
  NA = "na",
}

export type Region = AccountRegions | ValRegions;
