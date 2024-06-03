import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const session = await getSession({ req });

    if (!session) {
      console.log("Unauthorized access attempt.");
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (req.method === "POST") {
      const {
        title,
        awards,
        boxOffice,
        genre,
        country,
        plot,
        poster,
        userEmail,
      } = req.body;

      console.log("Received request to add movie:", req.body);

      try {
        const user = await prisma.user.findUnique({
          where: { email: userEmail },
        });

        if (!user) {
          console.log("User not found:", userEmail);
          return res.status(404).json({ message: "User not found" });
        }

        console.log("User found:", user);

        await prisma.movie.create({
          data: {
            title,
            awards,
            boxOffice,
            genre,
            country,
            plot,
            poster,
            userId: user.id,
          },
        });

        console.log("Movie added successfully.");
        return res.status(200).json({ message: "Movie added successfully" });
      } catch (error) {
        console.error("Error adding movie:", error);
        return res.status(500).json({ error: "Error adding movie" });
      }
    } else {
      res.setHeader("Allow", ["POST"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error("Unexpected error:", error);
    return res.status(500).json({ error: "Unexpected error" });
  }
}
