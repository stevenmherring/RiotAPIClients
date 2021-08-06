import { BaseClient } from "../BaseClient";

import { getContentsEndpoint } from "../../endpoints/valorant/ContentV1";

export class ContentClientV1 extends BaseClient {
  async getContents() {
    return await this.caller({ ...this.callerParams, endpoint: getContentsEndpoint() });
  }
}
