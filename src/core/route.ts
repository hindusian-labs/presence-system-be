import { Router } from "express";
import ping from "../ping/ping.routes";
import user from "../user/user.route";
import check from '../check/check.route'


const routes = Router();

routes.use(user);
routes.use(check)
routes.use(ping);

export default routes;
