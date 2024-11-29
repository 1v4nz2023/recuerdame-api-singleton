import { Request, Response } from "express";
import { medicationService } from "../services/MedicationServices";

export class MedicationProxy {
  // GET_ALL_MEDICATIONS
  async GET_ALL_MEDICATIONS(req: Request, res: Response) {
    try {
      const medications = await medicationService.getAllMedications();
      res.json(medications);
    } catch (error) {
      res.status(500).json({ error: "Error fetching medications" });
    }
  }

  // GET_MEDICATION_BY_ID
  async GET_MEDICATION_BY_ID(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const medication = await medicationService.getMedicationById(id);
      if (medication) {
        res.json(medication);
      } else {
        res.status(404).json({ error: "Medication not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error fetching medication" });
    }
  }

  // CREATE_MEDICATION
  async CREATE_MEDICATION(req: Request, res: Response) {
    try {
      const data = req.body;
      const medication = await medicationService.createMedication(data);
      res.status(201).json(medication);
    } catch (error) {
      res.status(500).json({ error: "Error creating medication" });
    }
  }

  // UPDATE_MEDICATION
  async UPDATE_MEDICATION(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const data = req.body;
      const medication = await medicationService.updateMedication(id, data);
      res.json(medication);
    } catch (error) {
      res.status(500).json({ error: "Error updating medication" });
    }
  }

  // DELETE_MEDICATION
  async DELETE_MEDICATION(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      await medicationService.deleteMedication(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Error deleting medication" });
    }
  }
}

export const medicationProxy = new MedicationProxy();