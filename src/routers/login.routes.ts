import { Router } from "express";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { userLoginSchema } from "../schemas/users.schemas";
import { ensureEmailExistsMiddleware } from "../middlewares/ensureEmailExists.middleware copy";
import {
  autoLoginUserController,
  loginUserController,
} from "../controllers/login.controllers";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";

export const loginRoutes: Router = Router();

loginRoutes.post(
  "",
  validateBodyMiddleware(userLoginSchema),
  ensureEmailExistsMiddleware,
  loginUserController
);

loginRoutes.get("", ensureTokenIsValidMiddleware, autoLoginUserController);
