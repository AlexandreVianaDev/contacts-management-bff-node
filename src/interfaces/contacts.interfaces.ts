import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  contactCreateSchema,
  contactSchema,
  contactUpdateSchema,
} from "../schemas/contacts.schemas";

export type TContact = z.infer<typeof contactSchema>;

export type TContactCreate = z.infer<typeof contactCreateSchema>;

export type TContactUpdateWithoutDeepPartial = z.infer<
  typeof contactUpdateSchema
>;

export type TContactUpdate = DeepPartial<TContactUpdateWithoutDeepPartial>;
