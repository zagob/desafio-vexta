import { Request, Response } from "express";
import { container } from "tsyringe";
import { classToClass } from "class-transformer";

import CreateMunicipiosServices from "../../../services/CreateMunicipiosServices";

export default class MunicipiosController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, uf } = request.body;

    const createMunicipio = container.resolve(CreateMunicipiosServices);

    const municipio = await createMunicipio.execute({
      name,
      uf,
    });

    return response.json(classToClass(municipio));
  }
}
