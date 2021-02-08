import { getRepository, Repository } from "typeorm";

import IMunicipiosRepositoy from "../../../repositories/IMunicipiosRepository";
import IMunicipiosDTO from "../../../dtos/ICreateMunicipiosDTO";

import Municipio from "../entities/Municipio";

class MunicipiosRepository implements IMunicipiosRepositoy {
  private ormRepository: Repository<Municipio>;

  constructor() {
    this.ormRepository = getRepository(Municipio);
  }

  public async findById(id: string): Promise<Municipio | undefined> {
    const municipio = await this.ormRepository.findOne(id);

    return municipio;
  }

  public async create(useData: IMunicipiosDTO): Promise<Municipio> {
    const municipio = this.ormRepository.create(useData);

    await this.ormRepository.save(municipio);

    return municipio;
  }

  public async save(municipio: Municipio): Promise<Municipio> {
    return this.ormRepository.save(municipio);
  }
}

export default MunicipiosRepository;
