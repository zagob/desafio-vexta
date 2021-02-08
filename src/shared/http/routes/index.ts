import { Router } from "express";

import usersRouter from "../../../modules/users/http/routes/users.routes";
import sessionsRoutes from "../../../modules/users/http/routes/sessions.routes";

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRoutes);

export default routes;
