import { z } from "zod";

export const dateSchema = z.union([z.string(), z.date()]);

export const contactSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().max(45),
  email: z.string().max(45).email(),
  phone: z.string().max(45),
  registerDate: dateSchema,
  // userId: z.number().int().positive(),
});

export const contactListSchema = z.array(contactSchema);

export const contactCreateSchema = contactSchema.omit({
  id: true,
  registerDate: true,
  userId: true,
});

export const contactUpdateSchema = contactCreateSchema;

export const contactUpdateBodySchema = contactCreateSchema.partial();
