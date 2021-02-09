import { injectable, inject } from "tsyringe";

import IClientesRepository from "../repositories/IClientesRepository";
import Clientes from "../infra/typeorm/entities/Clientes";

interface Request {
  cnpj_cpf: string;
  name: string;
  name_fantasia: string;
  endereco: string;
  numero: string;
  bairro: string;
  complemento: string;
  municipio_id: string;
  telefone: string;
  email: string;
  site: string;
  celular: string;
}

@injectable()
class CreateClientesServices {
  constructor(
    @inject("ClientesRepository")
    private clientesRepository: IClientesRepository
  ) {}

  public async execute({
    cnpj_cpf,
    name,
    name_fantasia,
    endereco,
    numero,
    bairro,
    complemento,
    municipio_id,
    telefone,
    email,
    site,
    celular,
  }: Request): Promise<Clientes> {
    const cliente = await this.clientesRepository.create({
      cnpj_cpf,
      name,
      name_fantasia,
      endereco,
      numero,
      bairro,
      complemento,
      municipio_id,
      telefone,
      email,
      site,
      celular,
    });

    return cliente;
  }
}

export default CreateClientesServices;
