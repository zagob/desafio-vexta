import { Router } from "express";

import usersRouter from "../../../modules/users/http/routes/users.routes";
import sessionsRoutes from "../../../modules/users/http/routes/sessions.routes";
import municipiosRoutes from "../../../modules/municipios/infra/http/routes/municipios.routes";
import clientesRoutes from "../../../modules/clientes/infra/http/routes/clientes.routes";

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRoutes);
routes.use("/municipios", municipiosRoutes);
routes.use("/clientes", clientesRoutes);

export default routes;
