"use server";

import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes/routes";
import { UserSchema } from "@/schema/schema";
import { AuthError } from "next-auth";
import { z } from "zod";

type LoginUserSchema = z.infer<typeof UserSchema>;

export const login = async (values: LoginUserSchema) => {
  // validate input of the fields.
  const validation = UserSchema.safeParse(values);

  // if validation fails return error.
  if (!validation.success) return { error: "Invalid Fields" };

  // destructure email and password fields.
  const { email, password } = validation.data;

  try {
    await signIn("credentials", {
      entries: { email, password },
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Something went wrong" };
      }
    }

    throw error;
  }
};
