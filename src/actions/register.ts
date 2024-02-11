"use server";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import * as z from "zod";
export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validate = RegisterSchema.safeParse(values);
  if (!validate.success) {
    return { error: "Invalid fields" };
  }
  const { email, password, name } = validate.data;
  const hashedPssword = await bcrypt.hash(password, 10);

  const existing = await getUserByEmail(email);

  if (existing) {
    return { error: "Email already in use." };
  }

  await db.user.create({ data: { name, email, password: hashedPssword } });

  return { success: "User created" };
};
