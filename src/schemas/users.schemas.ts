import { z } from "zod";

export const dateSchema = z.union([z.string(), z.date()]);

export const userSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().max(45),
  email: z.string().max(45).email(),
  phone: z.string().max(45),
  password: z.string().max(120),
  registerDate: dateSchema,
});

export const userWithoutPasswordSchema = userSchema.omit({
  password: true,
});

export const userListSchema = z.array(userWithoutPasswordSchema);

export const userCreateSchema = userSchema.omit({
  id: true,
  registerDate: true,
});

export const userLoginSchema = userCreateSchema.omit({
  name: true,
  phone: true,
});

export const userUpdateSchema = userCreateSchema;

export const userUpdateBodySchema = userCreateSchema.partial();
