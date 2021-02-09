import { container } from "tsyringe";

import "../../modules/users/providers";

import IUsersRepository from "../../modules/users/repositories/IUsersRepository";
import UsersRepository from "../../modules/users/infra/typeorm/repositories/UsersRepository";

import IUserTokensRepository from "../../modules/users/repositories/IUserTokensRepository";
import UserTokensRepository from "../../modules/users/infra/typeorm/repositories/UserTokensRepository";

import IMunicipiosRepository from "../../modules/municipios/repositories/IMunicipiosRepository";
import MunicipiosRepository from "../../modules/municipios/infra/typeorm/repositories/MunicipiosRepository";

import IClientesRepository from "../../modules/clientes/repositories/IClientesRepository";
import ClientesRepository from "../../modules/clientes/infra/typeorm/repositories/ClientesRepository";

container.registerSingleton<IMunicipiosRepository>(
  "MunicipiosRepository",
  MunicipiosRepository
);

container.registerSingleton<IClientesRepository>(
  "ClientesRepository",
  ClientesRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IUserTokensRepository>(
  "UserTokensRepository",
  UserTokensRepository
);
