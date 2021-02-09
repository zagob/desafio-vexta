import { getRepository, Repository } from "typeorm";

import IClientesRepository from "../../../repositories/IClientesRepository";
import ICreateClientesDTO from "../../../dtos/ICreateClientes";

import Clientes from "../entities/Clientes";

class ClientesRepository implements IClientesRepository {
  private ormRepository: Repository<Clientes>;

  constructor() {
    this.ormRepository = getRepository(Clientes);
  }

  public async findById(id: string): Promise<Clientes | undefined> {
    const cliente = await this.ormRepository.findOne(id);

    return cliente;
  }

  public async create(useData: ICreateClientesDTO): Promise<Clientes> {
    const cliente = this.ormRepository.create(useData);

    await this.ormRepository.save(cliente);

    return cliente;
  }

  public async save(cliente: Clientes): Promise<Clientes> {
    return this.ormRepository.save(cliente);
  }
}

export default ClientesRepository;
