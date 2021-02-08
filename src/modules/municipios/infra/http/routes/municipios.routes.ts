import { Router } from "express";
import MunicipiosController from "../controllers/MunicipiosController";

const usersRouter = Router();
const municipiosController = new MunicipiosController();

usersRouter.post("/", municipiosController.create);

export default usersRouter;
