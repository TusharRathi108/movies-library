import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/AuthOptions";
import { redirect } from "next/navigation";

interface ProtectLayoutProps {
  children: React.ReactNode;
}

const ProtectLayout = async ({ children }: ProtectLayoutProps) => {
  // get the session after login.
  const session = await getServerSession(authOptions);

  // force the user to login.
  if (!session?.user?.email) {
    redirect("/auth/login");
  }

  return <main>{children}</main>;
};

export default ProtectLayout;
