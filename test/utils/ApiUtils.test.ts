import { getApiUrl } from "../../src/utils/ApiUtils";
import { Game, ValRegions } from "../../src/@types/Api";

test("Tests api-utls/getApiUrl returns expected URL", () => {
  expect(getApiUrl(ValRegions.NA, Game.VALORANT)).toBe("https://na.api.riotgames.com/val");
});
