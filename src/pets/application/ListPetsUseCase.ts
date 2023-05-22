import { PetRepository } from "../domain/PetRepository";

export class ListPetsUseCase {
  constructor(readonly petRepository: PetRepository) {}

  async run() {
    const petsList = await this.petRepository.getList();
    return petsList;
  }
}
