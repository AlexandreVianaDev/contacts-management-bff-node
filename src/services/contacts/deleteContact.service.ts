import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";

export const deleteContactService = async (idParams: number): Promise<void> => {
  const contactsRepo: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contactsFound: Contact | null = await contactsRepo.findOne({
    where: {
      id: idParams,
    },
  });

  await contactsRepo.remove(contactsFound!);
};
