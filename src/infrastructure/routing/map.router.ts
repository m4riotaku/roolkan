import routerResolver from "../../legacy/shared/resolver/router.resolver";

export const mapRouter = new Map<
  string,
  (path: string) => Promise<DocumentFragment | undefined>
>();

export const setRouter = (
  path: string,
  fn: (path: string) => Promise<DocumentFragment | undefined>,
) => {
  mapRouter.set(path, fn);
};

export const getRoute = (path: string) => {
  const result_path = routerResolver(path);
  return mapRouter.get(result_path);
};
