import express from "express";

import {
  deletePetController,
  getPetByIdController,
  listPetsController,
  registerPetController,
} from "./dependencies";

export const petRouter = express.Router();

petRouter.post(
  "/register",
  registerPetController.run.bind(registerPetController)
);
petRouter.get("/", listPetsController.run.bind(listPetsController));
petRouter.get("/:id", getPetByIdController.run.bind(getPetByIdController));
petRouter.delete("/:id", deletePetController.run.bind(deletePetController));
