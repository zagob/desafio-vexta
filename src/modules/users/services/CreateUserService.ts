import { injectable, inject } from "tsyringe";

import AppError from "../../../shared/errors/AppError";
import IUsersRepository from "../repositories/IUsersRepository";
import IHashProvider from "../providers/HashProvider/models/IHashProvider";

import User from "../infra/typeorm/entities/User";

interface Request {
  name: string;
  login: string;
  password: string;
  slug: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,

    @inject("HashProvider")
    private hashProvider: IHashProvider
  ) {}

  public async execute({
    name,
    login,
    password,
    slug,
  }: Request): Promise<User> {
    const checkUserExists = await this.usersRepository.findByLogin(login);

    if (checkUserExists) {
      throw new AppError("login já usado");
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      name,
      login,
      password: hashedPassword,
      slug,
    });

    return user;
  }
}

export default CreateUserService;
