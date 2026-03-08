//import App from "./App.ts";
import App from "./AppTest.ts";
import { initRouter } from "./dependencies/AppRouter.ts";
import "./style.css";

globalThis.addEventListener("pushstate", App);
globalThis.addEventListener("popstate", App);
initRouter();
App();
