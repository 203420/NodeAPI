import { Request, Response } from "express";

import { RegisterPetUseCase } from "../../application/RegisterPetUseCase";
import { Pet } from "../../domain/Pet";

export class RegisterPetController {
  constructor(readonly registerPetUseCase: RegisterPetUseCase) {}

  async run(req: Request, res: Response) {
    const pet = req.body;
    try {
      const petData = await this.registerPetUseCase.run(
        new Pet(pet.id, pet.name, pet.age, pet.type)
      );
      console.log(petData);
      res.status(200).json(petData);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
