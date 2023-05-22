import { Request, Response } from "express";

import { DeletePetUseCase } from "../../application/DeletePetUseCase";

export class DeletePetController {
  constructor(readonly deletePetUseCase: DeletePetUseCase) {}

  async run(req: Request, res: Response) {
    const petId = req.params.id;
    try {
      const response = await this.deletePetUseCase.run(petId);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
