import { save } from "./save";
import { localstorageMuckFactory } from "../mocks/fetchMock";
global.localStorage = localstorageMuckFactory();

describe("saves a key, and a stringified value localstorage", () => {
  it("saves a key and value to localstorage", () => {
    save("key", 3452);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "key",
      JSON.stringify(3452),
    );
  });
});
