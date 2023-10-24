import { localstorageMuckFactory } from "../../mocks/localStorageMock.js";
import { login } from "./login.js";

import { mockFetchFail, mockFetchPass } from "../../mocks/fetch_Mock.js";
global.fetch = mockFetchPass;

describe(`if ok, saves a token in localstorage, 
deletes the token from the response object,
and return it,else it throws`, () => {
  beforeEach(() => {
    global.localStorage = localstorageMuckFactory();
  });
  it("saves a token in localstorage if response.ok", async () => {
    await login("john@doe.com", "password");
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "token",
      JSON.stringify(435),
    );
  });
  it("returns the profile without the token.", async () => {
    const profile = await login("john@doe.com", "password");
    expect(profile).not.toHaveProperty("accessToken");
  });
  it("throws an error if !resonse.ok", async () => {
    global.fetch = mockFetchFail;
    await expect(login("john@doe.com", "password")).rejects.toThrow();
  });
});
