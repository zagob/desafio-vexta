import Clientes from "../infra/typeorm/entities/Clientes";
import ICreateClientes from "../dtos/ICreateClientes";

export default interface IClientesRepository {
  findById(id: string): Promise<Clientes | undefined>;
  create(data: ICreateClientes): Promise<Clientes>;
  save(clientes: Clientes): Promise<Clientes>;
}
