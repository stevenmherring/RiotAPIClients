import { BaseClient } from "../BaseClient";
import { PUUID } from "../../@types/Account";
import {
  getMatchesByMatchIdEndpoint,
  getMatchListsByPuuIdEndpoint,
  getRecentMatchesByQueueEndpoint,
} from "../../endpoints/valorant/MatchV1";

export class MatchClientV1 extends BaseClient {
  async getMatchesByMatchId(matchId: string) {
    return await this.caller({ ...this.callerParams, endpoint: getMatchesByMatchIdEndpoint(matchId) });
  }

  async getMatchListsByPuuId(puuid: PUUID) {
    return await this.caller({ ...this.callerParams, endpoint: getMatchListsByPuuIdEndpoint(puuid) });
  }

  async getRecentMatchesByQueue(queue: string) {
    return await this.caller({ ...this.callerParams, endpoint: getRecentMatchesByQueueEndpoint(queue) });
  }
}
