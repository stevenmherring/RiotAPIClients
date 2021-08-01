import { BaseApiUrl, Game, Region } from "../@types/Api";

export function getApiUrl(region: Region, game: Game): string {
  let url = BaseApiUrl;
  url = url.replace("<region>", region);
  url = url.replace("<game>", game);
  return url;
}
