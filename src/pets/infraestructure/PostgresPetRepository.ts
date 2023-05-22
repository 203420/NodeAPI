import { pool } from "../../database";
import { Pet } from "../domain/Pet";
import { PetRepository } from "../domain/PetRepository";

export class PostgresPetRepository implements PetRepository {
  async getById(petId: string): Promise<Pet | null> {
    const sql = "SELECT * FROM pets WHERE id = $1";
    const values = [petId];
    try {
      const result = await pool.query(sql, values);
      if (result.rows.length > 0) {
        const petData = result.rows[0];
        const pet: Pet = {
          id: petData.id,
          name: petData.name,
          age: petData.age,
          type: petData.type,
        };
        return pet;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  async createPet(pet: Pet): Promise<Pet | null> {
    const sql =
      "INSERT INTO pets (name, age, type) VALUES ($1, $2, $3) RETURNING *";
    const values = [pet.name, pet.age, pet.type];
    try {
      const result = await pool.query(sql, values);
      if (result.rows.length > 0) {
        const createdPetData = result.rows[0];
        const createdPet: Pet = {
          id: createdPetData.id,
          name: createdPetData.name,
          age: createdPetData.age,
          type: createdPetData.type,
        };
        return createdPet;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  async getList(): Promise<Pet[] | null> {
    const sql = "SELECT * FROM pets";
    try {
      const result = await pool.query(sql);
      const pets: Pet[] = result.rows.map((petData: any) => ({
        id: petData.id,
        name: petData.name,
        age: petData.age,
        type: petData.type,
      }));
      return pets;
    } catch (error) {
      throw error;
    }
  }

  async deletePet(petId: string): Promise<string | null> {
    const sql = "DELETE FROM pets WHERE id = $1";
    const values = [petId];
    try {
      await pool.query(sql, values);
      return "Pet deleted succesfully";
    } catch (error) {
      throw error;
    }
  }
}
