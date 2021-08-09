import { BaseClient } from "../../src/clients/BaseClient";
import { Game, ValRegions } from "../../src/@types/Api";

import { noOpApiCaller } from "../TestUtils";

afterEach(() => {
  process.env.RIOT_API_KEY = "";
});

describe("Test suite for the Base Client", () => {
  test("Test BaseClient class successfully creates", () => {
    const baseClient = getBaseApiClient({ apiKey: "1337-API-KEY" });
    expect(baseClient).toBeDefined();
  });

  test("Test BaseClient class successfully creates with API Key in environment", () => {
    process.env.RIOT_API_KEY = "1337-API-KEY";

    const baseClient = getBaseApiClient();
    expect(baseClient).toBeDefined();
  });

  test("Test BaseClient class throws an error with no API Key", () => {
    expect(() => {
      getBaseApiClient();
    }).toThrow("No API KEY Provided. Can not initialize API Client");
  });
});

function getBaseApiClient(overrides = {}) {
  const baseClient = new BaseClient({
    caller: noOpApiCaller(),
    region: ValRegions.NA,
    game: Game.VALORANT,
    ...overrides,
  });

  return baseClient;
}
