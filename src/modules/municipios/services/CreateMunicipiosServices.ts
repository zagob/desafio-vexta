import { injectable, inject } from "tsyringe";

import IMunicipiosRepository from "../repositories/IMunicipiosRepository";
import Municipio from "../infra/typeorm/entities/Municipio";

interface Request {
  name: string;
  uf: string;
}

@injectable()
class CreateMunicipiosServices {
  constructor(
    @inject("MunicipiosRepository")
    private municipiosRepository: IMunicipiosRepository
  ) {}

  public async execute({ name, uf }: Request): Promise<Municipio> {
    const municipio = await this.municipiosRepository.create({
      name,
      uf,
    });

    return municipio;
  }
}

export default CreateMunicipiosServices;
