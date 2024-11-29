import { Router } from "express";
import { medicationProxy } from "../proxies/MedicationProxy";

const router = Router();

// Route definitions
router.get("/medications", medicationProxy.GET_ALL_MEDICATIONS
);
router.get("/:id", medicationProxy.GET_MEDICATION_BY_ID
);
router.post("/medication", medicationProxy.CREATE_MEDICATION
);
router.put("/:id",medicationProxy.UPDATE_MEDICATION
);
router.delete("/:id", medicationProxy.DELETE_MEDICATION
);

export default router;
