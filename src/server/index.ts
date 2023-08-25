import express from "express";
import pingController from "../controllers/ping/PingController.js";

const app = express();

app.use(pingController);

export default app;
