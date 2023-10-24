import { remove } from "../../storage";
import { localstorageMuckFactory } from "../../mocks/localStorageMock";
import { mockFetchPass } from "../../mocks/fetch_Mock";
global.fetch = mockFetchPass;

describe("it removes 'token' and 'profile' from localstorage", () => {
  beforeEach(() => {
    global.localStorage = localstorageMuckFactory();
    localStorage.setItem("token", JSON.stringify(542));
    localStorage.setItem(
      "profile",
      JSON.stringify({ name: "test", email: "lala@john.doe" }),
    );
  });
  it("removes 'token from localstorage'", () => {
    remove("token");
    expect(localStorage.getItem("token")).toBeUndefined();
  });
  it("removes 'profile from localstorage'", () => {
    remove("profile");
    expect(localStorage.getItem("profile")).toBeUndefined();
  });
});
