import { Medication } from "@prisma/client";
import { prisma } from "../prismaClient";

class MedicationService {
  async getAllMedications() {
    return prisma.medication.findMany();
  }

  async getMedicationById(id: number) {
    return prisma.medication.findUnique({
      where: { id },
    });
  }

  async createMedication(data: Medication) {
    return prisma.medication.create({
      data,
    });
  }

  async updateMedication(id: number, data: { username?: string; description?: string }) {
    return prisma.medication.update({
      where: { id },
      data,
    });
  }

  async deleteMedication(id: number) {
    return prisma.medication.delete({
      where: { id },
    });
  }
}

export const medicationService = new MedicationService();