import { Request, Response } from "express";
import { TContact } from "../interfaces/contacts.interfaces";
import { deleteContactService } from "../services/contacts/deleteContact.service";
import { updateContactService } from "../services/contacts/updateContact.service";
import { getContactsService } from "../services/contacts/getContacts.service";
import { createContactService } from "../services/contacts/createContact.service";

export const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const tokenId: number = res.locals.tokenId;
  const contact: TContact = await createContactService(req.body, tokenId);
  return res.status(201).json(contact);
};

export const getContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const tokenId: number = res.locals.tokenId;
  const contacts: TContact[] = await getContactsService(tokenId);
  return res.status(200).json(contacts);
};

export const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const idParams: number = res.locals.contactId;
  const tokenId: number = res.locals.tokenId;
  const contact: TContact = await updateContactService(req.body, idParams, tokenId);
  return res.status(200).json(contact);
};

export const deleteContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const idParams: number = res.locals.contactId;
  await deleteContactService(idParams);
  return res.status(204).send();
};
