import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

export const ensureUserIsOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const tokenId: number = res.locals.tokenId;
  // const { id } = res.locals.contact.user;
  // const contactId = res.locals.contactId

  // to know what is the endpoint, if is users or contacts
  const originalUrl = req.originalUrl.split("/")[1];

  // user is his owner
  if (originalUrl == "users") {
    const userId = res.locals.userId || null;
    if (userId != tokenId) {
      throw new AppError("Insufficient permission", 403);
    }
  }

  // user is the contact owner
  if (originalUrl == "contacts") {
    const contactOwner = res.locals.contactOwnerId;
    if (contactOwner != tokenId) {
      throw new AppError("Insufficient permission", 403);
    }
  }

  return next();
};
