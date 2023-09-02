export const getIdFromUrl = (url: string) => {
  return url.match("(\\d+)(?!.*\\d)")?.[0];
};
