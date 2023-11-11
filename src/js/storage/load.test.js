import { localstorageMockFactory } from "../mocks/localStorageMock.js";
import { load } from "./load.js";
import { save } from "./save.js";

global.localStorage = localstorageMockFactory();

it("gets a parsed value from localstorage using a key", () => {
  save("test", 345);
  expect(load("test")).toEqual(345);
});
