import { Router } from "express";
import * as check from "../check/check.controller";
import * as user from "../user/user.controller";
import ping from "../ping/ping.controller";
import key, { keygen } from "../key/key.controller";

const routes = Router();

routes.get("/", ping);

routes.post("/key", keygen);

routes.post("/user", key, user.store);
routes.get("/user/:id", key, user.fetch);
routes.put("/user/:id", key, user.modify);
routes.get("/user", key, user.fetchAll);
routes.delete("/user/:id", key, user.drop);

routes.post("/check/:id", key, check.check);
routes.get("/check", key, check.fetchAll);

export default routes;
