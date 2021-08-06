import { MatchClientV1 } from "../../../src/clients/valorant/MatchClientV1";
import { Game, ValRegions } from "../../../src/@types/Api";

import {
  getMatchesByMatchIdEndpoint,
  getMatchListsByPuuIdEndpoint,
  getRecentMatchesByQueueEndpoint,
} from "../../../src/endpoints";
import { getApiUrl } from "../../../src/utils/ApiUtils";

import { noOpApiCaller } from "../../TestUtils";

const matchClient = new MatchClientV1({
  caller: noOpApiCaller(),
  region: ValRegions.NA,
  game: Game.VALORANT,
  apiKey: "1337-API-KEY",
});

describe("Test suite for the Match Client", () => {
  test("Test getMatchListsByPuuId", async () => {
    const puuid = "1337-puuid";
    const response = await matchClient.getMatchListsByPuuId(puuid);
    expect(response.url).toBe(getApiUrl(ValRegions.NA, Game.VALORANT));
    expect(response.endpoint).toBe(getMatchListsByPuuIdEndpoint(puuid));
  });

  test("Test getMatchesByMatchId", async () => {
    const matchId = "1337-matchId";
    const response = await matchClient.getMatchesByMatchId(matchId);
    expect(response.url).toBe(getApiUrl(ValRegions.NA, Game.VALORANT));
    expect(response.endpoint).toBe(getMatchesByMatchIdEndpoint(matchId));
  });

  test("Test getMatchListsByPuuId", async () => {
    const queue = "1337-queue";
    const response = await matchClient.getRecentMatchesByQueue(queue);
    expect(response.url).toBe(getApiUrl(ValRegions.NA, Game.VALORANT));
    expect(response.endpoint).toBe(getRecentMatchesByQueueEndpoint(queue));
  });
});
