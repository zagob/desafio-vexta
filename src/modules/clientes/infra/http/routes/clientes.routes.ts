import { Router } from "express";

import ensureAuthenticated from "../../../../users/http/middlewares/ensureAuthenticated";
import ClientesController from "../controllers/ClientesController";

const clientesRoutes = Router();
const clientesController = new ClientesController();

clientesRoutes.use(ensureAuthenticated);

clientesRoutes.post("/", clientesController.create);

export default clientesRoutes;
