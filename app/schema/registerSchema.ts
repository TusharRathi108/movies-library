import { z } from "zod";

export const registerSchema = z.object({
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
  phoneNumber: z
    .string()
    .trim()
    .min(10, "Enter a valid phone number!")
    .max(10, "Enter a valid phone number!"),
  password: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, "password cannot be less than 6 letters!")
    .max(25, "password cannot be more than 25 characters!"),
});
