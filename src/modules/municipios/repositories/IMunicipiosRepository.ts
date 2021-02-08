import Municipio from "../infra/typeorm/entities/Municipio";
import ICreateMunicipiosDTO from "../dtos/ICreateMunicipiosDTO";

export default interface IUsersRepository {
  findById(id: string): Promise<Municipio | undefined>;
  create(data: ICreateMunicipiosDTO): Promise<Municipio>;
  save(user: Municipio): Promise<Municipio>;
}
