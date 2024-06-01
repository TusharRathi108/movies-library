import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./prisma/client";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  ...authConfig,
  session: { strategy: "jwt" },
  providers: [GitHub, Google],
});
