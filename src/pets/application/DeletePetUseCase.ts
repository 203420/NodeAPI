import { PetRepository } from "../domain/PetRepository";

export class DeletePetUseCase {
  constructor(readonly petRepository: PetRepository) {}

  async run(petId: string) {
    const res = await this.petRepository.deletePet(petId);
    return res;
  }
}
