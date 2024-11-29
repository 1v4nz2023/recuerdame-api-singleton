import { RequestHandler, Router } from "express";
import { medicationProxy } from "../proxies/MedicationProxy";
import authMiddleware from "../utils/middlewares/authMiddleware";

const router = Router();

// Route definitions
router.get("/medications", [authMiddleware as RequestHandler], medicationProxy.GET_ALL_MEDICATIONS);
router.get("/:id", [authMiddleware as RequestHandler], medicationProxy.GET_MEDICATION_BY_ID);

router.post("/medication", [authMiddleware as RequestHandler], medicationProxy.CREATE_MEDICATION);

router.put("/:id",[authMiddleware as RequestHandler], medicationProxy.UPDATE_MEDICATION);
router.delete("/:id", [authMiddleware as RequestHandler], medicationProxy.DELETE_MEDICATION);

export default router;
