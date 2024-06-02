import { UserSchema } from "@/schema/schema";
import { getUserByEmail } from "@/data/user";
import prisma from "@/prisma/client";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    // ensures data meets the criteria before processed or stored.
    const body = await req.json();
    const validation = UserSchema.safeParse(body);

    // validates whether the inputs in the request body are valid or not.
    if (!validation.success)
      return NextResponse.json(validation.error.format(), { status: 400 });

    // destructure body of the request.
    const { name, email, password } = validation.data;

    // check if email is taken or not.
    const existingUser = await getUserByEmail(email);

    // returning error if user already exists.
    if (existingUser)
      return new NextResponse("Email already in use!", { status: 400 });

    // hash the password.
    const hashPassword = await bcrypt.hash(password, 10);

    // creating user credentials.
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword,
      },
    });

    // on success of creating user.
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error("Error: ", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
