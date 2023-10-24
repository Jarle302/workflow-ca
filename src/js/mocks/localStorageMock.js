export function localstorageMuckFactory() {
  let storage = {};
  const localStorageMock = {
    setItem: jest.fn((key, value) => {
      storage[key] = value;
    }),
    getItem: jest.fn((key) => {
      return storage[key];
    }),
    removeItem: jest.fn((key) => {
      delete storage[key];
    }),
  };
  return localStorageMock;
}
