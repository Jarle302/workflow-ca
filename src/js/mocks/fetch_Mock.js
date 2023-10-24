export function mockFetchPass() {
  return Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        name: "test",
        accessToken: 435,
        email: "lala@john.doe",
      }),
  });
}

export function mockFetchFail() {
  return Promise.reject(new Error({ ok: false, statusText: "errormessage" }));
}
