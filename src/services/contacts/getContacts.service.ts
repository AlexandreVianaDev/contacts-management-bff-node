import { Repository } from "typeorm";
import { Contact, User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TContact } from "../../interfaces/contacts.interfaces";
import { contactListSchema } from "../../schemas/contacts.schemas";

export const getContactsService = async (
  tokenId: number
): Promise<TContact[]> => {
  const contactsRepo: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contacts: Contact[] | null = await contactsRepo.find({
    where: { user: { id: tokenId } },
  });

  const contactsParsed: TContact[] | null = contactListSchema.parse(contacts);

  return contactsParsed;
};
