import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getUsersController,
  updateUserController,
} from "../controllers/users.controllers";
import {
  userCreateSchema,
  userUpdateBodySchema,
} from "../schemas/users.schemas";
import { ensureEmailNotExistsMiddleware } from "../middlewares/ensureEmailNotExists.middleware";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureUserIsAdminMiddleware } from "../middlewares/ensureUserIsAdmin.middleware";
import { ensureUserIdExistsMiddleware } from "../middlewares/ensureUserIdExists.middleware";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import {
  createContactController,
  deleteContactController,
  getContactsController,
  updateContactController,
} from "../controllers/contacts.controllers";
import {
  contactCreateSchema,
  contactUpdateBodySchema,
} from "../schemas/contacts.schemas";
import { ensureContactIdExistsMiddleware } from "../middlewares/ensureContactIdExists.middleware";
import { ensureUserIsOwnerMiddleware } from "../middlewares/ensureUserIsOwner.middleware";

export const contactsRoutes: Router = Router();

contactsRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  validateBodyMiddleware(contactCreateSchema),
  createContactController
);

contactsRoutes.get("", ensureTokenIsValidMiddleware, getContactsController);

contactsRoutes.patch(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureContactIdExistsMiddleware,
  ensureUserIsOwnerMiddleware,
  validateBodyMiddleware(contactUpdateBodySchema),
  updateContactController
);

contactsRoutes.delete(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureContactIdExistsMiddleware,
  ensureUserIsOwnerMiddleware,
  deleteContactController
);
