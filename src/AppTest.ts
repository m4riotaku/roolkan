//import mapRouter from "./legacy/router/map.router.ts";
import "./legacy/components/NotFound/NotFound.ts";
import "./legacy/components/NavBar/NavBar.ts";
import "./legacy/components/AppFooter/AppFooter.ts";
//import routerResolver from "./legacy/shared/resolver/router.resolver.ts";
import { getRoute } from "./infrastructure/routing/map.router.ts";

const App = async () => {
  const path = globalThis.location.pathname;
  const fragment = document.createDocumentFragment();
  const route = getRoute(path);
  const app = document.getElementById("app");
  if (!app) return;
  app.innerHTML = "";
  if (!route) {
    const notFound = document.createElement("not-found");
    fragment.appendChild(notFound);
    app.appendChild(fragment);
    return;
  }
  //const { component } = route;
  const content = await route(path);
  if (!content) return;
  app.appendChild(content);
};

export default App;
