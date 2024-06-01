import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUserByEmail } from "./data/user";
import { UserSchema } from "./schema/schema";
import prisma from "./prisma/client";

export default {
  providers: [
    Credentials({
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials) => {
        const validation = UserSchema.safeParse(credentials);

        if (validation.success) {
          // destructure email and password from validation data
          const { email, password } = validation.data;

          // get the user information form the database.
          const user = await getUserByEmail(email);

          // check if user or user password is legitor not
          if (!user || !user.password) return null;

          // compare password with database passsword.
          const passswordMatch = await bcrypt.compare(password, user.password);

          if (passswordMatch) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
