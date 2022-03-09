const delay = (ms = 1000): Promise<unknown> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export default delay;
