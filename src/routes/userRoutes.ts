import { Router } from "express";
import { UserProxyInstance } from "../proxies/UserProxy";

const router = Router();

// Route definitions
router.get("/users", UserProxyInstance.GEt_ALL_USERS);
router.get("/:id", UserProxyInstance.GET_USER_BY_ID);
router.post("/user", UserProxyInstance.CREATE_USER);
router.put("/:id",  UserProxyInstance.UPDATE_USER);
router.delete("/:id", UserProxyInstance.DELETE_USER);

export default router;
