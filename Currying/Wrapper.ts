type Fetch = typeof fetch;

const StatusWrapper =
  (request: Fetch) => async (input: RequestInfo, init: RequestInit) => {
    const response = await request(input, init);
    if (response.status === 400) {
      throw new Error();
    }
    return response;
  };

const AuthWrapper =
  (request: Fetch) => async (input: RequestInfo, init: RequestInit) => {
    if (localStorage.get("secret-key")) {
      return request(input, init);
    }
    throw Error("mano tu nem logado ta");
  };

const fetchWithError = StatusWrapper(AuthWrapper(fetch));

fetchWithError("url", {
  method: "GET",
});
