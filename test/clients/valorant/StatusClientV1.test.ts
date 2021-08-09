import { StatusClientV1 } from "../../../src/clients/valorant/StatusClientV1";
import { Game, ValRegions } from "../../../src/@types/Api";

import { getApiUrl } from "../../../src/utils/ApiUtils";

import { noOpApiCaller } from "../../TestUtils";
import { getStatusForPlatformEndpoint } from "../../../src/endpoints";

const statusClient = new StatusClientV1({
  caller: noOpApiCaller(),
  region: ValRegions.NA,
  game: Game.VALORANT,
  apiKey: "1337-API-KEY",
});

describe("Test suite for the Status Client", () => {
  test("Test getStatus for platforms", async () => {
    const response = await statusClient.getStatus();
    expect(response.url).toBe(getApiUrl(ValRegions.NA, Game.VALORANT));
    expect(response.endpoint).toBe(getStatusForPlatformEndpoint());
  });
});
