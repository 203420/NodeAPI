import { Pet } from "../domain/Pet";
import { PetRepository } from "../domain/PetRepository";

export class RegisterPetUseCase {
  constructor(readonly petRepository: PetRepository) {}

  async run(pet: Pet) {
    const createPet = await this.petRepository.createPet(pet);
    return createPet;
  }
}
