import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "@/prisma/client";
import { SignInSchema } from "@/schema/schema";

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // check it he credentials passed are according to the schema.
        const validation = SignInSchema.safeParse(credentials);

        // checking if there are any credentials being passed.
        if (!validation.success) throw new Error("Credentials do not exits!");

        // destructuring the validation.
        const { email, password } = validation.data;

        // getting user information from the database.
        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        // checking if the credentials match with DB.
        if (!user || !user?.email || !user?.password)
          throw new Error("User not registered with these credentials!");

        // checking if the password matches or not.
        const passwordMatch = await bcrypt.compare(password, user.password);

        // chexk if the password matches or not.
        if (!passwordMatch)
          throw new Error("User not registered with these credentials!");

        // return the user.
        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  debug: process.env.NODE_ENV !== "production",
};
