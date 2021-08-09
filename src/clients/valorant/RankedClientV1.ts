import { BaseClient } from "../BaseClient";
import { getLeaderBoardsByActIdEndpoint } from "../../endpoints/valorant/RankedV1";

export class RankedClientV1 extends BaseClient {
  async getLeaderBoardsByActId(actId: string) {
    return await this.caller({ ...this.callerParams, endpoint: getLeaderBoardsByActIdEndpoint(actId) });
  }
}
