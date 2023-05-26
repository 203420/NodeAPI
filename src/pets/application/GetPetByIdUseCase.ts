import { PetRepository } from "../domain/PetRepository";

export class GetPetByIdUseCase {
  constructor(readonly petRepository: PetRepository) {}

  async run(petId: string) {
    const pet = await this.petRepository.getById(petId);
    return pet;
  }
}
