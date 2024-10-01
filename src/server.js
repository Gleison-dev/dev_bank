import express from "express";
import dotenv from "dotenv";
import { testConnection } from "./database/connection.js";
import { router } from "./routes/index.route.js";

dotenv.config;

const app = express();
const port = process.env.SV_PORT;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  testConnection();
  console.log("Servidor rodando!!!");
});
