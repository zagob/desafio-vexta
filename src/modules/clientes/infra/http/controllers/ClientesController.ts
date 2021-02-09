import { Request, Response } from "express";
import { container } from "tsyringe";
import { classToClass } from "class-transformer";

import CreateClientes from "../../../services/CreateClientes";

export default class ClientesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const municipio_id = request.user.id;
    const {
      cnpj_cpf,
      name,
      name_fantasia,
      endereco,
      numero,
      bairro,
      complemento,
      telefone,
      email,
      site,
      celular,
    } = request.body;

    const createCliente = container.resolve(CreateClientes);

    const cliente = await createCliente.execute({
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

    return response.json(classToClass(cliente));
  }
}
