import { authOptions } from "@/libs/AuthOptions";
import { SearchProvider } from "@/providers/SearchProvider";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

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

  return (
    <main>
      <SearchProvider userEmail={session.user.email}>{children}</SearchProvider>
    </main>
  );
};

export default ProtectLayout;
