import { z } from "zod";

export const signupSchema = z.object({
    username: z.string().min(1, "Username is required"),
    password: z.string().min(1, "Password is required")
});
  
export const loginSchema = z.object({
    username: z.string().min(1, "Username is required"),
    password: z.string().min(1, "Password is required")
});

export type SignupParams = z.infer<typeof signupSchema>;
export type LoginParams = z.infer<typeof loginSchema>;
