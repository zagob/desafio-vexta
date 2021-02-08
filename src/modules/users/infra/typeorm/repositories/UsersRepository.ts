import { getRepository, Repository } from "typeorm";

import IUsersRepository from "../../../repositories/IUsersRepository";
import ICreateUserDTO from "../../../dtos/ICreateUserDTO";

import User from "../entities/User";

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id);

    return user;
  }

  public async findByLogin(login: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { login },
    });

    return user;
  }

  public async create(useData: ICreateUserDTO): Promise<User> {
    const appointment = this.ormRepository.create(useData);

    await this.ormRepository.save(appointment);

    return appointment;
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }
}

export default UsersRepository;
