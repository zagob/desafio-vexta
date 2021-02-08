import { container } from "tsyringe";

import "../../modules/users/providers";

import IUsersRepository from "../../modules/users/repositories/IUsersRepository";
import UsersRepository from "../../modules/users/infra/typeorm/repositories/UsersRepository";

import IUserTokensRepository from "../../modules/users/repositories/IUserTokensRepository";
import UserTokensRepository from "../../modules/users/infra/typeorm/repositories/UserTokensRepository";

import IMunicipiosRepository from "../../modules/municipios/repositories/IMunicipiosRepository";
import MunicipiosRepository from "../../modules/municipios/infra/typeorm/repositories/MunicipiosRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IMunicipiosRepository>(
  "MunicipiosRepository",
  MunicipiosRepository
);

container.registerSingleton<IUserTokensRepository>(
  "UserTokensRepository",
  UserTokensRepository
);
