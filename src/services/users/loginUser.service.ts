import { compare } from "bcryptjs";
import { AppError } from "../../error";
import { ILoginResponse, TUserLogin } from "../../interfaces/users.interfaces";
import { sign } from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { Repository } from "typeorm";
import { userWithoutPasswordSchema } from "../../schemas/users.schemas";

export const loginUserService = async (
  userData: TUserLogin
): Promise<ILoginResponse> => {
  const emailBody: string = userData.email;

  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const userFromRepo: User | null = await userRepo.findOneBy({
    email: emailBody,
  });

  const passwordMatch: boolean = await compare(
    userData.password,
    userFromRepo!.password
  );

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = sign({}, String(process.env.SECRET_KEY), {
    expiresIn: String(process.env.EXPIRES_IN || "24h"),
    subject: String(userFromRepo!.id),
  });

  const user = userWithoutPasswordSchema.parse(userFromRepo);

  return { token, user };
};
