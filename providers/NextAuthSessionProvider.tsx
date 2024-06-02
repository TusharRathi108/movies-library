"use client"
import { SessionProvider } from "next-auth/react";
import React from "react";

interface AuthProps {
  children: React.ReactNode;
}

const NextAuthSessionProvider = ({ children }: AuthProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthSessionProvider;
