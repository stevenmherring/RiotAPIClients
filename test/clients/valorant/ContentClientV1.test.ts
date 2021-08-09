import { ContentClientV1 } from "../../../src/clients/valorant/ContentClientV1";
import { Game, ValRegions } from "../../../src/@types/Api";

import { getContentsEndpoint } from "../../../src/endpoints";
import { getApiUrl } from "../../../src/utils/ApiUtils";

import { noOpApiCaller } from "../../TestUtils";

const contentClient = new ContentClientV1({
  caller: noOpApiCaller(),
  region: ValRegions.NA,
  game: Game.VALORANT,
  apiKey: "1337-API-KEY",
});

describe("Test suite for the Content Client", () => {
  test("Test getContent", async () => {
    const response = await contentClient.getContents();
    expect(response.url).toBe(getApiUrl(ValRegions.NA, Game.VALORANT));
    expect(response.endpoint).toBe(getContentsEndpoint());
  });
});
