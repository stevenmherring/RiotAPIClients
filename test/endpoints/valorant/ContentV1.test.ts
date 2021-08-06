import { getContentsEndpoint } from "../../../src/endpoints/valorant/ContentV1";

describe("Test suite for Valorant Match-V1 Endpoint generators", () => {
  test("Test getContentsEndpoint generator matches expected endpoint", () => {
    expect(getContentsEndpoint()).toBe("/content/v1/contents");
  });
});
