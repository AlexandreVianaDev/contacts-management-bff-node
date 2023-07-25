import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact, User } from "../../entities";
import { TContact, TContactUpdate } from "../../interfaces/contacts.interfaces";
import { contactSchema } from "../../schemas/contacts.schemas";

export const updateContactService = async (
  payload: TContactUpdate,
  idParams: number,
  tokenId: number
): Promise<TContact> => {
  const contactsRepo: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contactFound: Contact | null = await contactsRepo.findOne({
    where: {
      id: idParams,
    },
  });

  const usersRepo: Repository<User> = AppDataSource.getRepository(User);

  const userFound: User | null = await usersRepo.findOne({
    where: {
      id: tokenId,
    },
  });

  console.log("aaaaaaaa", userFound);

  const contactUpdated: Contact = contactsRepo.create({
    ...contactFound!,
    ...payload,
    user: userFound!,
  });

  await contactsRepo.save(contactUpdated);

  const contact = contactSchema.parse(contactUpdated);

  return contact;
};
