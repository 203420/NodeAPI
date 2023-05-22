import { Pet } from "./Pet";

export interface PetRepository {
  getById(petId: string): Promise<Pet | null>;
  getList(): Promise<Pet[] | null>;
  createPet(pet: Pet): Promise<Pet | null>;
  deletePet(petId: string): Promise<string | null>;
}
