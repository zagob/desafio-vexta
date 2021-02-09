import { Router } from "express";

import ensureAuthenticated from "../../../../users/http/middlewares/ensureAuthenticated";
import MunicipiosController from "../controllers/MunicipiosController";

const municipiosRoutes = Router();
const municipiosController = new MunicipiosController();

municipiosRoutes.use(ensureAuthenticated);

municipiosRoutes.post("/", municipiosController.create);

export default municipiosRoutes;
