import nock from "nock";

import { axiosApiCaller } from "../../src/callers/AxiosApiCaller";

const callerParams = {
  url: "http://localhost:3000",
  apiKey: "1337-API-KEY",
  endpoint: "/endpoint",
};

beforeEach(() => {
  nock.cleanAll();
});

test("Tests AxiosApiCaller", async () => {
  nock("http://localhost:3000").get("/endpoint").reply(200, { res: "sup" });

  const response = await axiosApiCaller(callerParams);

  if (response) {
    expect(response.status).toBe(200);
    expect(response.data.res).toBe("sup");
  }
  expect(response).toBeDefined();
});

test("Tests AxiosApiCaller throws error", async () => {
  nock("http://localhost:3000").get("/endpoint").reply(400, { res: "error" });

  await expect(axiosApiCaller(callerParams)).rejects.toThrow("Request failed with status code 400");
});
