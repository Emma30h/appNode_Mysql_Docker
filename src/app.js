import express, { json } from "express";
import route from "./routes/route.js";

const app = express();

//Middlewares
app.use(json());

//Routes
app.use(route);

export default app;