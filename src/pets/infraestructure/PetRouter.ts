import express from "express";

import {
  deletePetController,
  listPetsController,
  registerPetController,
} from "./dependencies";

export const petRouter = express.Router();

petRouter.post(
  "/register",
  registerPetController.run.bind(registerPetController)
);
petRouter.get("/", listPetsController.run.bind(listPetsController));
petRouter.delete("/:id", deletePetController.run.bind(deletePetController));
