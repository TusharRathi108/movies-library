import { registerSchema } from "@/app/schema/registerSchema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  // ensures data meets the criteria before processed or stored.
  const body = await req.json();
  const validation = registerSchema.safeParse(body);

  // validates whether the inputs in the request body are valid or not.
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  // destructure body of the request.
  const { name, email, phoneNumber, password } = validation.data;

  // creating user creadentials.
  const newUser = await prisma.userInfo.create({
    data: {
      name,
      email,
      phoneNumber,
      password,
    },
  });

  // on succes of creating user.
  return NextResponse.json(newUser, { status: 201 });
}
