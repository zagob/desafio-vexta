import { Router } from "express";

import usersRouter from "../../../modules/users/http/routes/users.routes";
import sessionsRoutes from "../../../modules/users/http/routes/sessions.routes";
import municipiosRoutes from "../../../modules/municipios/infra/http/routes/municipios.routes";

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRoutes);
routes.use("/municipios", municipiosRoutes);

export default routes;
