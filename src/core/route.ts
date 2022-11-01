import { Router } from "express";
import ping from "../ping/ping.controller";
import user from "../user/user.route";

const routes = Router();

routes.use(user);
routes.use(ping);

export default routes;
