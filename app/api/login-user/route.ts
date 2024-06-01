// import { registerSchema } from "@/app/schema/registerSchema";
// import prisma from "@/prisma/client";
// import { useRouter } from "next/router";
// import { NextRequest, NextResponse } from "next/server";

// const router = useRouter();

// export async function POST(req: NextRequest, res: NextResponse) {
//   // ensures data meets the criteria before processed or stored.
//   const body = await req.json();
//   const validation = registerSchema.safeParse(body);

//   // validates whether the inputs in the request body are valid or not.
//   if (!validation.success)
//     return NextResponse.json(validation.error.format(), { status: 400 });

//   // destructure body of the request.
//   const { email, password } = validation.data;

//   // checking user credentials.
//   const existingUser = await prisma.user.findUnique({
//     where: { email: email, password: password },
//   });

//   if (!existingUser) {
//     return NextResponse.json("There is no exiting user!", { status: 400 });
//   }

//   return router.push("/dashboard");
// }
