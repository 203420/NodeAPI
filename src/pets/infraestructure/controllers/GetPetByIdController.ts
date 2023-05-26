import { Request, Response } from "express";

import { GetPetByIdUseCase } from "../../application/GetPetByIdUseCase";

export class GetPetByIdController {
  constructor(readonly getPetByIdUseCase: GetPetByIdUseCase) {}

  async run(req: Request, res: Response) {
    const petId = req.params.id;
    try {
      const response = await this.getPetByIdUseCase.run(petId);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
