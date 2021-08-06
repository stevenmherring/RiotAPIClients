import { BaseClient } from "../BaseClient";
import { getStatusForPlatformEndpoint } from "../../endpoints/valorant/StatusV1";

export class StatusClientV1 extends BaseClient {
  async getStatus() {
    return await this.caller({ ...this.callerParams, endpoint: getStatusForPlatformEndpoint() });
  }
}
