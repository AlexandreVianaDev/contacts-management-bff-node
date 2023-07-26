import { Request, Response } from "express";
import {
  ILoginResponse,
  IToken,
  TUser,
  TUserWithoutPassword,
} from "../interfaces/users.interfaces";
import { loginUserService } from "../services/users/loginUser.service";
import { autoLoginUserService } from "../services/users/autoLoginUser.service";

export const loginUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const token: ILoginResponse = await loginUserService(req.body);
  return res.status(200).json(token);
};

export const autoLoginUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  // const tokenFromReq: string | undefined = req.headers["authorization"];
  const tokenId: number = res.locals.tokenId;
  const user: TUserWithoutPassword = await autoLoginUserService(tokenId);
  return res.status(200).json(user);
};
