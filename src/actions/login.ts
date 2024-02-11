"use server";
import { signIn } from "@/auth";
import { default_redirect } from "@/routes";
import { LoginSchema } from "@/schemas";
import { AuthError } from "next-auth";
import * as z from "zod";
export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validate = LoginSchema.safeParse(values);
  if (!validate.success) {
    return { error: "Invalid fields" };
  }
  const { email, password } = validate.data;
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: default_redirect,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Wrong user credientials" };
        default:
          return { error: "An unexpected error occurred" };
      }
    }
    throw error;
  }
};
