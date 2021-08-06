import { PUUID } from "../../../src/@types/Account";
import {
  getMatchesByMatchIdEndpoint,
  getMatchListsByPuuIdEndpoint,
  getRecentMatchesByQueueEndpoint,
} from "../../../src/endpoints/valorant/MatchV1";

describe("Test suite for Valorant Match-V1 Endpoint generators", () => {
  test("Tests getMatchesByMatchIdEndpoint", () => {
    const matchId = "1337";
    expect(getMatchesByMatchIdEndpoint(matchId)).toBe(`/match/v1/matches/${matchId}`);
  });
  test("Tests getMatchListsByPuuIdEndpoint", () => {
    const puuid: PUUID = "1337-PUUID-7331";
    expect(getMatchListsByPuuIdEndpoint(puuid)).toBe(`/match/v1/matchlists/by-puuid/${puuid}`);
  });
  test("Tests getRecentMatchesByQueueEndpoint", () => {
    const queue = "1337Queue";
    expect(getRecentMatchesByQueueEndpoint(queue)).toBe(`/match/v1/recent-matches/by-queue/${queue}`);
  });
});
