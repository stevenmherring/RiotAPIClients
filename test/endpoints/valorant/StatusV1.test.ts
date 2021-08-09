import { getStatusForPlatformEndpoint } from "../../../src/endpoints/valorant/StatusV1";

describe("Test suite for Valorant Status-V1 Endpoint generators", () => {
  test("Tests getStatusForPlatformEndpoint", () => {
    expect(getStatusForPlatformEndpoint()).toBe("/status/v1/platform-data");
  });
});
