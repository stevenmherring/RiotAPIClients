import { PUUID } from "../../@types/Account";

const baseUrl = "/match/v1";

export const getMatchesByMatchIdEndpoint = (matchId: string) => `${baseUrl}/matches/${matchId}`;
export const getMatchListsByPuuIdEndpoint = (puuid: PUUID) => `${baseUrl}/matchlists/by-puuid/${puuid}`;
export const getRecentMatchesByQueueEndpoint = (queue: string) => `${baseUrl}/recent-matches/by-queue/${queue}`;
