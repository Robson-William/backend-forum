import express from "express";
import { routes } from "./router";
import { migrations } from "./migrations/migrations";

const app = express();

migrations();

app.use(routes);

export { app };