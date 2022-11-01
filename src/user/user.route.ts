import { Router } from "express";
import * as user from "./user.controller";

const router = Router();

router.post("/user", user.store);
router.get("/user", user.fetchAll);
router.get("/user/:uid", user.fetch);
router.put("/user/:uid", user.modify);
router.delete("/user/:uid", user.drop);

export default router;
