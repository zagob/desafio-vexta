import { Request, Response } from "express";
import { container } from "tsyringe";
import { classToClass } from "class-transformer";

import CreateUserService from "../../services/CreateUserService";

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, login, password, slug } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      login,
      password,
      slug,
    });

    return response.json(classToClass(user));
  }
}
