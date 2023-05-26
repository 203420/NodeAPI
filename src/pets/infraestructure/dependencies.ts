import { DeletePetUseCase } from "../application/DeletePetUseCase";
import { GetPetByIdUseCase } from "../application/GetPetByIdUseCase";
import { ListPetsUseCase } from "../application/ListPetsUseCase";
import { RegisterPetUseCase } from "../application/RegisterPetUseCase";
import { DeletePetController } from "./controllers/DeletePetController";
import { GetPetByIdController } from "./controllers/GetPetByIdController";
import { ListPetsController } from "./controllers/ListPetsController";
import { RegisterPetController } from "./controllers/RegisterPetController";
import { PostgresPetRepository } from "./PostgresPetRepository";

const postgresPetRepository = new PostgresPetRepository();

export const registerPetUseCase = new RegisterPetUseCase(postgresPetRepository);
export const registerPetController = new RegisterPetController(
  registerPetUseCase
);

export const listPetsUseCase = new ListPetsUseCase(postgresPetRepository);
export const listPetsController = new ListPetsController(listPetsUseCase);

export const deletePetUseCase = new DeletePetUseCase(postgresPetRepository);
export const deletePetController = new DeletePetController(deletePetUseCase);

export const getPetByIdUseCase = new GetPetByIdUseCase(postgresPetRepository);
export const getPetByIdController = new GetPetByIdController(getPetByIdUseCase);
