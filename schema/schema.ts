import { z } from "zod";

export const UserSchema = z.object({
  name: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, "Name is required! cannot be null")
    .max(30, "Name cannot be of more than 50 words!"),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: "Enter a valid email!" }),
  password: z.string().trim().toLowerCase(),
});

export const SignInSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: "Enter a valid email!" }),
  password: z.string().trim().toLowerCase(),
});

export const MovieSchema = z.object({
  title: z.string().trim().optional(),
  awards: z.string().trim().optional(),
  boxOffice:z.string().trim().optional(),
  genre: z.string().trim().optional(),
  country: z.string().trim().optional(),
  plot: z.string().trim().optional(),
  poster: z.string().trim().optional(),
  userEmail: z.string().trim().optional(),
});
