import { compare } from "bcryptjs";
import { AppError } from "../../error";
import {
  ILoginResponse,
  TUser,
  TUserLogin,
  TUserWithoutPassword,
} from "../../interfaces/users.interfaces";
import { sign } from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { Repository } from "typeorm";
import { userWithoutPasswordSchema } from "../../schemas/users.schemas";

export const autoLoginUserService = async (
  tokenId: number
): Promise<TUserWithoutPassword> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const userFromRepo: User | null = await userRepo.findOneBy({
    id: tokenId,
  });

  const user = userWithoutPasswordSchema.parse(userFromRepo);

  return user;
};
