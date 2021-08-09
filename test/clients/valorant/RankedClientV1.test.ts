import { RankedClientV1 } from "../../../src/clients/valorant/RankedClientV1";
import { Game, ValRegions } from "../../../src/@types/Api";

import { getLeaderBoardsByActIdEndpoint } from "../../../src/endpoints";
import { getApiUrl } from "../../../src/utils/ApiUtils";

import { noOpApiCaller } from "../../TestUtils";

const rankedClient = new RankedClientV1({
  caller: noOpApiCaller(),
  region: ValRegions.NA,
  game: Game.VALORANT,
  apiKey: "1337-API-KEY",
});

describe("Test suite for the Ranked Client", () => {
  test("Test getLeaderBoardsByActId", async () => {
    const actId = "1337-actId";
    const response = await rankedClient.getLeaderBoardsByActId(actId);
    expect(response.url).toBe(getApiUrl(ValRegions.NA, Game.VALORANT));
    expect(response.endpoint).toBe(getLeaderBoardsByActIdEndpoint(actId));
  });
});
