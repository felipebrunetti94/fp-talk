const StatusWrapper = (args: any) => async (request: typeof fetch) => {
  const result = await fetch(args);
  if (result.status === 400) {
    throw new Error();
  }
  return result;
};

const AuthWrapper = (args: any) => async (request: typeof fetch) => {};
