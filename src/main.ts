import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

import bodyParser from "body-parser";
import express from "express";

import { config } from "./config";
import { petRouter } from "./pets/infraestructure/PetRouter";

function boostrap() {
  const app = express();

  app.use(bodyParser.json());
  app.use("/pets", petRouter);

  const { port } = config.server;

  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });
}

boostrap();
