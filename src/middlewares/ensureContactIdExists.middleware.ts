import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { Repository } from "typeorm";
import { Contact } from "../entities";
import { AppDataSource } from "../data-source";

export const ensureContactIdExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const idParams: number = parseInt(req.params.id);

  const contactsRepo: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contact: Contact | null = await contactsRepo.findOne({
    where: {
      id: idParams,
    },
    relations: ["user"],
  });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  console.log("aaaaa", contact.user.id);

  res.locals.contactOwnerId = contact.user.id;
  res.locals.contactId = idParams;

  return next();
};
