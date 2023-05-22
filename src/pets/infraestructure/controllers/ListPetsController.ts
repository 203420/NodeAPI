import { Request, Response } from "express";

import { ListPetsUseCase } from "../../application/ListPetsUseCase";

export class ListPetsController {
  constructor(readonly listPetsUseCase: ListPetsUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const petsList = await this.listPetsUseCase.run();
      res.status(200).json(petsList);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
