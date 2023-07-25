import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact, User } from "../../entities";
import { contactSchema } from "../../schemas/contacts.schemas";
import { TContact, TContactCreate } from "../../interfaces/contacts.interfaces";

export const createContactService = async (
  payload: TContactCreate,
  tokenId: number
): Promise<TContact> => {
  const contactsRepo: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const usersRepo: Repository<User> = AppDataSource.getRepository(User);

  const userFound: User | null = await usersRepo.findOne({
    where: {
      id: tokenId,
    },
  });

  const payloadWithUser = {
    ...payload,
    user: userFound!,
  };

  const contact: Contact = contactsRepo.create(payloadWithUser);

  await contactsRepo.save(contact);

  const contactParsed = contactSchema.parse(contact);

  return contactParsed;
};
