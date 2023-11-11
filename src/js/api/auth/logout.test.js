import { localstorageMockFactory } from "../../mocks/localStorageMock";
import { mockFetchPass } from "../../mocks/fetch_Mock";
import { logout } from "./logout";
global.fetch = mockFetchPass;

describe("it removes 'token' and 'profile' from localstorage", () => {
  beforeEach(() => {
    global.localStorage = localstorageMockFactory();
    localStorage.setItem("token", JSON.stringify(542));
    localStorage.setItem(
      "profile",
      JSON.stringify({ name: "test", email: "lala@john.doe" }),
    );
  });
  it("removes 'token and profile from  from localstorage'", () => {
    logout();
    expect(localStorage.getItem("token")).toBeUndefined();
    expect(localStorage.getItem("profile")).toBeUndefined();
  });
});
