import { Router } from "express";
import * as controller from "./check.controller";

const router = Router();

router.post("/check/:uid", controller.check);
router.get("/check", controller.fetchAll);

export default router;
