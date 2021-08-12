import { ValRegions } from "../../src/@types/Api";
import { ValorantClientV1 } from "../../src/clients";

import { noOpApiCaller } from "../TestUtils";

describe("Test suite for the Valorant Client", () => {
  test("Test ValorantClientV1 class successfully creates", () => {
    const valorantClient = new ValorantClientV1({
      caller: noOpApiCaller(),
      region: ValRegions.NA,
      apiKey: "1337-API-KEY",
    });
    expect(valorantClient).toBeDefined();
    expect(valorantClient.ContentClient).toBeDefined();
    expect(valorantClient.MatchClient).toBeDefined();
    expect(valorantClient.RankedClientV1).toBeDefined();
    expect(valorantClient.StatusClientV1).toBeDefined();
  });
});
