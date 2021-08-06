import { getLeaderBoardsByActIdEndpoint } from "../../../src/endpoints/valorant/RankedV1";

describe("Test suite for Valorant Ranked-V1 Endpoint generators", () => {
  test("Tests getLeaderBoardsByActIdEndpoint", () => {
    const actId = "1337-Act-Id";
    expect(getLeaderBoardsByActIdEndpoint(actId)).toBe(`/ranked/v1/leaderboards/by-act/${actId}`);
  });
});
