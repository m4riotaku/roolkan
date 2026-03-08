import { setRouter } from "../infrastructure/routing/map.router";
import Home from "../presentation/Home/Home";

export function initRouter() {
  setRouter("/", Home);
}
